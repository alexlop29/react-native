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
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
...
cd android && ./gradlew signingReport
```
