import React, { forwardRef } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import { PropTypes } from 'prop-types';

const Header = forwardRef(({ aniClass, styleTranslate }, ref) => {
    const animationStyle = {
        transform: `translateY(${styleTranslate}px)`
    };

    return (
        <header className={`header ${aniClass}`} ref={ref} style={animationStyle}>
            <div className="header__inner">
                <div className="header__item header__left">
                    <Logo />
                </div>
                <div className="header__item header__right">
                    <Burger />
                </div>
            </div>
        </header >
    )
});

Header.propTypes = {
    aniClass: PropTypes.string,
    styleTranslate: PropTypes.number
};

export default Header;