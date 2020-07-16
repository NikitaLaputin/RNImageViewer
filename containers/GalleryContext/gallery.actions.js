import actionTypes from './gallery.actionTypes';

export const setGalleryVisibility = (dispatch) => (visibility) =>
  dispatch({ type: actionTypes.setGalleryVisibility, payload: visibility });

export const setInitialImage = (dispatch) => (visibility) =>
  dispatch({ type: actionTypes.setInitialImage, payload: visibility });
