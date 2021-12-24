import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = props => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__wrap">
                    <div className="footer__left"><p className="copyright">copyright</p></div>
                    <div className="footer__right">
                        <nav className="footer-nav">
                            <ul className="footer-nav__wrapper">
                                <li className="footer-nav__item">
                                    <NavLink to="/receipt" className="footer-nav__link">Impressum</NavLink>
                                </li>
                                <li className="footer-nav__item">
                                    <NavLink to="/" className="footer-nav__link">Über</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;