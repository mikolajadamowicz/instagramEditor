import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      {/* <RNCamera
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
      /> */}
      <View style={styles.container} />
      <TouchableOpacity onPress={takePicture} style={styles.capture}>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Login with Facebook
          </Text>
        </Icon.Button>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  capture: {
    position: 'absolute',
    width: '10%',
    height: '10%',
    backgroundColor: 'blue',
    bottom: '20%',
    left: '45%',
  },
});

export default Camera;
