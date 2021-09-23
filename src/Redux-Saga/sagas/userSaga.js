import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUsers(action) {
    try {
        const users = yield call(() => axios.get('https://jsonplaceholder.typicode.com/users'));
        yield put({type: 'GET_USERS_SUCCESS', users: users.data});
    } catch (e) {
        yield put({type: 'GET_USERS_FAILED', message: e.message});
    }
}

function* actionWatcher() {
    yield takeEvery('GET_USERS', fetchUsers)
}

export default actionWatcher;
