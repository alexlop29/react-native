import { ExerciseRepository } from "@/repositories";

// deps
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

describe("Should describe the process of interacting with exercises", () => {
  let exercise: FirebaseFirestoreTypes.DocumentData;2

  beforeAll(async () => {
    exercise = await firestore().collection("Exercises").add({
      name: "Mock - Bench Press",
    });
  });

  test("Should create a new exercise", async () => {
    const exerciseRepository = new ExerciseRepository();
    const exercise = await exerciseRepository.createExercise({
      name: "Mock - Bench Press 2",
    });
    console.log(exercise);
    // view output, then call jest to confirm the test passed
  });

  // need to test error

  test("Should find an exercise by id", async () => {
    const exerciseRepository = new ExerciseRepository();
    const queried = await exerciseRepository.findExerciseById(exercise.id);
    expect(queried.id).toBe(exercise.id);
    expect(queried.data().name).toBe("Mock - Bench Press");
  });

  // need to test error
});

/* 
Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.

    > 1 | import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
        | ^
      2 |
      3 | class BaseRepository {
      4 |     protected db: FirebaseFirestoreTypes.Module;

firestore() requires access to the underlying native packages

According to `@github/invertase/react-native-firebase`, 
the current options to test firebase with jest include
mocking the module, in turn removing the prospect of intergration
tests, and potentially emulting the configuration.
https://github.com/invertase/react-native-firebase/discussions/4719

As a potential work around, attempt testing the underlying queries and mutations
by wrapping the test in components, using the react-native
testing library.
*/

