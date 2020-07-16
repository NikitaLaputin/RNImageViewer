import React, { createContext, useContext, useReducer } from 'react';

import galleryReducer, { initialState } from './gallery.reducer';
import { setGalleryVisibility, setInitialImage } from './gallery.actions';

const GalleryContext = createContext();

const GalleryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  const showGallery = setGalleryVisibility(dispatch).bind(null, true);
  const hideGallery = setGalleryVisibility(dispatch).bind(null, false);
  const setIndex = setInitialImage(dispatch);
  const getCaption = (index) => state.images[index].caption;

  return (
    <GalleryContext.Provider
      value={{
        images: state.images,
        initialIndex: state.index,
        isGalleryVisible: state.isGalleryVisible,
        hideGallery,
        showGallery,
        setIndex,
        getCaption,
      }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => useContext(GalleryContext);

export default GalleryContextProvider;
