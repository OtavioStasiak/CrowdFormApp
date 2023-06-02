import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Trade} from '../screens/Trade';
import {Portfolio} from '../screens/Portfolio';
import {theme} from '../theme/theme';
import HomeIcon from '../assets/icons/home.svg';

import TradeIcon from '../assets/icons/trade.svg';
import PortfolioIcon from '../assets/icons/portfolio.svg';

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.purple_100,
          tabBarIcon: ({color, size}) => (
            <HomeIcon style={{color: color}} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.purple_100,
          tabBarIcon: ({color, size}) => (
            <TradeIcon style={{color: color}} size={size} />
          ),
        }}
        name="Trade"
        component={Trade}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.purple_100,
          tabBarIcon: ({color, size}) => (
            <PortfolioIcon style={{color: color}} size={size} />
          ),
        }}
        name="Portfolio"
        component={Portfolio}
      />
    </Tab.Navigator>
  );
}
