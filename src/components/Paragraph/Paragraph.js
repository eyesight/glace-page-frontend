import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.scss';

const Paragraph = props => {
    return (
        <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
        </p>
    );
};

Paragraph.propTypes = {

};

export default Paragraph;