import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

const Tile = ({ children }) => {
    return (
        <section className="tiles">
            {children}
        </section>
    )
};

Tile.propTypes = {
    children: PropTypes.element.isRequired
};

export default Tile;