import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import SchoolConsoleScreen from '../screens/SchoolConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="School consoleScreen"
        component={SchoolConsoleScreen}
        options={{
          headerShown: false,
          title: 'School Console',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="material"
              name="business"
              color={focused ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
