<<<<<<< HEAD
### 🏄 Getting Started
```
nvm use 20.18.0
npx expo run:ios
```

### Core Libaries
- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [Gluestack UI](https://ui.gluestack.io/)

### 🚧 To Do
Working on:
Select Exercise Component:
  - Install Gluestack UI
```
npx gluestack-ui init
npx gluestack-ui add select
npx gluestack-ui add icon
npm install lucide-react-native
```
[DONE] Create Select Component with Mock Data
[DONE] Test by adding to any page
[INPROGRESS] Create exercise table schema in Firebase Cloud FireStore
  - Search for proposed backend schema for exercise

Did not like the exercise schema
creating new schema

workout:
- id
- name
- date
- duration

- log ?? 

exercise:
- id
- name
- category
- description

set:
- id
- exerciseId
- weight
- reps

- Would like something similar to the gab
Group: Weight Lifting
Block: Exercise Log
- Group Attribute: Set
- Block Attribute: Exercise, Rep, Set

Block - Weight Lifting

org/groups/group_id/blocks/block_id/

user/groups/weight_lifting_id/blocks/exercise_log_id

group_attributes: exerise_name
block_attributes: {rep, weight}

NOT ONE SINGLE ARCHITECTURE FITS EVERY PROBLEM
HOWEVER, THIS DOES PREVENT NESTED DOCUEMTS
ALSO ALLOWS FOR LONG-TERM GROWTH OF DATA SETS

Could leverage table structure to hold the data as opposed to tracking as group and block attributes

// GOOD: user/groups/weight_lifting_id/blocks/exercise_log_id

Groups:
- Weight Lifting
- Exercise

Group Attributes:
- Weight Lifting
- Exercise
  - Sets
    - Exercise Name
    - Reps
    - Weight

Block Attributes: 
 - Set

  - Create schema for exercise
  - Create a couple of sample exercises

- Use tanstack query to retrieve data from Firestore
- Perform UI Update to Select Exercise Component


- Create UI Components to Track A Workout
  - Button: Start Exercise
  - Select exercise - Dropdown of existing exercises or add new exercise
  - Automatically add one set
  - Enter weight (lbs) (for now)
  - Enter reps
  - Option to add another set

### References
- [Glustack UI - Installation](https://gluestack.io/ui/docs/home/getting-started/installation)
=======
### About
Demonstrates a mobile application with real-time streaming using React Native, Expo, and Firebase Cloud Firestore

### 🏄 Getting Started
```
nvm use 20.18.0
cd app
npx expo run:ios
```

### 📝 Notes
Please see [AlexLop29 - React Native - Default Firebase Config](https://github.com/alexlop29/react-native/tree/react-native-with-default-firebase-config). It contains the initial Firebase configuration used to bootstrap this project.

### 🔧 Core Libraries
- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Native Firebase](https://rnfirebase.io/)
- [React Native Firebase - Firestore](https://rnfirebase.io/firestore/usage)
- [NativeWind](https://www.nativewind.dev/)

>>>>>>> react-native-with-firebase-cloud-firestore
