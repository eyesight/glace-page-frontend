import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = props => {
    return (
        <footer class="footer">
            <div class="footer__inner">
                <div class="footer__wrap">
                    <div class="footer__left"><p class="copyright">copyright</p></div>
                    <div class="footer__right">
                        <nav class="footer-nav">
                            <ul class="footer-nav__wrapper">
                                <li class="footer-nav__item">
                                    <a href="#" class="footer-nav__link">Impressum</a>
                                </li>
                                <li class="footer-nav__item">
                                    <a href="#" class="footer-nav__link">Über</a>
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