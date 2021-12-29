import React from 'react';
import PropTypes from 'prop-types';
import './TitleWrapper.scss';

const TitleWrapper = ({ title, children }) => {
  return (
    <header className="title-wrapper">
      <h1 className="title-h1">
        {title}
      </h1>
      {children}
    </header>
  );
};

TitleWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

export default TitleWrapper;