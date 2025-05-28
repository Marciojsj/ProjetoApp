
// npm install @react-navigation/native @react-navigation/native-stack
// npx expo install react-native-screens react-native-safe-area-context



// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../screens/Login';
// import SignUpScreen from '../screens/SignUp/SignUpScreen';
// import HomeScreen from '../screens/Home/HomeScreen';
// import { useAuth } from '../context/AuthContext';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   const { user } = useAuth();

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       {!user ? (
//         <>  
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//         </>
//       ) : (
//         <Stack.Screen name="Home" component={HomeScreen} />
//       )}
//     </Stack.Navigator>
//   );
// }