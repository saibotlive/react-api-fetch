export const APP_GET_DATA = 'APP_GET_DATA';
export const APP_GET_DATA_SUCCESS = 'APP_GET_DATA_SUCCESS';
export const APP_GET_DATA_FAILURE = 'APP_GET_DATA_FAILURE';
export const APP_FILTER_PHOTOS = 'APP_FILTER_PHOTOS';

export const appGetData = () => {
  return {
    type: APP_GET_DATA
  };
};

export const appGetDataSuccess = payload => {
  return {
    type: APP_GET_DATA_SUCCESS,
    payload
  };
};

export const appGetDataFailure = payload => {
  return {
    type: APP_GET_DATA_FAILURE,
    payload,
    error: true
  };
};

export const appFilterPhotos = payload => {
  return {
    type: APP_FILTER_PHOTOS,
    payload
  };
};
