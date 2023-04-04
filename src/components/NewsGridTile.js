import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const NewsGridTile = props => {
  return (
    <TouchableOpacity style={{...styles.gridItem}} onPress={props.onSelect}>
      <View>
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: '#00cc00',
  },
  title: {
    fontSize: 25,
    textAlign: 'right',
  },
});

export default NewsGridTile;
