const GET_CHARACTERS = 'GET_CHARACTERS';
const CHARACTERS_LOADED_SUCCESS = 'CHARACTERS_LOADED_SUCCESS';

export const getCharacters = () => ({
    type: 'GET_CHARACTERS',
});

export const charactersLoadedSuccess = (payload) => ({
    type: 'CHARACTERS_LOADED_SUCCESS',
    payload
});
