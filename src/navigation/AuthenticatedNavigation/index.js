import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NextServicesScreen from '../../screens/NextServicesScreen';
import NewServiceScreen from '../../screens/NewServiceScreen';
import ServiceStandbyScreen from '../../screens/ServiceStandby';
import AvailableBusinessScreen from '../../screens/AvailableBusiness';
import AddressListScreen from '../../screens/AddressListScreen';
import AddressFormScreen from '../../screens/AddressFormScreen';
import CardsListScreen from '../../screens/CardsListScreen';
import CardFormScreen from '../../screens/CardFormScreen';

import ServicesDetailScreen from '../../screens/MissingScreens/ServicesDetailScreen';

const AuthenticatedNavigation = () => {
    
    const Stack = createNativeStackNavigator();
    
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="ServicesDetail" component={ServicesDetailScreen} />
          <Stack.Screen name="NextServices" component={NextServicesScreen} />
          <Stack.Screen name="NewService" component={NewServiceScreen} />
          <Stack.Screen name="ServiceStandby" component={ServiceStandbyScreen} />
          <Stack.Screen name="AvailableBusiness" component={AvailableBusinessScreen} /> 
          <Stack.Screen name="AddressList" component={AddressListScreen} />
          <Stack.Screen name="AddressForm" component={AddressFormScreen}/>
          <Stack.Screen name="CardsList" component={ CardsListScreen } />
          <Stack.Screen name="CardForm" component={ CardFormScreen } />
 
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;