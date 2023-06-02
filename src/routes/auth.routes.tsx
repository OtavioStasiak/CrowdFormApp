import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Trade} from '../screens/Trade';
import {Portfolio} from '../screens/Portfolio';

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Trade"
        component={Trade}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Portfolio"
        component={Portfolio}
      />
    </Tab.Navigator>
  );
}
