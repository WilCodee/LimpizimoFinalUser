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
import ServiceDetailScreenss from '../../screens/Page25/Page25';

const AuthenticatedNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='NextServices' screenOptions={{headerShown: false}}> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="ServiceDetailss"
          component={ServiceDetailScreenss}
        />
        <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
        <Stack.Screen name="DeepClean" component={DeppCleanScreen} />
        <Stack.Screen name="NormalClean" component={NormalCleanScreen} />
        <Stack.Screen name="ServicesDetail" component={ServicesDetailScreen} />
        <Stack.Screen name="NextServices" component={NextServicesScreen} />
        <Stack.Screen name="NewService" component={NewServiceScreen} />
        <Stack.Screen name="ServiceStandby" component={ServiceStandbyScreen} />
        <Stack.Screen
          name="AvailableBusiness"
          component={AvailableBusinessScreen}
        />
        <Stack.Screen name="AddressList" component={AddressListScreen} />
        <Stack.Screen name="AddressForm" component={AddressFormScreen} />
        <Stack.Screen name="CardsList" component={CardsListScreen} />
        <Stack.Screen name="CardForm" component={CardFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;
