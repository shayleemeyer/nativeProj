import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import QuizPage from "../pages/QuizPage";
import ResultPage from "../pages/ResultPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QuizPage"
        component={QuizPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultPage"
        component={ResultPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
