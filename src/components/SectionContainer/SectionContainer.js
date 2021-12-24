import React from 'react';
import PropTypes from 'prop-types';
import './SectionContainer.scss';

const SectionContainer = ({ children }) => {
    return (
        <section className="section-container">
            {children}
        </section>
    );
};

SectionContainer.propTypes = {
    children: PropTypes.element.isRequired
};

export default SectionContainer;