### Step 1: Configure React Native Firebase
Install Dependencies.
```
nvm use 20.17.0
npm install --save @react-native-firebase/app
```

Generate Android directory.
```
npx expo run:android
```

Generate Android credentials.
```
cd android && ./gradlew signingReport
```
