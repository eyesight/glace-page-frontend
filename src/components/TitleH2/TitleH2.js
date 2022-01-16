import React from 'react';
import PropTypes from 'prop-types';
import './TitleH2.scss';

const TitleH2 = ({ title, theClass }) => {
  return (
    <h2 className={`title-h2 ${theClass}`}>
      {title}
    </h2>
  );
};

TitleH2.propTypes = {
  title: PropTypes.string,
  theClass: PropTypes.string
};

export default TitleH2;
