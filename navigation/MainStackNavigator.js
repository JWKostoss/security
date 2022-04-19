import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import InformationScreen from "../screens/InformationScreen";
import VitalScreen from "../screens/tabs/vital";
import Tasks from "../screens/tabs/Tasks";
import Steps from "../screens/tabs/Steps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PageContext } from "../context";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  headerStyle: {
    // backgroundColor: "#859a9b",
    backgroundColor: "#677d7e",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  const { headers } = React.useContext(PageContext);
  const [header, setHeader] = headers;
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
      <Stack.Screen
        name="Tasks"
        options={{ title: header }}
        component={Tasks}
      />
      <Stack.Screen
        name="Steps"
        options={{ headerShown: false }}
        component={Steps}
      />
    </Stack.Navigator>
  );
};

const VitalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Vital Signs" component={VitalScreen} />
    </Stack.Navigator>
  );
};

const LoginStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Vital Signs" component={VitalStackNavigator} />
    </Drawer.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      {/* <Tab.Screen name="Vital Signs" component={VitalStackNavigator} /> */}
    </Tab.Navigator>
  );
};

export { MainStackNavigator, LoginStackNav };