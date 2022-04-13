import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'
import { UPDATE_TITLE, UPDATE_TITLE_FROM_SAGA } from '../constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* updateTitle(action) {
    try {
        yield put({ type: UPDATE_TITLE_FROM_SAGA, payload: `${action.payload}-Sagas` });
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeLatest(UPDATE_TITLE, updateTitle);
}

export default mySaga;