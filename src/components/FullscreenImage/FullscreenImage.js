import React from 'react';
import PropTypes from 'prop-types';
import './FullscreenImage.scss';

const FullscreenImage = props => {
    return (
        <figure className="fullscreen-image">
            <img
                className="fullscreen-image__image"
                src="http://placekitten.com/2000/1500"
            />
        </figure>
    );
};

FullscreenImage.propTypes = {

};

export default FullscreenImage;