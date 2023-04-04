import React, {useEffect, useState} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import NewsGridScreen from '../screens/News-gridScreen';
import NewsDetailsScreen from '../screens/NewsDetailScreen';
import SplashScreen from '../screens/SplashScreen';
import AuthNavigator from './AuthNavigator';
import {useSelector, useDispatch} from 'react-redux';
import NewsNavigator from './NewsNavigator';
import {setToken} from '../redux/actions';
// import NewsGridScreens from '../screens/NewsGridScreen';

const RootNavigator = params => {
  // const [tokenKey, setTokenKey] = useState();
  const {navigation} = params;
  const dispatch = useDispatch();
  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('Token').then(res => {
      // console.log('== -', res);
      // setTokenKey(res);
      dispatch(setToken(res));
    });
  }, []);

  const Stack = createNativeStackNavigator();
  const {token} = useSelector(state => state.newsReducer);
  // console.log('Token in Root', typeof token, 'is:', token);
  // console.log('token-key state: ', tokenKey == null);
  return token === '' || token === null || token === undefined || !token ? (
    <AuthNavigator />
  ) : (
    <NewsNavigator />
  );
};

export default RootNavigator;
