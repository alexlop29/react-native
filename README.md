# react-native

Contains a series of coding snippets developed while leveraging the react native framework

### Getting Started

```
nvm use 20.10.0
npx expo run:ios
```

```
npx expo start
``

### References
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [React-Native-Firebase](https://rnfirebase.io/)
- [Firebase](https://firebase.google.com/)
- [Auth0](https://auth0.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Gluestack UI](https://gluestack.io/)
- [NativeBase](https://nativebase.io/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Unsplash API](https://unsplash.com/developers)
- [Android Studio](https://developer.android.com/studio)
- [Xcode](https://developer.apple.com/xcode/)

### Debugging React Native Applications
- [React Native DevTools](https://reactnative.dev/docs/react-native-devtools)
- [React Native - Debugging Basics](https://reactnative.dev/docs/debugging)
```

iOS Simulator: Cmd ⌘ + D (or Device > Shake)
Android emulators: Cmd ⌘ + M (macOS) or Ctrl + M (Windows and Linux)

```

### Service Repository Design Pattern
> A service-repository pattern is a low-level design pattern mainly used to separate the concerns in a software project. It comprises two layers i.e; a service layer and a repository layer.

> This layer is the point of contact in this pattern. This layer performs the actual business logic for the given request and queries the repository layer for any “single unit business object related operations”.

> This layer is responsible for all the operations, mostly CRUD and sometimes more complex, related to a single business unit or a database model/table.

### UI Design
- [Workout Tracker App - Single Page](https://dribbble.com/shots/23946492-Workout-Tracker-App)
- [Personal Workout App](https://dribbble.com/shots/19720962-Personal-Workout-App)

### Troubleshooting
```

xcrun simctl boot 4B289012-0F41-4B56-B834-E6F7B37A1E6B exited with non-zero code: 60
An error was encountered processing the command (domain=NSPOSIXErrorDomain, code=60):
Unable to boot the Simulator.
launchd failed to respond.

```
Resources:
- [GitHub Issue - Create React Native App - Issue #67](https://github.com/expo/create-react-native-app/issues/67)

```

ERROR Error: Native module RNFBAppModule not found. Re-check module install, linking, configuration,
build and install steps., js engine: hermes [Component Stack]
....
npx expo run:ios

```

```
