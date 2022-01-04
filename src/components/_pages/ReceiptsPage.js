import React, { useEffect } from 'react';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import { RouteReceipt } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceipts } from '../../store/actions/receipt';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';

const ReceiptsPage = () => {
    const dispatch = useDispatch();
    const receipts = useSelector(state => state.receipt.items);
    const isLoading = useSelector(state => state.receipt.isFetching);
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
            <Cursor
                aniClass={cursorIsOnElement ? 'is-visible' : ''}
                ref={cursorRef}
            />
        </>
    );
};

export default ReceiptsPage;