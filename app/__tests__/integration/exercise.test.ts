import { ExerciseRepository } from "@/repositories";

// deps
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

describe("Should describe the process of interacting with exercises", () => {
  let exercise: FirebaseFirestoreTypes.DocumentData;

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
