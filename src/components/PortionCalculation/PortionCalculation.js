import React from 'react';
import PropTypes from 'prop-types';
import './PortionCalculation.scss';

const PortionCalculation = props => {
    return (
        <div className="portion-calculation">
            <div className="portion-calculation__inner">
                <button className="portion-calculation__button">–</button>
                <p className="portion-calculation__text">
                    <span className="portion-calculation__portion">2</span>
                    Portionen
                </p>
                <button className="portion-calculation__button">+</button>
            </div>
        </div>
    );
};

PortionCalculation.propTypes = {

};

export default PortionCalculation;