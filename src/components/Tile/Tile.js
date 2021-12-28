import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Tile = ({ items, isLoading }) => {
    return (
        <section className="tiles"> {
            isLoading ? <LoadingSpinner /> :
                items && items.map((item, index) => (
                    <TilesItem {...item} key={index} />
                ))}
        </section>
    )
};

Tile.propTypes = {
    items: PropTypes.array
};

export default Tile;