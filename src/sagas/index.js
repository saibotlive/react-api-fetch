//import { delay } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchApiData } from '../auth';
import { FLICKR_API, PLACES_API } from '../constants';
import { APP_GET_DATA, appGetDataSuccess, appGetDataFailure } from '../actions';

function* fetchData() {
  try {

    const flickr = yield call(fetchApiData(FLICKR_API));

    const places = yield call(fetchApiData(PLACES_API));

    const data = { places: places.data, photos: flickr.data.photos };

    yield put(appGetDataSuccess(data));

  } catch (error) {
    yield put(appGetDataFailure(error));
  }
}

export function* watchGetUserExpenses() {
  yield takeEvery([APP_GET_DATA], fetchData);
}
export const appFetchPhotos = fetchData.bind(null);

export default function* rootSaga() {
  yield all([watchGetUserExpenses()]);
}
