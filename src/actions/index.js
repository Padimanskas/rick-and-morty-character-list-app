export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CHARACTERS_LOADED_SUCCESS = 'CHARACTERS_LOADED_SUCCESS';
export const CHARACTERS_LOADED_FILED = 'CHARACTERS_LOADED_FILED';

export const getCharacters = () => ({
    type: GET_CHARACTERS,
});

export const charactersLoadedSuccess = (payload) => ({
    type: CHARACTERS_LOADED_SUCCESS,
    payload
});

export const charactersLoadedFiled = (error) => ({
    type: CHARACTERS_LOADED_FILED,
    payload: error
});
