import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const Camera = () => {
  const camera = useRef();
  const takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  // type={RNCamera.Constants.Type.back}
  // flashMode={RNCamera.Constants.FlashMode.on}
  return (
    <>
      <RNCamera
        ref={camera}
        style={styles.container}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <TouchableOpacity onPress={takePicture} style={styles.capture}>
        <Text style={{ fontSize: 14 }}> SNAP </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  capture: {
    position: 'absolute',
    width: '10%',
    height: '10%',
    backgroundColor: 'blue',
  },
});

export default Camera;
