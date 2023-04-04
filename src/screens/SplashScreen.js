import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {setToken} from '../redux/actions';
import {getUserName} from '../api/NewsAPIs';

const SplashScreen = params => {
  const {navigation} = params;
  //   const {token} = useSelector(state => state.newsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // setTimeout(() => {
    // handleToken();
    // navigation.replace('NewsGridScreen');
    // }, 1000);
  }, []);

  const handleToken = async () => {
    const dataTokenAsync = await AsyncStorage.getItem('Token');
    const dataToken = JSON.parse(dataTokenAsync);
    const allKeys = await AsyncStorage.getAllKeys();
    console.log('All keys: ', allKeys);
    if (allKeys.length === 0) {
      console.log('All keys in condition: ', allKeys);
      navigation.replace('NewsLoginScreen');
    }
    console.log('dataToken at splash', dataToken);
    if (dataToken) {
      dispatch(setToken(dataToken.uToken));

      let tokenResponseStatus;

      return getUserName(dataToken)
        .then(response => {
          console.log('API at splash to verify token', response);
          // navigation.replace('TaskScreen');
          tokenResponseStatus = response.status;
          console.log('tokenResponseStatus ', tokenResponseStatus);
          if (tokenResponseStatus == 200) {
            navigation.replace('NewsGridScreen');
          } else {
            navigation.replace('NewsLoginScreen');
          }
        })
        .catch(err => {
          console.log('Error at splash to verify token', err);
        });
    }
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.logo}
        source={require('../../assets/checklist.png')}
      />
      {/* <Image style={styles.logo} source={require('./assets/checklist.png')} /> */}
      <Text style={styles.screenTxt}>Will build full App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    height: 150,
    width: 150,
    margin: 10,
  },
  screenTxt: {
    color: '#ffffff',
    fontSize: 27,
  },
});

export default SplashScreen;
