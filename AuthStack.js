import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import Entypo from "react-native-vector-icons/Entypo";
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF5F00",
        tabBarStyle: [
          {
            display: "flex",
            position: "absolute",
            height: 80,
            paddingTop: 10,
          },
          null,
        ],
        tabStyle: {
          borderRadius: 100,
        },
      }}
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="fingerprint" size={40} color={color} />
          ),
        }}
        name="Login"
        component={LoginScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="add-user" size={40} color={color} />
          ),
        }}
        name="SignUp"
        component={SignupScreen}
      />
    </Tab.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
