import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreen from '../screens/ModalScreen';

const SampleDesignNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SampleDesignNavigator;
