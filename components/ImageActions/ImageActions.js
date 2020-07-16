import React from 'react';
import { Text, View } from 'react-native';

import ImageActionButton from './ImageActionButton';

import styles from './imageActions.styles';

const ImageActions = ({
  topPosition,
  onClosePress,
  onSharePress,
  onSavePress,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        top: topPosition,
      }}>
      <ImageActionButton onPress={onClosePress} style={styles.button}>
        <Text style={styles.buttonContents}>X</Text>
      </ImageActionButton>
      <View style={styles.options}>
        <ImageActionButton onPress={onSavePress} style={styles.button}>
          <Text style={styles.buttonContents}>↓</Text>
        </ImageActionButton>
        <ImageActionButton onPress={onSharePress} style={styles.button}>
          <Text style={styles.buttonContents}>↑</Text>
        </ImageActionButton>
      </View>
    </View>
  );
};

export default ImageActions;
