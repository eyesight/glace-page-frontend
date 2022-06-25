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
import { useParams } from 'react-router-dom';

const ReceiptsPage = () => {
    const { id } = useParams();

    const dispatch: Dispatch<any> = useDispatch();
    const all: IReceipt = useSelector((state: ReceiptState) => state.receipt);
    const allCategory: ICategories = useSelector((state: CategoryState) => state.categories);
    const receipts = all.filteredItems;
    const randomitems = all.randomItems;
    const isLoading = all.isFetching;
    const cursorRef = useRef(null);
    const filterTxt = all.filterText;
    const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);
    //Parameter to differ if it is a category page or the normal receipt-page
    let route = id ? `${RouteReceipt}?[categories.id][0]=${id}` : RouteReceipt;
    let title = id ? `Unsere ${allCategory.selectedCategory?.adjektiv} Rezepte` : 'Guten Morgen. Hier findest du Inspiration für die Küche.';
    let tiletitle = id ? `Alle Sorten mit #${allCategory.selectedCategory?.name}` : `${receipts ? receipts.length : 0} Rezepte`;

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchRandomReceipts(RouteReceiptAll));
            await dispatch(fetchReceipts(route));
        };
        loadDetails();
    }, [dispatch, id]);

    return (
        <>  
            <TitleH1
                text={title}
            />
            <Searchbar
                searchValue={filterTxt}
            />
            <Tile
                items={receipts}
                isLoading={isLoading}
                title = {tiletitle} 
                isVisible = {false}
                likeFunction = {null}
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