import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import NewsGridScreen from '../screens/News-gridScreen';
import NewsDetailsScreen from '../screens/NewsDetailScreen';
import SplashScreen from '../screens/SplashScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_bottom'}}>
      <Stack.Screen
        name="NewsLoginScreen"
        component={LoginScreen}
        options={{title: 'Sign In', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
