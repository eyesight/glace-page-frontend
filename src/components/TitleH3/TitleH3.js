import React from 'react';
import PropTypes from 'prop-types';
import './TitleH3.scss';

const TitleH3 = ({ title, theClass }) => {
  return (
    <h3 className={`title-h3 ${theClass}`}>
      {title}
    </h3>
  );
};

TitleH3.propTypes = {
  title: PropTypes.string,
  theClass: PropTypes.string
};

TitleH3.defaultProps = {
  theClass: ''
}

export default TitleH3;