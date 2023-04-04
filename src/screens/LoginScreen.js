import React, {useState, useEffect} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {setToken} from '../redux/actions';
import {user_login} from '../api/NewsAPIs';

const LoginScreen = ({navigation}) => {
  useEffect(() => {
    // isTokenSet();
  }, []);
  // const [emailId, setEmailId] = useState('');
  // const [password, setPassword] = useState('');
  const [emailId, setEmailId] = useState('aman@gmail.com');
  const [password, setPassword] = useState('#Amang4');

  const {token} = useSelector(state => state.newsReducer);
  const dispatch = useDispatch();

  const isTokenSet = async () => {
    const tokenKey = await AsyncStorage.getItem('Token');
    console.log('%%%% **', tokenKey, 'is type', typeof tokenKey);
    if (tokenKey != null) {
      // console.log('Async is null');
      // navigation.replace('NewsGridScreen');
      // return false;
    }
  };

  const inputTxtFunc = async () => {
    // debugger;
    try {
      user_login({uEmail: emailId, uPassword: password}).then(response => {
        console.log('Log for user_api', response);
        // debugger;
        AsyncStorage.setItem('Token', response.data.token)
          .then(() => {
            // debugger;
            console.log('AsyncStorage Token is set', response.data.token);
            dispatch(setToken(response.data.token));
            console.log('token in login screen ', token);
            navigation.replace('NewsGridScreen');
          })
          .catch(err => {
            // debugger;
            console.log('Error to store token in Async');
          });
        console.log('success res of sign In: ', response.data.token);
      });
    } catch (error) {
      // debugger;
      if (error.message !== 'Network Error') {
        console.log(
          'failed res of sign In: with Response data',
          error.response.data,
          'code is- ',
          error.response.status,
        );
      } else {
        console.log(`This is:= ${error}`);
      }
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.screen}>
      {/* <TextInput
        style={{...styles.loginInput}}
        placeholder={'Email ID'}
        placeholderTextColor="#432622"
        onChangeText={val => setEmailId(val)}
        value={emailId}
      />
      <TextInput
        style={styles.loginInput}
        placeholder={'Email ID'}
        placeholderTextColor="#432622"
        onChangeText={val => setEmailId(val)}
        value={emailId}
      /> */}
      <TextInput
        onChangeText={value => setEmailId(value)}
        style={[styles.loginInput]}
        placeholder={'Email ID'}
        placeholderTextColor="#432622"
        value={emailId}

        // autoComplete="username"
      />
      <TextInput
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder={'Password'}
        placeholderTextColor="#432622"
        secureTextEntry={true}
        style={styles.loginInput}
        returnKeyType="done"
      />

      <TouchableOpacity style={styles.loginBtn} onPress={inputTxtFunc}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
  },
  imgLogo: {
    height: '100%',
    width: '100%',
    // resizeMode: 'stretch',
    // backgroundColor: 'green',
  },
  loginInput: {
    borderColor: '#432622',
    borderWidth: 3,
    borderRadius: 14,
    marginVertical: 8,
    paddingHorizontal: 13,
    width: '80%',
    height: 50,
    fontSize: 20,
    color: '#432622',
    fontWeight: '600',
  },
  btnTxt: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '500',
  },
  loginBtn: {
    height: 40,
    width: '60%',
    backgroundColor: '#432622',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginTop: 20,
  },
});

export default LoginScreen;
