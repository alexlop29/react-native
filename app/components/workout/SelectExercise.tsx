import { View } from "react-native";
import { useState } from "react";

const SelectExercise = () => {
    // may be able to use prop to associate back to the parent workout!

    // can use react query to retrieve list of exercises from database in firebase cloud storage
    const [ exercise, setExercise ] = useState("");

  return (
    <View>
        {/* Should add form component to simplify submit */}
        {/* Need to add drop down */}
        {/* Will need option to add a new exercise */}
    </View>
  )
}

// Should handle new set in a different component

export default SelectExercise
