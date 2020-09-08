import {put, all, select, debounce, call} from 'redux-saga/effects';
import {GET_CHARACTERS, charactersLoadedSuccess, charactersLoadedFiled} from '../actions';
import { getCharactersApi } from '../api';

function* fetchCharacters() {
    try {
        const { lastLoadedPageNumber } = yield select();
        const { results } = yield call(getCharactersApi, lastLoadedPageNumber);

        yield put(charactersLoadedSuccess(results));
    } catch (error) {
        yield put(charactersLoadedFiled(error));
    }
}

function* actionWatcher() {
    yield debounce(1000, GET_CHARACTERS, fetchCharacters);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}


