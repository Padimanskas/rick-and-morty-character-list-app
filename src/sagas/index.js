import { put, all, select, debounce } from 'redux-saga/effects';
import { getCharacters, charactersLoadedSuccess } from '../actions';

function* fetchCharacters() {
    const state = yield select();
    const json = yield fetch(`https://rickandmortyapi.com/api/character/?page=${ state.lastLoadedPageNumber }`)
        .then(response => response.json());

    yield put({ type: "CHARACTERS_LOADED_SUCCESS", payload: json.results });
}

function* actionWatcher() {
    yield debounce(1000, 'GET_CHARACTERS', fetchCharacters)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}


