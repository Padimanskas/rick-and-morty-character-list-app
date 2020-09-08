function* getCharacters(lastLoadedPageNumber) {
    return yield fetch(`https://rickandmortyapi.com/api/character/?page=${ lastLoadedPageNumber }`)
        .then(response => response.json()).catch(error => error);
}

export { getCharacters as getCharactersApi };
