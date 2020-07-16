import { data } from '../../resources/data/cats';
import LocalImageModel from '../../models/localImage.model';
import actionTypes from './gallery.actionTypes';

const images = data.map((cat) => new LocalImageModel(cat));

export const initialState = {
  images,
  isGalleryVisible: false,
  index: 0,
};

const galleryReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.setGalleryVisibility: {
      return {
        ...state,
        isGalleryVisible: action.payload,
      };
    }
    case actionTypes.setInitialImage: {
      return {
        ...state,
        index: action.payload,
      };
    }
  }
};

export default galleryReducer;
