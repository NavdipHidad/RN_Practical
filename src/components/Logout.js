import React from 'react';

import {Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setToken} from '../redux/actions';

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(setToken(''));
  AsyncStorage.setItem('Token', '')
    .then(() => {
      Alert.alert('out');
    })
    .catch(err => {
      console.log(err);
    });
  Alert.alert('out');
  console.log('In logout');
};

export default Logout;
