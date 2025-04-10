import { Text } from 'react-native'
import { router, Stack } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: { backgroundColor: "#f4511e" },
    headerTintColor: "#fff",
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: "bold" },
  }}>
    <Stack.Screen name="index" options={{
      headerShown: false,
      headerLeft: (props) => (
        <Text onPress={() => { router.back() }}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Text>
      ),
    }} />
    <Stack.Screen name="hello" options={{
      headerShown: true,
      headerLeft: (props) => (
        <Text onPress={() => { router.back() }}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Text>
      ),
    }} />
    <Stack.Screen name="hi" options={{
      headerShown: true, 
      headerLeft: (props) => (
        <Text onPress={() => { router.back() }}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Text>
      ),
    }} />
    <Stack.Screen name="hey" options={{ headerShown: true }} />
    <Stack.Screen name="hur" options={{ headerShown: true,
      headerLeft: (props) => (
        <Text onPress={() => {router.back()}}>
          <FontAwesome name="angle-left" size={30} color="white" />
        </Text>
      ),
     }} />
  </Stack>
}

