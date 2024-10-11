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
Add the following to app/android/gradle.properties:
org.gradle.java.home=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
...
cd android && ./gradlew signingReport
...
cd android && ./gradlew signingReport
Starting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details

> Configure project :expo

Using expo modules
  - expo-asset (10.0.10)
  - expo-constants (16.0.2)
  - expo-file-system (17.0.1)
  - expo-font (12.0.10)
  - expo-keep-awake (13.0.2)
  - expo-modules-core (1.12.25)
  - expo-splash-screen (0.27.6)
  - expo-system-ui (3.0.7)
  - expo-web-browser (13.0.3)


> Configure project :react-native-firebase_app
:react-native-firebase_app package.json found at /Users/alexanderlopez/Desktop/Github/react-native/app/node_modules/@react-native-firebase/app/package.json
:react-native-firebase_app:firebase.bom using default value: 33.3.0
:react-native-firebase_app:play.play-services-auth using default value: 21.2.0
:react-native-firebase_app package.json found at /Users/alexanderlopez/Desktop/Github/react-native/app/node_modules/@react-native-firebase/app/package.json
:react-native-firebase_app:version set from package.json: 21.0.0 (21,0,0 - 21000000)
:react-native-firebase_app:android.compileSdk using custom value: 34
:react-native-firebase_app:android.targetSdk using custom value: 34
:react-native-firebase_app:android.minSdk using custom value: 23
:react-native-firebase_app:reactNativeAndroidDir /Users/alexanderlopez/Desktop/Github/react-native/app/node_modules/react-native/android

> Configure project :react-native-reanimated
Android gradle plugin: 8.2.1
Gradle: 8.8

> Task :app:signingReport
Variant: debug
Config: debug
Store: /Users/alexanderlopez/Desktop/Github/react-native/app/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Tuesday, April 30, 2052
----------
Variant: release
Config: debug
Store: /Users/alexanderlopez/Desktop/Github/react-native/app/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Tuesday, April 30, 2052
----------
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/Desktop/Github/react-native/app/android/app/debug.keystore
Alias: androiddebugkey
MD5: 20:F4:61:48:B7:2D:8E:5E:5C:A2:3D:37:A4:F4:14:90
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
Valid until: Tuesday, April 30, 2052
----------

> Task :expo:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-asset:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-constants:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-file-system:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-font:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-keep-awake:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-modules-core:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-splash-screen:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-system-ui:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :expo-web-browser:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-firebase_app:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-gesture-handler:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-reanimated:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-safe-area-context:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------

> Task :react-native-screens:signingReport
Variant: debugAndroidTest
Config: debug
Store: /Users/alexanderlopez/.android/debug.keystore
Alias: AndroidDebugKey
Error: Missing keystore
----------
```

```
Add SHAs to Android App in Firebase.
https://console.firebase.google.com/u/0/project/my-app-e0ecb/settings/general/android:com.alexlop29.app
```

```
Download the google-services.json file and place it inside of your project at the following location: /android/app/google-services.json.
```

Configure Firebase with Android credentials
```
/android/build.gradle
buildscript {
  dependencies {
    // ... other dependencies
    // NOTE: if you are on react-native 0.71 or below, you must not update
    //       the google-services plugin past version 4.3.15 as it requires gradle >= 7.3.0
    classpath 'com.google.gms:google-services:4.4.2'
    // Add me --- /\
  }
}
...
/android/app/build.gradle:
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

### Defintions
> Gradle is a build tool that we use for Android development to automate the process of building and publishing apps.

> Gradle reads the app’s build configuration file (build.gradle) which contains information about the dependencies, build types, etc.
