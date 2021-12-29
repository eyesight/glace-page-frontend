import React from 'react';
import PropTypes from 'prop-types';
import './InfoBox.scss';

const InfoBox = ({ title, text }) => {
    return (
        <div className="info-box">
            <h3 className="title-h3 info-box__title">{title}</h3>
            <p className="info-box__text">{text}</p>
        </div>
    );
};

InfoBox.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};

export default InfoBox;