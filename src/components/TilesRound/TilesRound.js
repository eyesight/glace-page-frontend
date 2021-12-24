import React from 'react';
import PropTypes from 'prop-types';
import './TilesRound.scss';
import TilesRoundItem from './TilesRoundItem';

const TilesRound = () => {
    return (
        <ul className="tiles-round">
            <TilesRoundItem />
        </ul>

    );
};

export default TilesRound;