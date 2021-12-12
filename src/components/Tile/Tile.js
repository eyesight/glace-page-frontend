import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

const Tile = props => {
    return (
        <div class="tiles__item">
            <a href="#" class="tiles__anchor">
                <figure class="tiles__image-wrapper">
                    <img class="tiles__img" src="http://placekitten.com/200/300" />
                </figure>
            </a>
            <div class="tiles__item-inner">
                <h3 class="tiles__title">
                    <a href="#" class="tiles__anchor">
                        Pasta mit Fenchel, Erbsen und Zitronen
                    </a>
                </h3>
                <div class="tiles__button-wrap">
                    <button class="tiles__button">
                        <svg
                            class="tiles__icon-smile"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 28"
                        >
                            <g class="Smile" transform="translate(-546.252 -647.893)">
                                <g
                                    class="Head"
                                    transform="translate(546.252 647.893)"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <circle cx="14" cy="14" r="14" stroke="none" />
                                    <circle cx="14" cy="14" r="13" fill="none" />
                                </g>
                                <g class="Details" transform="translate(553.826 657.963)">
                                    <g class="Eyes" transform="translate(2.466 1.455)">
                                        <line
                                            class="right"
                                            y2="1.693"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-width="2"
                                        />
                                        <path
                                            class="left"
                                            d="M0,0V1.693"
                                            transform="translate(7.562)"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-width="2"
                                        />
                                    </g>
                                    <path
                                        class="mouth"
                                        d="M-14707.748-22613.916a10.594,10.594,0,0,0,6.418,2.271,8.435,8.435,0,0,0,5.926-2.271"
                                        transform="translate(14707.748 22621.668)"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="2"
                                    />
                                    <path
                                        class="zunge"
                                        d="M14.855,19.26s-.364,1.287,1.861,1.265,2.048-1.785,2.048-1.785"
                                        transform="translate(-7.574 -10.07)"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        opacity="0"
                                    />
                                </g>
                            </g>
                        </svg>
                        Das nehme ich
                    </button>
                </div>
            </div>
        </div>
    );
};

Tile.propTypes = {

};

export default Tile;