# react-native
Contains a series of coding snippets developed while leveraging the react native framework 

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
