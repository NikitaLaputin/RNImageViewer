import React from 'react';
import { Text, View } from 'react-native';

import styles from './imageCation.styles';

const ImageCaption = ({ caption, topPosition }) => {
  return (
    <View
      style={{
        ...styles.container,
        top: topPosition,
      }}>
      <View style={styles.textHolder}>
        <Text style={styles.text}>{caption}</Text>
      </View>
    </View>
  );
};

export default ImageCaption;
