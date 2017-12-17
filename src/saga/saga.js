import { put, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/index'

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