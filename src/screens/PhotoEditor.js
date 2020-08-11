import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNPhotoEditor } from 'react-native-photo-editor';

const PhotoEditor = () => {
  const onPress = () => {
    RNPhotoEditor.Edit({
      path:   .DocumentDirectoryPath + '/photo.jpg',
      stickers: [
        'sticker0',
        'sticker1',
        'sticker2',
        'sticker3',
        'sticker4',
        'sticker5',
        'sticker6',
        'sticker7',
        'sticker8',
        'sticker9',
        'sticker10',
      ],
      //   hiddenControls: ['clear', 'crop', 'draw', 'save', 'share', 'sticker', 'text'],
      colors: undefined,
      onDone: () => {
        console.log('on done');
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default PhotoEditor;
