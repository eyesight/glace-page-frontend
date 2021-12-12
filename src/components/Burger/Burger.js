import React from 'react';
import PropTypes from 'prop-types';
import './Burger.scss';

const Burger = props => {
    return (
        <button class="burger-menu">
            <span class="burger-menu__lines"></span>
            <span class="burger-menu__text">Die Karte</span>
        </button>
    );
};

Burger.propTypes = {

};

export default Burger;