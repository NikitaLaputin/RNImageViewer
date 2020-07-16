import React from 'react';

import { Image, Pressable, Text, View } from 'react-native';

import styles from './listItem.styles';

const ListItem = ({ onImageClick, image, title, description }) => {
  return (
    <View style={styles.listItem}>
      <Pressable onPress={onImageClick}>
        <Image style={styles.listItem__image} source={image} />
      </Pressable>
      <View style={styles.listItem__descriptionContainer}>
        <Text style={styles.listItem__title}>{title}</Text>
        <Text style={styles.listItem__description}>{description}</Text>
      </View>
    </View>
  );
};

export default ListItem;
