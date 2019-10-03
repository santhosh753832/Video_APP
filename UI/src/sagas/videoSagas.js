import { ACTIONS } from '../constants/videoConstants';
import {triggerApi} from '../services/api';
import {call, put, fork, takeLatest } from 'redux-saga/effects';
import { getVideoDataSuccess } from '../actions/videoActions';
import { searchVideoSuccess } from '../actions/searchAction';
function* defaultSaga() {
    //
}

function* fetchVideoData(data) {
    try {
        const resultData = yield call(triggerApi, data);
        if (resultData) {
            yield put(getVideoDataSuccess(resultData))
        }
    } catch (err) {
        console.log(err);
    }
}
function* searchVideoData(searchVideoData) {
    try {

        const resultData = yield call(triggerApi, searchVideoData);
        if (resultData) {
            yield put(searchVideoSuccess(resultData))
        }
    } catch (err) {
        console.log(err);
    }
}

function* searchVideoFromServer() {
    yield takeLatest(ACTIONS.SEARCH_VIDEO_FROM_SERVER_ACTION, searchVideoData);
}

function* getVideoByPageNumber() {
    yield takeLatest(ACTIONS.GET_VIDEO_ACTION, fetchVideoData);
}

export default function* videoSaga() {
    yield fork(getVideoByPageNumber);
    yield fork(searchVideoFromServer);
}