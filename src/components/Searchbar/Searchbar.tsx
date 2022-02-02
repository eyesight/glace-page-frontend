import { useEffect, useState } from 'react';
import './Searchbar.scss';
import { search, searchEntered, resetEntered } from '../../store/actions/receipt';
import { useDispatch } from 'react-redux';

type Props = {
    searchValue: string,
  }

const Searchbar = ({ searchValue }: Props) => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    let searchText = searchValue ? searchValue : '';

    useEffect(() => {
        setText(searchText);
    }, [searchText]);


    return (
        <form className="searchbar" method='GET' action="" onSubmit={(e) => {
            e.preventDefault();
            dispatch(searchEntered(text));
        }}>
            <div className="searchbar__searchfield-wrapper" role="search">
                <label className="searchbar__label sr-hidden" htmlFor="search">Nach Rezepten oder Zutaten suchen</label>
                <input
                    id='search'
                    className="searchbar__searchfield"
                    autoComplete="off"
                    placeholder="Nach Rezepten oder Zutaten suchen"
                    type="text"
                    onChange={(e) => {
                        dispatch(search(e.target.value));
                        setText(e.target.value);
                    }}

                    value={text}
                />
                <button className="searchbar__icon-wrapper" type="reset" onClick={(e) => {
                    e.preventDefault();
                    dispatch(resetEntered(''));
                    setText('');
                }}>
                    <div className="searchbar__icon close">
                        <span className="close__line"></span>
                        <span className="close__line"></span>
                    </div>
                </button>
                <button className="searchbar__icon-wrapper" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.596 17.596"
                        className="searchbar__icon"
                    >
                        <g className="search-icon" transform="translate(1 1)">
                            <path
                                d="M17.995,11.247A6.747,6.747,0,1,1,11.247,4.5a6.747,6.747,0,0,1,6.747,6.747Z"
                                transform="translate(-4.5 -4.5)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                            <path
                                d="M28.644,28.644l-3.669-3.669"
                                transform="translate(-13.462 -13.462)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default Searchbar;

