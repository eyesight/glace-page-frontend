import React from 'react';
import './Burger.scss';

type Props = {
    clickFunc: React.MouseEventHandler<HTMLButtonElement>,
    isOpen: boolean,
  }

const Burger = ({ clickFunc, isOpen }: Props) => {
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

export default Burger; 