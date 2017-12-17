import { all } from 'redux-saga/effects'
import {
  watchSaga,
  watchSetEditorUserMode
} from './saga'

export default function* rootSaga() {
  yield all([
    watchSaga(),
    watchSetEditorUserMode(),
  ])
}