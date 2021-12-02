import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-player';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Videos = ({uri, thumbnail}) => {
  return (
    <VideoPlayer
      video={{
        uri: uri,
      }}
      videoWidth={width}
      videoHeight={height}
      autoplay
      loop
      customStyles={{
        controls: {backgroundColor: 'transparent'},
        playControl: {
          position: 'absolute',
          bottom: height / 2 - 30,
          marginLeft: '39%',
          borderRadius: 120,
          height: 90,
          width: 1,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.51)',
          opacity: 1,
        },
        seekBar: {opacity: 0},
        controlButton: {opacity: 0},
        videoWrapper: {backgroundColor: '#15181f'},
      }}
      pauseOnPress={true}
      resizeMode="cover"
      thumbnail={{uri: 'https://picsum.photos/1080/1920.jpg'}}
    />
  );
};

export default Videos;
