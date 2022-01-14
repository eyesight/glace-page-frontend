import React from 'react';
import PropTypes from 'prop-types';
import './FullscreenImage.scss';

const FullscreenImage = ({ image, altText }) => {
    return (
        <figure className="fullscreen-image">
            <img
                className="fullscreen-image__image"
                src={image}
                alt={altText}
            />
        </figure>
    );
};

FullscreenImage.propTypes = {
    image: PropTypes.string,
};

export default FullscreenImage;