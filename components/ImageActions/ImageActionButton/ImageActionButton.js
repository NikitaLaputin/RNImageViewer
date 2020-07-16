import React from 'react';
import { Pressable, View } from 'react-native';

import styles from './imageActionButton.styles';

const ImageActionButton = ({ onPress, children, style }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          ...styles.button,
          ...style,
        }}>
        {children}
      </View>
    </Pressable>
  );
};

export default ImageActionButton;
