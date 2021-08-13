import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Albums, News } from '../containers';
import { TabBar } from "./TabBar/TabBar";

const Tab = createBottomTabNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="Albums" component={Albums} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  </NavigationContainer>
);