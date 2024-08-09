import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(1240);
    const [charsEnded, setCharsEnded] = useState(false);
    
    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true)
        getAllCharacters(offset)
            .then(onCharListLoaded);
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;

        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemsLoading(newItemsLoading => false);
        setOffset(offset => offset + 9);
        setCharsEnded(charsEnded => ended);
    };

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    };

    function renderCharacters(charsArray) {
        const chars = charsArray.map((char, i) => {
            let imgStyle = {'objectFit' : 'cover'};

            if (char.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li 
                    className='char__item'
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={char.id}
                    onClick={() => {
                        props.onCharSelected(char.id);
                        focusOnItem(i);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(char.id);
                            focusOnItem(i);
                        }
                    }}
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
    };

    const items = renderCharacters(charList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemsLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                onClick={() => onRequest(offset)}
                disabled={newItemsLoading}
                style={{'display': charsEnded ? "none" : 'block'}}
                className="button button__main button__long"
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;
