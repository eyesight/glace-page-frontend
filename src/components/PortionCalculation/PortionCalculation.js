import React from 'react';
import PropTypes from 'prop-types';
import './PortionCalculation.scss';

const PortionCalculation = ({ number, minuOperation, plusOperation }) => {
    return (
        <div className="portion-calculation">
            <div className="portion-calculation__inner">
                <button onClick={minuOperation} className="portion-calculation__button">–</button>
                <p className="portion-calculation__text">
                    <span className="portion-calculation__portion">{number} </span>
                    Portionen
                </p>
                <button onClick={plusOperation} className="portion-calculation__button">+</button>
            </div>
        </div>
    );
};

PortionCalculation.propTypes = {
    number: PropTypes.number,
    minuOperation: PropTypes.func,
    plusOperation: PropTypes.func,
};

export default PortionCalculation;