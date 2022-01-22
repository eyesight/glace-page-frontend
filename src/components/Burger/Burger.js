import React from 'react';
import PropTypes from 'prop-types';
import './Burger.scss';

const Burger = ({ clickFunc, isOpen }) => {
    return (
        <button onClick={clickFunc} className={`burger-menu ${isOpen ? 'burger-menu--open' : ''}`}>
            <span className="burger-menu__lines">
                <span className='burger-menu__line burger-menu__line-1'></span>
                <span className='burger-menu__line burger-menu__line-2'></span>
                <span className='burger-menu__line burger-menu__line-3'></span>
            </span>
            <span className="burger-menu__text">Die Karte</span>
        </button>
    );
};

Burger.propTypes = {
    clickFunc: PropTypes.func,
    isOpen: PropTypes.bool
};

export default Burger;