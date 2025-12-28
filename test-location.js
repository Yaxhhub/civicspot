// Test Mapbox token and location services
console.log('🗺️ Testing Mapbox and Location Services...')

// Test Mapbox token
const MAPBOX_TOKEN = 'pk.eyJ1IjoieWF4aGh1YiIsImEiOiJjbWN5OWY4YnAwa2lrMnJxeGtpd2VwaG40In0.ZUAgUVKLyEeN9DLoY603tA'

fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=${MAPBOX_TOKEN}`)
  .then(response => response.json())
  .then(data => {
    if (data.features && data.features.length > 0) {
      console.log('✅ Mapbox token is valid')
      console.log('📍 Delhi coordinates:', data.features[0].center)
    } else {
      console.log('❌ Mapbox token issue')
    }
  })
  .catch(error => {
    console.log('❌ Mapbox API error:', error)
  })

// Test geolocation
if (navigator.geolocation) {
  console.log('🌍 Testing geolocation...')
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log('✅ Geolocation works!')
      console.log('📍 Your coordinates:', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy + 'm'
      })
    },
    (error) => {
      console.log('❌ Geolocation error:', error.message)
      console.log('🔄 Trying IP-based location...')
      
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          console.log('✅ IP-based location:', {
            city: data.city,
            region: data.region,
            country: data.country,
            lat: data.latitude,
            lng: data.longitude
          })
        })
        .catch(() => {
          console.log('❌ IP location also failed')
        })
    },
    { enableHighAccuracy: true, timeout: 10000 }
  )
} else {
  console.log('❌ Geolocation not supported')
}