import React from "react"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import Home from "./screens/home"
import PlacePage from "./screens/place"
import NewPost from "./screens/new-post"
import Profile from "./screens/profile"
import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"
import { ScreenStack } from "react-native-screens"
import { createStackNavigator } from "@react-navigation/stack"

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
`
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PlacePlage" component={PlacePage} />
        <Stack.Screen name="NewPost" component={NewPost} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
