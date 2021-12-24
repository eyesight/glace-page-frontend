import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

const Searchbar = props => {
    return (
        <form className="searchbar">
            <div className="searchbar__searchfield-wrapper">
                <input
                    className="searchbar__searchfield"
                    value=""
                    autoComplete="off"
                    placeholder="Nach Rezepten oder Zutaten suchen"
                    type="text"
                    onChange={(e) => { console.log(e.target.value) }}
                />
                <div className="searchbar__icon-wrapper">
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
                </div>
            </div>
        </form>
    );
};

Searchbar.propTypes = {

};

export default Searchbar;