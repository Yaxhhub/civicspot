# Google Vision API Setup Instructions

## 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Note your Project ID

## 2. Enable Vision API
1. Go to APIs & Services > Library
2. Search for "Cloud Vision API"
3. Click Enable

## 3. Create Service Account
1. Go to IAM & Admin > Service Accounts
2. Click "Create Service Account"
3. Name: `civicspot-vision`
4. Role: `Cloud Vision AI Service Agent` or `Editor`
5. Create and download JSON key file

## 4. Update Environment Variables
```env
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_KEY_FILE=./path/to/service-account-key.json
```

## 5. Place Key File
- Put the downloaded JSON file in your backend folder
- Update the path in .env file

## Features Added
- **Auto Issue Classification**: Detects potholes, graffiti, streetlights, etc.
- **Severity Assessment**: Rates issue severity from images
- **Label Detection**: Extracts detailed image labels
- **Smart Categorization**: Maps detected objects to issue types

## API Response Example
```json
{
  "aiAnalysis": {
    "labels": [
      {"description": "Road", "confidence": 95},
      {"description": "Asphalt", "confidence": 87}
    ],
    "detectedIssueType": "pothole",
    "suggestedSeverity": "high"
  }
}
```

## Testing
Upload an image when creating a report - the AI will automatically analyze it and suggest the issue type and severity.