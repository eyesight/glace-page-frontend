import React from 'react';
import PropTypes from 'prop-types';
import './TitleWrapper.scss';

//todo: add h1 with props
const TitleWrapper = props => {
  return (
    <header className="title-wrapper">
      <h1 className="title-h1">
        Pasta mit Fenchel, Erbsen und Zitronen.
      </h1>
      <div className="tags">
        <p className="tags__item">text</p>
        <p className="tags__item">text</p>
        <p className="tags__item">text</p>
        <p className="tags__item">text</p>
        <p className="tags__item">text</p>
      </div>
    </header>
  );
};

TitleWrapper.propTypes = {

};

export default TitleWrapper;