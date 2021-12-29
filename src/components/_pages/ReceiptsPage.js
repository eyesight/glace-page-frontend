import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import { RouteReceipt } from '../../helper/constants/routes';

const ReceiptsPage = ({ getReceipts, receipts, isFetching }) => {
    const [allReceipts, setAllReceipts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(RouteReceipt);

    useEffect(() => {
        getReceipts(RouteReceipt);
        setIsLoading(isFetching);
    }, []);

    useEffect(() => {
        setAllReceipts(receipts);
        setIsLoading(isFetching);
    }, [receipts]);

    console.log(allReceipts);
    console.log(isLoading);

    return (
        <>
            <TitleH1
                text='Guten Morgen. Hier findest du Inspiration für die Küche.'
            />
            <Searchbar />
            <Tile
                items={allReceipts}
                isLoading={isLoading}
            />
        </>
    );
};

ReceiptsPage.propTypes = {
    getReceipts: PropTypes.func.isRequired,
    receipts: PropTypes.array,
    isFetching: PropTypes.bool
};

export default ReceiptsPage;