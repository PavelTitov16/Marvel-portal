import {Component} from 'react';

import MarvelService from '../../services/MarvelService';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        offset: 220,
        charsEnded: false
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemsLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemsLoading: false,
            offset: offset + 9,
            charsEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderCharacters(charsArray) {
        const chars = charsArray.map((char) => {
            let imgStyle = {'objectFit' : 'cover'};

            if (char.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li 
                    className='char__item' 
                    key={char.id}
                    onClick={() => this.props.onCharSelected(char.id)}
                >
                    <img src={char.thumbnail} alt={char.name} style={imgStyle}/>
                    <div className="char__name">{char.name}</div>
                </li>
            )
        });

        return (
            <ul className="char__grid">
                {chars}
            </ul>
        )
    }

    render() {
        const {charList, loading, error, offset, newItemsLoading, charsEnded} = this.state;
        const items = this.renderCharacters(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                    onClick={() => this.onRequest(offset)}
                    disabled={newItemsLoading}
                    style={{'display': charsEnded ? "none" : 'block'}}
                    className="button button__main button__long"
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
