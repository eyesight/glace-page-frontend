import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.scss';

const Paragraph = ({ text }) => {
    return (
        <p className="paragraph">
            {text}
        </p>
    );
};

Paragraph.propTypes = {
    text: PropTypes.string,
};

export default Paragraph;