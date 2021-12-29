import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({ tagItems }) => {
    return (
        <ul className="tags">
            {
                tagItems && tagItems.length > 0 ?
                    tagItems.map((item, index) => (
                        <li key={index} className="tags__item">{item.name}</li>
                    )) : null
            }
        </ul>
    );
};

Tag.propTypes = {
    tagItems: PropTypes.array
};

export default Tag;