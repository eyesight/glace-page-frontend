import React from 'react';
import PropTypes from 'prop-types';
import './TilesRound.scss';

const round = (value, decimalPlaces) => {
    const multiplier = 10 ** (decimalPlaces || 0);
    return Math.round(value * multiplier) / multiplier;
}

const TilesRound = ({ items, portion, originalPortion }) => {
    return (
        <ul className="tiles-round">
            {
                items && items.length > 0 ?
                    items.map((item, index) => (
                        <li className="tiles-round__item" key={index}>
                            <figure className="tiles-round__image-wrapper">
                                <img
                                    alt=""
                                    className="tiles-round__image"
                                    src="http://placekitten.com/200/150"
                                />
                            </figure>
                            <div className="tiles-round__item-text-wrap">
                                <p className="tiles-round__item-nr">{`${round(((item.mass / originalPortion) * portion), 1)} ${item.unit ? item.unit.short : ''}`}</p>
                                <p className="tiles-round__item-text">{item.ingredient_item.name}</p>
                            </div>
                        </li>
                    )) : null
            }
        </ul>

    );
};

TilesRound.propTypes = {
    items: PropTypes.array,
    portion: PropTypes.number,
    originalPortion: PropTypes.number,
};

export default TilesRound;