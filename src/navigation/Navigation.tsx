import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Albums } from '../containers';
import { TabBar } from "./TabBar/TabBar";
import { NewsNavigator } from "./NewsNavigation";

const albumsHeaderOptions = {
  headerStyle: {
    height: 88,
  },
};

const Tab = createBottomTabNavigator();

export const Navigation = (): JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen name="News" component={NewsNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Albums" component={Albums} options={albumsHeaderOptions} />
    </Tab.Navigator>
  </NavigationContainer>
);