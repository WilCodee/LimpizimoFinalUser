import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import NextServicesScreen from '../../screens/NextServicesScreen';

const AuthenticatedNavigation = () => {
    
    const Stack = createNativeStackNavigator();
    
    return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NextServices" component={NextServicesScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticatedNavigation;