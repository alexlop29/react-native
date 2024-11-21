// import { View, Text, StyleSheet } from "react-native";

// // comps
// import ParallaxScrollView from "@/components/ParallaxScrollView";

// // icons
// import Ionicons from "@expo/vector-icons/Ionicons"; // research...
// /*
//     https://docs.expo.dev/guides/icons/
// */

// // deps
// import { useAuth0 } from "react-native-auth0";


// /*
//     Design:
//     Re-use `import ParallaxScrollView from "@/components/ParallaxScrollView";`
//     Display WallFlower logo
//     Display "Sign Up"

// */

// const SignUp = () => {
//   const { authorize } = useAuth0();

//   return (
//       <ParallaxScrollView
//         headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//         headerImage={
//           <Ionicons size={310} name="flower-outline" style={styles.headerImage} />
//           // reminder to replace with the wallflower logo
//         }
//       >
//         <Text>SignUp</Text>
//     </ParallaxScrollView>
//   )
// }

// // reminder to convert to native wind css
// const styles = StyleSheet.create({
//     headerImage: {
//       color: "#808080",
//       bottom: -90,
//       left: -35,
//       position: "absolute",
//     },
//     titleContainer: {
//       flexDirection: "row",
//       gap: 8,
//     },
//   });


// export { SignUp };


//     //   <ParallaxScrollView
//     //     headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//     //     headerImage={
//     //       <Ionicons size={310} name="code-slash" style={styles.headerImage} />
//     //     }
//     //   >
//     //     <Text>Loading...</Text>
//     //   </ParallaxScrollView>


// // const styles = StyleSheet.create({
// //     headerImage: {
// //       color: "#808080",
// //       bottom: -90,
// //       left: -35,
// //       position: "absolute",
// //     },
// //     titleContainer: {
// //       flexDirection: "row",
// //       gap: 8,
// //     },
// //   });
