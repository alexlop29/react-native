# react-native
Leverages Auth0's SDK to incorporate user management into an Expo app.

### 🏄 Getting Started
```
nvm use 20.18.0
cd app
npx expo run:ios
npx expo run:android
```

### 🔧 Core Libraries
- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React-Native-Auth0](https://github.com/auth0/react-native-auth0)

### Troubleshooting
```
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

#### 🐛 Android
```
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
...
Add the following to app/android/gradle.properties:
org.gradle.java.home=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
...
cd android && ./gradlew signingReport
```
