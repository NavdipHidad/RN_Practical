import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const image = {
  uri: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ccb1cf72839bb2d47936bf0eadf47da0.jpg',
};

import {setAuthorName} from '../redux/actions';
import getNews from '../api/NewsAPIs';

const NewsGridScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [masterData, setMasterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOneItem, setIsOneItem] = useState(false);
  const [isImgEmpty, setIsImgEmpty] = useState(false);
  useEffect(() => {
    setNewsFunc();
    // getNewsFunc();
  }, []);
  const dispatch = useDispatch();

  const {authorName} = useSelector(state => state.newsReducer);
  // console.log('Author from Redux at grid:=============== ', authorName);

  const setNewsFunc = () => {
    getNews()
      .then(response => {
        // console.log(response.data.articles);
        const newsData = response.data.articles;
        dispatch(setAuthorName(newsData));
        setMasterData(newsData);
        setFilteredData(newsData);
      })
      .catch(err => {
        console.warn(`Error to fetch news in grid ${err}`);
      });
  };
  console.log(masterData);

  const searchFilterFunc = text => {
    if (text) {
      setIsOneItem(true);
      // console.log('%%% ', text, '%% ', masterData);
      const newFilteredData = masterData.filter(item => {
        // console.log('item======>> ', item);
        const textData = text.toUpperCase();
        const itemData = item['title']?.toUpperCase();
        const authorData = item['author']?.toUpperCase();
        const descData = item['description']?.toUpperCase();
        return (
          itemData?.indexOf(textData) > -1 ||
          authorData?.indexOf(textData) > -1 ||
          descData?.indexOf(textData) > -1
        );
      });

      // console.log(newFilteredData);
      setFilteredData(newFilteredData);
      // console.log('**: ', filteredData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
      setIsOneItem(false);
    }
  };

  const styleFunc = imgURI => {
    if (isOneItem && !imgURI.hasOwnProperty('uri')) {
      return {
        // backgroundColor: '#F55793',
        // padding: 10,
        marginTop: 4,
        // marginHorizontal: 5,
        // marginVertical: 5,
        // margin: 5,
        alignItems: 'flex-end',
        height: 40,
        width: 370,
        justifyContent: 'flex-end',
        borderWidth: 3,
        borderColor: '#e5cfcc',
        borderRadius: 15,
      };
    } else if (isOneItem) {
      return {
        // backgroundColor: '#F55793',
        // padding: 10,
        marginTop: 4,
        // marginHorizontal: 5,
        // marginVertical: 5,
        // margin: 5,
        alignItems: 'flex-end',
        height: 170,
        width: 370,
        justifyContent: 'flex-end',
        borderWidth: 3,
        borderColor: '#e5cfcc',
        borderRadius: 15,
      };
    } else {
      return {
        // backgroundColor: '#F55793',
        // padding: 10,
        marginTop: 4,
        // marginHorizontal: 5,
        // marginVertical: 5,
        // margin: 1,
        alignItems: 'flex-end',
        height: 170,
        width: '50%',
        justifyContent: 'flex-end',
        borderWidth: 3,
        borderColor: '#e5cfcc',
        borderRadius: 15,
      };
    }
  };

  const Item = ({title, imgURI}) => {
    let imgLocation;
    // "https://media.wired.com/photos/63ea75bd69cf98bf3540429b/191:100/w_1280,c_limit/Coup-D'etat-In-Bitcoin-Land-Business.mp4"
    if (!imgURI || imgURI.slice(-3) === 'mp4') {
      imgLocation = require('../../assets/news-icon-button.jpeg');
      // setIsImgEmpty(true);
    } else {
      imgLocation = {uri: imgURI};
    }

    return (
      <TouchableOpacity
        onPress={() => {
          // console.log('*** *>', title);
          navigation.navigate('NewsDetailsScreen', {
            newsTitle: title,
            imgLocation: imgLocation,
          });
        }}
        style={{
          width: isOneItem ? '100%' : '50%',
        }}>
        <View
          style={{
            marginVertical: 5,
            marginHorizontal: 5,
          }}>
          {!isOneItem || !imgURI || imgURI?.slice(-3) !== 'mp4' ? (
            <ImageBackground
              source={imgLocation}
              // resizeMode="cover"
              style={styles.image}>
              <Text
                numberOfLines={2}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: 15,
                  marginBottom: 3,
                  marginLeft: 10,

                  // flex: 1,
                  // width: '100%',
                }}>
                {title}
              </Text>
            </ImageBackground>
          ) : (
            <Text
              // style={styles.title}
              style={{
                paddingVertical: 10,
                backgroundColor: '#c38f88',
                color: '#e5cfcc',
                width: '100%',
                fontWeight: '700',
                fontSize: 15,
                height: 50,
                paddingLeft: 10,
                paddingTop: 15,
              }}
              numberOfLines={1}>
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
      // <TouchableOpacity
      //   style={
      //     {backgroundColor: 'red'}
      //     // isOneItem ? styles.singleItem : styles.item
      //     // styleFunc(imgLocation)
      //   }
      //   onPress={() => {
      //     // console.log('*** *>', title);
      //     navigation.navigate('NewsDetailsScreen', {
      //       newsTitle: title,
      //       imgLocation: imgLocation,
      //     });
      //   }}>
      //   {/* {imgLocation.hasOwnProperty('uri') && isOneItem ? ( */}
      //   {(!imgURI || imgURI?.slice(-3) !== 'mp4') && (
      //     <Image source={imgLocation} resizeMode="cover" style={styles.image} />
      //   )}
      //   {/* ) : (
      //     <></>
      //   )} */}
      //   <View
      //     style={{
      //       position: 'absolute',
      //       paddingBottom: 10,
      //       padding: 7,
      //       paddingRight: 30,
      //       // paddingLeft: 7, {...styles.title},
      //     }}>
      //     <Text
      //       style={
      //         isImgEmpty && isOneItem ? {color: '#e5cfcc'} : {color: '#fff'}
      //       }
      //       numberOfLines={1}>
      //       {title}
      //     </Text>
      //   </View>
      // </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TextInput
        onChangeText={text => searchFilterFunc(text)}
        style={styles.searchInput}
        placeholder="Search Here"
        placeholderTextColor="#432622"
        value={search}
        returnKeyType="done"
      />
      <FlatList
        style={{
          width: '100%',
        }}
        data={filteredData}
        renderItem={({item}) => (
          <Item title={item['title']} imgURI={item['urlToImage']} />
        )}
        keyExtractor={item => item.title}
        numColumns={isOneItem ? 1 : 2}
        key={isOneItem ? '_' : '*'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    backgroundColor: '#F55793',
    // padding: 10,
    marginTop: 4,
    // marginHorizontal: 5,
    // marginVertical: 5,
    // margin: 5,
    alignItems: 'flex-end',
    height: 170,
    width: 370,
    justifyContent: 'flex-end',
    borderWidth: 3,
    borderColor: '#e5cfcc',
    borderRadius: 15,
  },
  item: {
    backgroundColor: '#F55793',
    // padding: 10,
    // marginTop: 0,
    // marginHorizontal: 5,
    // marginVertical: 5,
    // margin: 1,
    alignItems: 'flex-end',
    height: 170,
    width: '50%',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: '#e5cfcc',
    borderRadius: 15,
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#e5cfcc',
    // justifyContent: 'space-between',
  },
  image: {
    height: 170,
    width: '100%',

    // justifyContent: 'flex-end',
    // position: 'absolute',
  },
  title: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 15,
    // marginRight: 20,
    // shadowColor: '#000',
  },
  searchInput: {
    marginVertical: '3%',
    borderColor: '#432622',
    borderWidth: 3,
    borderRadius: 14,
    width: '96%',
    height: 40,
    padding: 3,
    fontSize: 17,
    fontWeight: '700',
    color: '#432622',
  },
});

export default NewsGridScreen;
