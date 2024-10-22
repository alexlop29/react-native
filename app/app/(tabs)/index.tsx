import { View, Text } from "react-native";

import { Link } from "expo-router";

export default function HomeScreen() {
  return (
      <View>
        <View></View>
        <View>
          <Link href="../workout">Start Training</Link>
        </View>
        <View></View>
      </View>
  );
}
