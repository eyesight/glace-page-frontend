import React from 'react';
import PropTypes from 'prop-types';
import './TilesRoundItem.scss'

const TilesRoundItem = props => {
    return (
        <li class="tiles-round__item">
            <figure class="tiles-round__image-wrapper">
                <img
                    alt=""
                    class="tiles-round__image"
                    src="http://placekitten.com/200/150"
                />
            </figure>
            <div class="tiles-round__item-text-wrap">
                <p class="tiles-round__item-nr">2</p>
                <p class="tiles-round__item-text">Knopblauchzehen</p>
            </div>
        </li>
    );
};

TilesRoundItem.propTypes = {

};

export default TilesRoundItem;