// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import { RouteReceipt, RouteReceiptAll } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceipts, receiptRandomized, fetchRandomReceipts } from '../../store/actions/receipt';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import Slideshow from '../Slideshow/Slideshow';
import { Dispatch } from 'redux';

const ReceiptsPage = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const all: IReceipt = useSelector((state: ReceiptState) => state.receipt);
    const receipts = all.filteredItems;
    const randomitems = all.randomItems;
    const isLoading = all.isFetching;
    const cursorRef = useRef(null);
    const filterTxt = all.filterText;

    const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchRandomReceipts(RouteReceiptAll));
            await dispatch(fetchReceipts(RouteReceipt));
        };
        loadDetails();
    }, [dispatch]);

    return (
        <>
            <TitleH1
                text='Guten Morgen. Hier findest du Inspiration für die Küche.'
            />
            <Searchbar
                searchValue={filterTxt}
            />
            <Tile
                items={receipts}
                isLoading={isLoading}
            />
            <Slideshow
                items={randomitems}
                isLoading={isLoading}
                onClickFunc={() => dispatch(receiptRandomized(RouteReceiptAll))}
            />
            <Cursor
                aniClass={cursorIsOnElement.isOnElement ? 'is-visible' : ''}
                ref={cursorRef}
            />
        </>
    );
};

export default ReceiptsPage;