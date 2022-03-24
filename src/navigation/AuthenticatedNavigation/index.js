import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NextServicesScreen from '../../screens/NextServicesScreen';
import NewServiceScreen from '../../screens/NewServiceScreen';
import ServiceStandbyScreen from '../../screens/ServiceStandby';
import AvailableBusinessScreen from '../../screens/AvailableBusiness';
import AddressListScreen from '../../screens/AddressListScreen';
import AddressFormScreen from '../../screens/AddressFormScreen';
import CardsListScreen from '../../screens/CardsListScreen';
import CardFormScreen from '../../screens/CardFormScreen';

import ServicesDetailScreen from '../../screens/MissingScreens/ServicesDetailScreen';
import NormalCleanScreen from '../../screens/NormalCleanScreen/NormalCleanScreen';
import DeppCleanScreen from './../../screens/DeepCleanScreen/index';
import ServiceDetailScreen from './../../screens/ServiceDetailScreen/index';
import HelpScreen from './../../screens/HelpScreen';
import UserProfileScreen from './../../screens/UserProfileScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LimpizimoMenu from '../../components/LimpizimoMenu';

// main drawer navigator
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="UserProfile"
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerStyle: {
          width: 320,
        },
      }}
      backBehavior="history"
      drawerContent={props => <LimpizimoMenu />}>
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="ServiceDetail" component={ServiceDetailScreen} />
      <Drawer.Screen name="DeepClean" component={DeppCleanScreen} />
      <Drawer.Screen name="NormalClean" component={NormalCleanScreen} />
      <Drawer.Screen name="ServicesDetail" component={ServicesDetailScreen} />
      <Drawer.Screen name="NextServices" component={NextServicesScreen} />
      <Drawer.Screen name="NewService" component={NewServiceScreen} />
      <Drawer.Screen name="ServiceStandby" component={ServiceStandbyScreen} />
      <Drawer.Screen
        name="AvailableBusiness"
        component={AvailableBusinessScreen}
      />
      <Drawer.Screen name="AddressList" component={AddressListScreen} />
      <Drawer.Screen name="AddressForm" component={AddressFormScreen} />
      <Drawer.Screen name="CardsList" component={CardsListScreen} />
      <Drawer.Screen name="CardForm" component={CardFormScreen} />
    </Drawer.Navigator>
  );
};

const AuthenticatedNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
