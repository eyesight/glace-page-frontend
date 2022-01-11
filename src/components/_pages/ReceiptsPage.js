import React, { useEffect } from 'react';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import { RouteReceipt } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceipts } from '../../store/actions/receipt';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import Slideshow from '../Slideshow/Slideshow';

const ReceiptsPage = () => {
    const dispatch = useDispatch();
    const all = useSelector(state => state.receipt);
    const receipts = all.filteredItems;
    const isLoading = all.isFetching;
    const cursorRef = useRef(null);

    const cursorIsOnElement = useSelector(state => state.cursor.isOnElement);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchReceipts(RouteReceipt));
        };
        loadDetails();
    }, [dispatch]);

    return (
        <>
            <TitleH1
                text='Guten Morgen. Hier findest du Inspiration für die Küche.'
            />
            <Searchbar />
            <Tile
                items={receipts}
                isLoading={isLoading}
            />
            <Slideshow />
            <Cursor
                aniClass={cursorIsOnElement ? 'is-visible' : ''}
                ref={cursorRef}
            />
        </>
    );
};

export default ReceiptsPage;