/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RNCamera } from 'react-native-camera';
import { RNPhotoEditor } from 'react-native-photo-editor';

//TODO: add stickers
// TODO: add fontTypes
const App = () => {
  const camera = useRef();

  const capture = async () => {
    try {
      if (camera?.current?.takePictureAsync) {
        const data = await camera.current.takePictureAsync();

        RNPhotoEditor.Edit({
          path: data.uri,
          // stickers: [
          //   'sticker0',
          //   'sticker1',
          //   'sticker2',
          //   'sticker3',
          //   'sticker4',
          //   'sticker5',
          //   'sticker6',
          //   'sticker7',
          //   'sticker8',
          //   'sticker9',
          //   'sticker10',
          // ],
          // hiddenControls: [
          //   'clear',
          //   'crop',
          //   'draw',
          //   'save',
          //   'share',
          //   'sticker',
          //   'text',
          // ],
          colors: undefined,
          onDone: () => {
            console.log('on done');
          },
          onCancel: () => {
            console.log('on cancel');
          },
        });
      }
    } catch (error) {
      console.log('capture error', error);
    }
  };

  const takePicture = () => capture();
  return (
    <>
      <StatusBar hidden={true} />
      <RNCamera
        ref={camera}
        style={styles.container}
        captureAudio={false}
        onFaceDetected={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <TouchableOpacity onPress={takePicture} style={styles.capture}>
        <Icon name="camera" size={40} color="#FFFFFF" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  capture: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    height: '10%',
    bottom: '5%',
    left: '40%',
  },
});

export default App;
