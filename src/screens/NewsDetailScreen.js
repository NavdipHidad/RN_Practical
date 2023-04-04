import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

const NewsDetailsScreen = props => {
  const {navigation, route} = props;
  console.log(props);
  const {newsTitle, imgLocation} = route.params;
  const {authorName} = useSelector(state => state.newsReducer);
  const reduxAuth = authorName;
  console.log('Author from Redux: ', reduxAuth, 'with type', typeof reduxAuth);

  const selectedNews = reduxAuth.filter(news => news.title === newsTitle)[0];
  console.log('selected news:', selectedNews);
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.screen}>
        {/* <View style={{flex: 1, backgroundColor: 'red'}}> */}
        {imgLocation.hasOwnProperty('uri') ? (
          <Image
            source={{uri: selectedNews.urlToImage}}
            style={styles.imgStyle}
          />
        ) : (
          <></>
        )}
        {/* <Image
          source={{uri: selectedNews.urlToImage}}
          style={styles.imgStyle}
        /> */}
        <View>
          <Text style={styles.title}>{selectedNews.title}</Text>
        </View>
        <View>
          <Text style={styles.author}>Author: {selectedNews.author}</Text>
        </View>
        <View>
          <Text style={styles.description}>{selectedNews.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e5cfcc',
    // marginVertical: 20,
    // alignItems: 'center',
  },
  imgStyle: {
    height: '40%',

    width: '100%',
    // flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '800',
    margin: 18,
  },
  author: {
    fontSize: 17,
    fontWeight: '600',
    color: '#808080',
    marginBottom: 16,
    paddingHorizontal: 18,
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 18,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default NewsDetailsScreen;
