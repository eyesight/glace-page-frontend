import React from 'react';
import PropTypes from 'prop-types';
import './fullscreenImage.scss';

const FullscreenImage = props => {
    return (
        <figure class="fullscreen-image">
            <img
                class="fullscreen-image__image"
                src="http://placekitten.com/2000/1500"
            />
        </figure>
    );
};

FullscreenImage.propTypes = {

};

export default FullscreenImage;