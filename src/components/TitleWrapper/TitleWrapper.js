import React from 'react';
import PropTypes from 'prop-types';
import './TitleWrapper.scss';
import Tag from '../Tag/Tag';

//todo: add h1 with props
const TitleWrapper = props => {
  return (
    <header className="title-wrapper">
      <h1 className="title-h1">
        Pasta mit Fenchel, Erbsen und Zitronen.
      </h1>
      <Tag />
    </header>
  );
};

TitleWrapper.propTypes = {

};

export default TitleWrapper;