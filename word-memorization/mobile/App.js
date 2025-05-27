import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AppNavigastionScreenConfig } from "./config/config.js";
import MainScreen from "./navigation/MainScreen";
import Profile from "./navigation/screens/Profile";
import Feedback from "./navigation/info/Feedback.js";
import Information from "./navigation/info/Information.js";
import { useEffect, useState } from "react";
import useThemeColors from "./hooks/useThemeColors.js";

const Stack = createStackNavigator();

export default function App() {
  // useEffect(()=>{

  // })
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


function MyStack() {
  const mode = useThemeColors()
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main Screen"
        options={{
          headerTintColor: "#000",
          headerStyle: { backgroundColor:  mode.background, height: 40 },
          transitionSpec: {
            open: AppNavigastionScreenConfig,
            close: AppNavigastionScreenConfig,
          },
        }}
      >
        {(props) => <MainScreen {...props} mode={mode}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Fikr-mulohazalar"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {(props) => <Feedback {...props} mode={mode} />}
      </Stack.Screen>
      <Stack.Screen
        name="Dastur haqida ma'lumot"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerStyle: {
            backgroundColor: mode.background
          },
          headerTintColor: mode.text
        }}
      >
        {(props) => <Information {...props} mode={mode} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}