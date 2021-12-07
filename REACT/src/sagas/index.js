import { all } from 'redux-saga/effects';
import { listSaga } from './ItemSaga';

export default function* rootSaga() {
  yield all([
     ...listSaga
  ]);
}