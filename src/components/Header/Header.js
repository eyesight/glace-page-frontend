import React, { forwardRef } from 'react';
import './Header.scss';
import './MainNav.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import { PropTypes } from 'prop-types';

const Header = forwardRef(({ aniClass, styleTranslate }, ref) => {
    const animationStyle = {
        transform: `translateY(${styleTranslate}px)`
    };

    return (
        <header className={`header ${aniClass}`}>
            <div className={`header__inner ${aniClass}`} ref={ref} style={animationStyle}>
                <div className="header__item header__left">
                    <Logo />
                </div>
                <div className="header__item header__right">
                    <Burger />
                </div>
            </div>
            <nav className='header__nav main-nav'>
                <div className='main-nav__inner'>
                    <ul className='main-nav__list-container'>
                        <li className='main-nav__column'>
                            <h3 className='main-nav__subtitle'>sdfsdf</h3>
                            <ul className='main-nav__list'>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                            </ul>
                        </li>
                        <li className='main-nav__column'>
                            <h3 className='main-nav__subtitle'>sdfsdf</h3>
                            <ul className='main-nav__list'>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                            </ul>
                        </li>
                        <li className='main-nav__column'>
                            <h3 className='main-nav__subtitle'>sdfsdf</h3>
                            <ul className='main-nav__list'>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                            </ul>
                        </li>
                        <li className='main-nav__column'>
                            <h3 className='main-nav__subtitle'>sdfsdf</h3>
                            <ul className='main-nav__list'>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                                <li className='main-nav__list-item'>
                                    <a href="#" className='main-nav__list-link'>asdfsdf</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
});

Header.propTypes = {
    aniClass: PropTypes.string,
    styleTranslate: PropTypes.number
};

export default Header;