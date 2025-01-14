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
import DeepCleanScreen from './../../screens/DeepCleanScreen/index';
import ServiceDetailScreen from './../../screens/ServiceDetailScreen/index';
import HelpScreen from './../../screens/HelpScreen';
import UserProfileScreen from './../../screens/UserProfileScreen';
import GeneralProblemsScreen from './../../screens/GeneralProblemsScreen';
import NotificationCenterScreen from './../../screens/NotificationCenterScreen';
import CollaboratorProfileScreen from './../../screens/CollaboratorProfileScreen';
import GiveInsightsScreen from './../../screens/GiveInsightsScreen';
import AcceptedServiceScreen from '../../screens/AcceptedServiceScreen';
import ServiceClockScreen from '../../screens/ServiceClockScreen';
import ServiceStarsScreen from '../../screens/ServiceStarsScreen';
import ServiceRewardScreen from '../../screens/ServiceRewardScreen';
import BeginServiceScreen from '../../screens/BeginServiceScreen';
import ServiceHistoryScreen from '../../screens/ServiceHistoryScreen';

import {createDrawerNavigator} from '@react-navigation/drawer';
import LimpizimoMenu from '../../components/LimpizimoMenu';

// main drawer navigator
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ServiceHistory"
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerStyle: {
          width: 320,
        },
      }}
      backBehavior="history"
      drawerContent={props => <LimpizimoMenu />}>
      <Drawer.Screen
        name="CollaboratorProfile"
        component={CollaboratorProfileScreen}
      />
      <Drawer.Screen
        name="NotificationCenter"
        component={NotificationCenterScreen}
      />
      <Drawer.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
      <Drawer.Screen name="BeginService" component={BeginServiceScreen} />
      <Drawer.Screen name="ServiceReward" component={ServiceRewardScreen} />
      <Drawer.Screen name="ServiceStars" component={ServiceStarsScreen} />
      <Drawer.Screen name="ServiceClock" component={ServiceClockScreen} />
      <Drawer.Screen name="AcceptedService" component={AcceptedServiceScreen} />
      <Drawer.Screen name="GiveInsights" component={GiveInsightsScreen} />
      <Drawer.Screen name="GeneralProblems" component={GeneralProblemsScreen} />
      <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="ServiceDetail" component={ServiceDetailScreen} />
      <Drawer.Screen name="DeepClean" component={DeepCleanScreen} />
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
