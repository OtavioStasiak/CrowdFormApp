import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SignIn} from '../screens/SignIn';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignIn} />
      <Tab.Screen name="Settings" component={SignIn} />
    </Tab.Navigator>
  );
}
