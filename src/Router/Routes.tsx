import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Responsive, Screen } from "../Helper";
import { StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

import {
  Signupscreen,
  Signinscreen,
  SetUpYourProfilesScreen,
  RealDScreen,
  CareToShareScreen,
  AliseScreen,
} from "../Screen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface appScrollviewProps {
  isLogin?: boolean;
}

export default function Routes(props: appScrollviewProps) {
 
  const { t, i18n } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screen.Signinscreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Screen.Signupscreen} component={Signupscreen} />
        <Stack.Screen name={Screen.Signinscreen} component={Signinscreen} />
        <Stack.Screen name={Screen.SetUpYourProfilesScreen} component={SetUpYourProfilesScreen} />
        <Stack.Screen name={Screen.RealDScreen} component={RealDScreen} />
        <Stack.Screen name={Screen.CareToShareScreen} component={CareToShareScreen} />
        <Stack.Screen name={Screen.AliseScreen} component={AliseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
Routes.defaultProps = {
  isLogin: false,
};
const styles = StyleSheet.create({
  drawercontainer: {
    backgroundColor: "white",
    width: Responsive.widthPx(75),
  },
});
