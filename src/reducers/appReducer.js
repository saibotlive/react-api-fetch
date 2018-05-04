import {
  APP_GET_DATA,
  APP_GET_DATA_FAILURE,
  APP_GET_DATA_SUCCESS,
  APP_FILTER_PHOTOS
} from '../actions';
const initialState = {
  filterValue: { value: 25, title: '' },
  filterByType: 'value',
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case APP_GET_DATA:
    return state;
  case APP_GET_DATA_SUCCESS:
    return { ...state, data: action.payload };
  case APP_GET_DATA_FAILURE:
    return;
  case APP_FILTER_PHOTOS:
    return { ...state, filterValue: action.payload };
  default:
    return state;
  }
};
