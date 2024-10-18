# react-native
Demonstrates implementing Auth0 user authentication in an Expo app

### 🏄 Getting Started
```
nvm use 20.18.0
npx create-expo-app@latest
cd app
- npm run android
- npm run ios
- npm run web
```

#### 📱 Generating mobile files
```
npx expo run:android
npx expo run:ios
```

### 🔥 Running the app
```
npx expo run:ios
npx expo run:android
```

### Troubleshooting
#### 🐛 Android
```
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
...
Add the following to app/android/gradle.properties:
org.gradle.java.home=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
...
cd android && ./gradlew signingReport
```
