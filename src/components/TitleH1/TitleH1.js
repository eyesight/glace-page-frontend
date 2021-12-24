import React from 'react';
import PropTypes from 'prop-types';
import './TitleH1.scss';

const TitleH1 = ({ text }) => {
  return (
    <h1 className="title-h1">
      {text}
    </h1>
  );
};

TitleH1.defaultProps = {
  text: 'Titel H1'
};

TitleH1.propTypes = {
  text: PropTypes.string.isRequired
};

export default TitleH1;