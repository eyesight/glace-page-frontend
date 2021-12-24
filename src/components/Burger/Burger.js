import React from 'react';
import PropTypes from 'prop-types';
import './Burger.scss';

const Burger = props => {
    return (
        <button className="burger-menu">
            <span className="burger-menu__lines"></span>
            <span className="burger-menu__text">Die Karte</span>
        </button>
    );
};

Burger.propTypes = {

};

export default Burger;