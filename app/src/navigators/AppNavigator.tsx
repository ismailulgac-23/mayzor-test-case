import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appPages } from "../constants/app";
import { navigationRef } from ".";
import IndexPage from "../pages/index";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={appPages.index}>
        <Stack.Screen
          name={appPages.index}
          options={{
            headerShown: false,
          }}
          component={IndexPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
