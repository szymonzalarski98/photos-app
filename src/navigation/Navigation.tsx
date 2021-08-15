import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Albums } from '../containers';
import { TabBar } from "./TabBar/TabBar";
import { NewsNavigator } from "./NewsNavigation";

const Tab = createBottomTabNavigator();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={TabBar} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="News" component={NewsNavigator} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  </NavigationContainer>
);