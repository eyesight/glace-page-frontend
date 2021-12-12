import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

const Searchbar = props => {
    return (
        <form class="searchbar">
            <div class="searchbar__searchfield-wrapper">
                <input
                    class="searchbar__searchfield"
                    value=""
                    autocomplete="off"
                    placeholder="Nach Rezepten oder Zutaten suchen"
                    type="text"
                />
                <div class="searchbar__icon-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17.596 17.596"
                        class="searchbar__icon"
                    >
                        <g class="search-icon" transform="translate(1 1)">
                            <path
                                d="M17.995,11.247A6.747,6.747,0,1,1,11.247,4.5a6.747,6.747,0,0,1,6.747,6.747Z"
                                transform="translate(-4.5 -4.5)"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            />
                            <path
                                d="M28.644,28.644l-3.669-3.669"
                                transform="translate(-13.462 -13.462)"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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