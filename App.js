import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListItem from './components/ListItem';
import { data } from './resources/data/cats';
import Gallery from 'react-native-image-gallery';

const App = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialImage, setInitialImage] = useState(0);
  const onImageClick = useCallback((index) => {
    setInitialImage(index);
  }, []);
  const galleryImages = useMemo(
    () =>
      data.map(({ image, dimensions, title }) => ({
        source: image,
        dimensions,
        caption: title,
      })),
    [],
  );

  useEffect(() => {
    setIsGalleryOpen(true);
  }, [initialImage]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          {/*<FlatList*/}
          {/*  ListHeaderComponent={*/}
          {/*    <View>*/}
          {/*      <Text style={styles.header}>Cats</Text>*/}
          {/*    </View>*/}
          {/*  }*/}
          {/*  data={data}*/}
          {/*  renderItem={({ item, index }) => (*/}
          {/*    <ListItem*/}
          {/*      onImageClick={onImageClick(index)}*/}
          {/*      key={item.id}*/}
          {/*      image={item.image}*/}
          {/*      description={item.description}*/}
          {/*      title={item.title}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*/>*/}
        </View>
        <View style={{ flex: 1 }}>
          <Gallery
            initialPage={initialImage}
            style={{ flex: 1, backgroundColor: '#696969' }}
            images={galleryImages}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 180,
    paddingTop: 24,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default App;
