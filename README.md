# react-native
Contains a series of coding snippets developed while leveraging the react native framework 

### Getting Started
```
nvm use 20.10.0
npx expo run:ios
```

### To Do - Nov 10
- Working on creating repositories and classes for the backend calls to firebase
- Created Exercise Repo and Service
- Started testign with jest - incompatible - error message included in test file
- Working on using react-native-testing-library to test services and repos directly from the componnets.

- Right now - create compoentn with old queries and mutations
- Confirm func then swap in

- Actually - https://rnfirebase.io/firestore/emulator
react native firebase provides a firestore emulator
```
firebase emulators:start --only firestore
```

### To Do - Nov 6
- Create classes for the backend functionality.
  - Create class to handle CRUD for the Exercise collection.

### To Do
- [DONE] Setup GlueStack UI
- [DONE] Rebuild SelectExercise component.
```
npx gluestack-ui add select
npm install lucide-react-native
```
- [DONE] Configure React Native Firebase default config.
https://rnfirebase.io/
```
npm install --save @react-native-firebase/app
```
- [DONE] Configure React Native Firebase Firestore.
```
npm isntall @react-native-firebase/app
npm install @react-native-firebase/firestore
cd ios/ && pod install
```

- [CROSSOUT]Connnect Tanstack Query, React Native Firebase Firestore
(Is Tanstack necessary? React Native Firebase Firestore has subscriptions.)
(NEEDED!)

- [DONE] Configure Tanstack Query - React Native
(Avoids the use of firestore subscription and the useEffect() hook)
- Expo Specific Client ??? https://github.com/expo/dev-plugins/tree/main/packages/react-query
https://github.com/expo/dev-plugins/blob/main/packages/react-query/README.md
https://tanstack.com/query/latest/docs/framework/react/installation
(Can be its own project!!!) - Configure today and move to own code base
// Still Needs Tansack Query Installation
```
npm i @tanstack/react-query
npx expo install @dev-plugins/react-query
```
- Running without errors

- [DONE] Add Firebase List of Exercises to SelectExercise Comp using Tanstack Query!

- [DONE] Add a new exercise
```
npx gluestack-ui add input
```
 
 - [IN-PROGRESS] Add ability to save sets and workouts
 Creating screen transitions and comps!
 Build screen to start a workout
   /*
Plan the schema for the workout collection
{
    name: string;
    // date: date new Date().toJSON().slice(0, 10);
    timeStarted: string; new Date().toJSON();
    timeEnded: string; new Date().toJSON();
    user: string; // will add later
}
*/

 Can repurpose as a screent to start a template too

- [BACKLOG] Add categories to exercises
- [BACKLOG] Add transition between Select Exercise and Add Exercise Component
- [BACKLOG] TanStack Query is not automically receiving backend updates!
- [BACKLOG] Add functionality to search for exercises
- [BACKLOG] Add functionality to categorize exercises (e.g. biceps, triceps)

### Overall Session Goal:
```
Create UI Components to Track A Workout

Button: Start Exercise
Select exercise - Dropdown of existing exercises or add new exercise
Automatically add one set
Enter weight (lbs) (for now)
Enter reps
Option to add another set
```


LIFE NEW POTENTIAL BRAND NAME - SimplyLife


### Service Repository Design Pattern
> A service-repository pattern is a low-level design pattern mainly used to separate the concerns in a software project. It comprises two layers i.e; a service layer and a repository layer.

> This layer is the point of contact in this pattern. This layer performs the actual business logic for the given request and queries the repository layer for any “single unit business object related operations”.

> This layer is responsible for all the operations, mostly CRUD and sometimes more complex, related to a single business unit or a database model/table.

#### Writing Tests for the Service-Repository Pattern
- Implement unit tests, mocks for the service layer.
- Build intergration tests for the repository layer.
