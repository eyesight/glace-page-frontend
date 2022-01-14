import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH2 from '../TitleH2/TitleH2';

const Tile = ({ items, isLoading }) => {
    if (isLoading) return (<section className="section tiles section--loading-spinner"><LoadingSpinner /></section>);
    return (
        <section className="tiles" role="list">
            <TitleH2
                title={`${items ? items.length : 0} Rezepte`}
                theClass='tiles__item'
            />
            {items && items.length > 0 ?
                items.map((item, index) => (
                    <TilesItem {...item} key={index} />
                )) : <p>no content</p>}
        </section>
    )
};

Tile.propTypes = {
    items: PropTypes.array,
    isLoading: PropTypes.bool,
};

export default Tile;