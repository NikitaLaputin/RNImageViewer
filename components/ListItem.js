import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListItem = ({ onImageClick, image, title, description }) => {
  return (
    <View style={styles.listItem}>
      <Image
        onClick={onImageClick}
        style={styles.listItem__image}
        source={image}
      />
      <View style={styles.listItem__descriptionContainer}>
        <Text style={styles.listItem__title}>{title}</Text>
        <Text style={styles.listItem__description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 180,
    paddingTop: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  listItem__image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  listItem__descriptionContainer: {
    padding: 10,
  },
  listItem__title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  listItem__description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default ListItem;
