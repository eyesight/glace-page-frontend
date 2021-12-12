import React from 'react';
import PropTypes from 'prop-types';
import './PortionCalculation.scss';

const PortionCalculation = props => {
    return (
        <div class="portion-calculation">
            <div class="portion-calculation__inner">
                <button class="portion-calculation__button">–</button>
                <p class="portion-calculation__text">
                    <span class="portion-calculation__portion">2</span>
                    Portionen
                </p>
                <button class="portion-calculation__button">+</button>
            </div>
        </div>
    );
};

PortionCalculation.propTypes = {

};

export default PortionCalculation;