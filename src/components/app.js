import React from 'react';
import '../styles/app.scss';
import CharacterList from '../containers/characterList';
import Spinner from '../containers/spinner';

let App = () => (
    <div>
        <CharacterList />
        <Spinner />
    </div>
);

export default App;
