import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images, Responsive, Screen } from "../Helper";
import { StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen"; //import SplashScreen
import AppBottomTab from "./AppBottomTab";
// import { useAppSelector } from "../Store/hooks";
import { useTranslation } from 'react-i18next';

import {
  HomeScreen,
  Signupscreen,
  Signinscreen,
  ProfileScreen,
  ProfileSettingsscreen,
  SetUpYourProfilesScreen,
  RealDScreen,
  CareToShareScreen,
  AliseScreen,
} from "../Screen";

// import AppBottomTab from "./AppBottomTab";
// import { add } from "lodash";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator();

interface appScrollviewProps {
  isLogin?: boolean;
}

export default function Routes(props: appScrollviewProps) {
  // useEffect(() => {
  //   SplashScreen.hide(); //hides the splash screen on app load.
  // }, []);

  const renderBottomTab = () => {
    const initialRouteName = props.isLogin
      ? Screen.HomeScreen
      : Screen.Signinscreen;
    // const initialRouteName = Screen.HomeScreen;
    return (
      <Tab.Navigator
        tabBar={(props) => <AppBottomTab props={props} />}
        screenOptions={{
          lazy: true,
          headerShown: false,
        }}
        initialRouteName={initialRouteName}
      >
        <Tab.Screen name={Screen.HomeScreen} component={HomeScreen} />
        <Tab.Screen name={Screen.ProfileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  // const isUserLogin = useAppSelector((state) => state.common.isLogin);
  // console.log("jhxcvjresult", isUserLogin);
  const { t, i18n } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={Screen.SetUpYourProfilesScreen}
        initialRouteName={Screen.Signinscreen}
        // initialRouteName={Screen.LoginScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Screen.HomeScreen} component={renderBottomTab} />
        <Stack.Screen name={Screen.Signupscreen} component={Signupscreen} />
        <Stack.Screen name={Screen.Signinscreen} component={Signinscreen} />
        <Stack.Screen name={Screen.ProfileSettingsscreen} component={ProfileSettingsscreen} />
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
