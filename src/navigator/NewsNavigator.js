import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NewsGridScreen from '../screens/News-gridScreen';
import NewsDetailsScreen from '../screens/NewsDetailScreen';
import {setToken} from '../redux/actions';

const Stack = createNativeStackNavigator();
const NewsNavigator = () => {
  const dispatch = useDispatch();
  const logout = () => {
    Alert.alert('Are you sure to Logout', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(setToken(''));
          AsyncStorage.setItem('Token', '')
            .then(() => {
              // Alert.alert('out');
            })
            .catch(err => {
              console.log(err);
            });
        },
      },
    ]);

    console.log('In logout');
  };
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_bottom'}}>
      <Stack.Screen
        name="NewsGridScreen"
        component={NewsGridScreen}
        options={{
          title: 'Top Headlines',
          headerRight: () => <Button title="Logout" onPress={() => logout()} />,
          headerStyle: {
            backgroundColor: '#c38f88',
          },
        }}
      />

      <Stack.Screen
        name="NewsDetailsScreen"
        component={NewsDetailsScreen}
        options={{
          title: 'News Detail',
          headerRight: () => <Button title="Logout" onPress={() => logout()} />,
          headerStyle: {
            backgroundColor: '#c38f88',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
