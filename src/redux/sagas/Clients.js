import {ASYNC_FETCH_CLIENTS} from '../constants/Clients'
import {fetchClientsStart,fetchClientsSuccess,fetchClientsError} from '../actions/Clients'
import { all, takeEvery, put, fork, call } from 'redux-saga/effects';

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users')

export function* fetchClientsWorker() {
  try {
    yield put(fetchClientsStart())
    const data = yield call(fetchUsersFromApi);
    const clients = yield call(() => new Promise(res => res(data.json())))
    // let response = await fetch('https://jsonplaceholder.typicode.com/users')
    // let data = await response
    
    yield put(fetchClientsSuccess(clients))
  } catch(e){
    yield put(fetchClientsError())
  }
}

export function* fetchClientsWatcher(){
  yield takeEvery(ASYNC_FETCH_CLIENTS,fetchClientsWorker)
}

export default function* rootSaga() {
  yield all([
		fork(fetchClientsWatcher),
  ]);
}