import React from 'react';
import PropTypes from 'prop-types';

const TilesRoundItem = props => {
    return (
        <li className="tiles-round__item">
            <figure className="tiles-round__image-wrapper">
                <img
                    alt=""
                    className="tiles-round__image"
                    src="http://placekitten.com/200/150"
                />
            </figure>
            <div className="tiles-round__item-text-wrap">
                <p className="tiles-round__item-nr">2</p>
                <p className="tiles-round__item-text">Knopblauchzehen</p>
            </div>
        </li>
    );
};

TilesRoundItem.propTypes = {

};

export default TilesRoundItem;