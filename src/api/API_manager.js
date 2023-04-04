import React from 'react';
import axios from 'axios';
import {Platform} from 'react-native';
const APImanager = axios.create({
  baseURL:
    Platform.OS == 'ios'
      ? 'http://localhost:8000'
      : 'http://192.168.200.33:8000/',
  responseType: 'json',
});

export default APImanager;
