import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH3 from '../TitleH3/TitleH3';

const renderTileItems = (items) => {
    items && items.length > 0 ?
        items.map((item, index) => (
            <TilesItem {...item} key={index} />
        )) : (<div>no item</div>)
}

const Tile = ({ items, isLoading }) => {
    return (
        <section className="tiles" role="list"> {
            isLoading ? <LoadingSpinner /> :
                <TitleH3 />}
        </section>
    )
};

Tile.propTypes = {
    items: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default Tile;