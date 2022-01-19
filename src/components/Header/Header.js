import React, { forwardRef } from 'react';
import './Header.scss';
import './MainNav.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import { PropTypes } from 'prop-types';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const Header = forwardRef(({ aniClass, styleTranslate, categories, isLoading }, ref) => {
    const animationStyle = {
        transform: `translateY(${styleTranslate}px)`
    };

    const renderCategories = (items) =>
        items.map((item) => {
            return (
                <li key={`nav-cat-${item.id}`} className='main-nav__list-item'>
                    <Link to={`/categories/${item.id}`} className='main-nav__list-link'>{item.name}</Link>
                </li>
            )
        });

    if (isLoading) return (<LoadingSpinner />);

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
                        {
                            categories && categories.map((category) =>
                                <li key={`cat-group-${category.id}`} className='main-nav__column'>
                                    <h3 className='main-nav__subtitle'>{category.title}</h3>
                                    <ul className='main-nav__list'>
                                        {renderCategories(category.categories)}
                                    </ul>
                                </li>
                            )
                        }
                        {/* <li className='main-nav__column'>
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
                        </li> */}
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