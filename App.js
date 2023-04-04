import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setNewsData} from './src/redux/actions';
import getNews from './src/api/NewsAPIs';
import RootNavigator from './src/navigator/RootNavigator';
import {Store} from './src/redux/store';
import AuthNavigator from './src/navigator/AuthNavigator';
import SplashScreen from './src/screens/SplashScreen';
import SampleDesignNavigator from './src/navigator/SampleDesignNavigator';

const App = () => {
  // const dispatch = useDispatch();
  // setNewsFunc();
  // const [startup, setStartup] = useState(true);

  // const isTokeSet = async () => {
  //   const tokenKey = await AsyncStorage.getItem('Token');
  //   console.log('%%%% **', tokenKey, 'is type', typeof tokenKey);
  //   if (tokenKey == null) {
  //     // console.log('Async is null');
  //     // setStartup(false);
  //     return false;
  //   } else {
  //     // setStartup(true);
  //     return true;
  //   }
  // };

  return (
    <Provider store={Store}>
      {
        <NavigationContainer>
          {/* <>{isTokeSet() ? <AuthNavigator /> : <RootNavigator />}</> */}
          <RootNavigator />
          {/* <SampleDesignNavigator /> */}
          {/* <SplashScreen /> */}
        </NavigationContainer>
      }
    </Provider>
  );
};

export default App;
