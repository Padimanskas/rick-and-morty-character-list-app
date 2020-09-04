const reducer = (state = {characters: [], lastLoadedPageNumber: 1}, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':
            return {...state, loading: true};
        case 'CHARACTERS_LOADED_SUCCESS':
            return {
                ...state,
                characters: [...state.characters, ...(action.payload || [])],
                loading: false,
                lastLoadedPageNumber: state.lastLoadedPageNumber + 1
            };
        default:
            return state;
    }
};
export default reducer;
