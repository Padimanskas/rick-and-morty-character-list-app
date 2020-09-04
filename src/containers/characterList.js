import React from 'react';
import {connect} from 'react-redux'
import { getCharacters } from '../actions';
import moment from 'moment';

class CharacterList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderOneCharacter(character) {
        return (
            <div className="character-list">
                <div className="character-list-cell"><img src={character.image} alt={character.name}/></div>
                <div className="character-list-cell">{character.name}</div>
                <div className="character-list-cell">{character.gender}</div>
                <div className="character-list-cell">{moment(character.created).format('LLLL')}</div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getCharacters();
        window.addEventListener('scroll', this.loadMore());
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMore());
    }

    loadMore() {
        return () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
                this.props.getCharacters();
            }
        }
    }

    render() {
        const characters = this.props.characters;
        return characters ? characters.map(character => this.renderOneCharacter(character)) : null;
    }

}

const mapStateToProps = (state) => ({characters: state.characters});
const mapDispatchToProps = { getCharacters };

CharacterList = connect(mapStateToProps, mapDispatchToProps)(CharacterList);

export default CharacterList;
