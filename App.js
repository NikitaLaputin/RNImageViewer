import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import CatGallery from './components/CatGallery';
import GalleryContextProvider from './containers/GalleryContext/GalleryContextProvider';

const App = () => {
  return (
    <GalleryContextProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <CatGallery />
      </SafeAreaView>
    </GalleryContextProvider>
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
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default App;
