import { put, takeLatest, takeEvery } from 'redux-saga/effects'
import * as types from '../constants/index'
import search_result from '../fake_data/search_results'


export function* someFunction(action) {
  try {
    yield put({
      type: types.SET_DATA,
      payload: action.payload
    })
  }
  catch (error) {
    console.log('error ', error)
  }
}

export function* watchSaga() {
  yield takeLatest(types.INITIALIZE_DATA, someFunction)
}

export function* setEditorUserMode(action) {
  try {
    yield put({
      type: types.GET_EDITOR_USER_MODE,
      user_mode: action.user_mode
    })
  }
  catch (error) {
    console.log('error ', error)
  }
}

export function* watchSetEditorUserMode() {
  yield takeLatest(types.SET_EDITOR_USER_MODE, setEditorUserMode)
}

export function* getSearchResultSaga(action) {
  console.log('getSearchResultSaga', action)
  try {
    const results = search_result

    yield put({
      type: types.SET_SEARCH_RESULTS,
      payload: results
    })
  }
  catch (error) {
    console.log('error ', error)
  }
}

export function* watchGetSearchResult() {
  yield takeEvery(types.GET_SEARCH_RESULTS, getSearchResultSaga)
}