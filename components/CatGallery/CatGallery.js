import React, { useCallback, useState } from 'react';
import { hasNotch } from 'react-native-device-info';

import ImageViewer from 'react-native-image-zoom-viewer';
import { FlatList, Modal, Text, View } from 'react-native';

import { useGalleryContext } from '../../containers/GalleryContext/GalleryContextProvider';
import ListItem from '../ListItem';

import styles from './catGallery.styles';
import ImageCaption from '../ImageCaption';
import ImageActions from '../ImageActions';

const isNotch = hasNotch();

const CatGallery = () => {
  const {
    images,
    initialIndex,
    isGalleryVisible,
    showGallery,
    hideGallery,
    setIndex,
    getCaption,
  } = useGalleryContext();

  const [contextVisible, setContextVisible] = useState(true);
  const toggleContext = useCallback(() => {
    setContextVisible((visible) => !visible);
  }, []);

  const onImageClick = useCallback(
    (index) => () => {
      setIndex(index);
      showGallery();
    },
    [setIndex, showGallery],
  );

  return (
    <>
      <Modal visible={isGalleryVisible} transparent={true}>
        <ImageViewer
          index={initialIndex}
          style={styles.gallery}
          imageUrls={images}
          enableSwipeDown
          onCancel={hideGallery}
          useNativeDriver
          renderIndicator={(currentIndex) =>
            contextVisible && (
              <ImageCaption
                topPosition={isNotch ? 120 : 90}
                caption={getCaption(currentIndex)}
              />
            )
          }
          renderHeader={() =>
            contextVisible && (
              <ImageActions
                onClosePress={hideGallery}
                topPosition={isNotch ? 30 : 0}
              />
            )
          }
          onClick={toggleContext}
        />
      </Modal>
      <View>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text style={styles.header}>Cats</Text>
            </View>
          }
          data={images}
          renderItem={({ item, index }) => (
            <ListItem
              onImageClick={onImageClick(index)}
              key={item.id}
              image={item.props.source}
              description={item.description}
              title={item.caption}
            />
          )}
        />
      </View>
    </>
  );
};

export default CatGallery;
