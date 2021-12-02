import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import Videos from './Videos';

const vids = [
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://picsum.photos/1080/1920.jpg',
  },
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://picsum.photos/1080/1920.jpg',
  },
  {
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://picsum.photos/1080/1920.jpg',
  },
];

const App = () => {
  return (
    <View>
      <FlatList
        data={vids}
        renderItem={item => (
          <Videos uri={item.item.uri} thumbnail={item.item.thumbnail} />
        )}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').height}
        decelerationRate={'fast'}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
