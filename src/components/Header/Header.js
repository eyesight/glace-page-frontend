import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';

const Header = props => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__item header__left">
                    <Logo />
                </div>
                <div className="header__item header__right">
                    <Burger />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {

};

export default Header;