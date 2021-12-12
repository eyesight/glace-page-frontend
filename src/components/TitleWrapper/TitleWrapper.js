import React from 'react';
import PropTypes from 'prop-types';
import './TitleWrapper.scss';

const TitleWrapper = props => {
  return (
    <header class="title-wrapper">
      <h1 class="title-h1">
        Pasta mit Fenchel, Erbsen und Zitronen.
      </h1>
      <div class="tags">
        <p class="tags__item">text</p>
        <p class="tags__item">text</p>
        <p class="tags__item">text</p>
        <p class="tags__item">text</p>
        <p class="tags__item">text</p>
      </div>
    </header>
  );
};

TitleWrapper.propTypes = {

};

export default TitleWrapper;