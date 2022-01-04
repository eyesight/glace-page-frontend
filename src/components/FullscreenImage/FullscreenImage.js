import React from 'react';
import PropTypes from 'prop-types';
import './FullscreenImage.scss';

const FullscreenImage = ({ image }) => {
    return (
        <figure className="fullscreen-image">
            <img
                className="fullscreen-image__image"
                src={image}
                alt=''
            />
        </figure>
    );
};

FullscreenImage.propTypes = {
    image: PropTypes.string,
};

export default FullscreenImage;