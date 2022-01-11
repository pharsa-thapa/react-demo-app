import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import axios from 'axios';
import { showSnackbarNotification } from '../notification/notification.actions';
import * as UserType from './user.types';
import {
  profileSaveSuccess,
  profileSaveFail,
  fetchProfileSuccess,
  fetchProfileFail,
} from './user.actions';
import { base_url } from '../../constants/appAPIs';

export function* fetchProfileAsync({ payload: { userid } }) {
  try {
    const { data } = yield axios.get(
      `${base_url}/profile/fetch/${userid}`
    );
    // console.log('profile: ', data);
    if (!data.message) {
      yield put(fetchProfileSuccess(data));
    } else {
      yield put(showSnackbarNotification(
        'error',
        'User not found.'
      ));
      yield put(fetchProfileFail({message: 'User not found.'}));
    }
  } catch (e) {
    console.error(e);
    yield put(fetchProfileFail(e));
  }
}

export function* profileSaveAsync({ payload: { value, history } }) {
  try {
    console.log(history);
    const authState = yield select(getAuthState);
    const userid = authState.currentUser.uid;
    const { data } = yield axios.post(
      `${base_url}/profile/set/${userid}`,
      {
        phone: value.phone,
      }
    );
    // console.log('data: ', data);
    if (data) {
      yield put(profileSaveSuccess(data));
      yield put(showSnackbarNotification(
        'success',
        'Contact detail saved successfully.'
      ));
    } else {
      yield put(showSnackbarNotification(
        'error',
        'Error on save contact detail. Please try again.'
      ));
    }
  } catch (e) {
    console.error('ERROR: ', e);
    yield put(profileSaveFail(e));
    yield put(showSnackbarNotification(
      'error',
      'Error on save contact detail. Please try again.'
    ));
  }
}

export function* watcherProfileSaveStart() {
  yield takeLatest(UserType.PROFILE_SAVE_START, profileSaveAsync);
}

export function* watcherFetchProfile() {
  yield takeLatest(UserType.FETCH_PROFILE_START, fetchProfileAsync);
}

export function* userSagas() {
  yield all([
    call(watcherProfileSaveStart),
    call(watcherFetchProfile),
  ]);
}
