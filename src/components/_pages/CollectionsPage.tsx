// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import TitleH1 from '../TitleH1/TitleH1';
import Tile from '../Tile/Tile';
import { RouteCollection } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../../store/actions/collection';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';

const CollectionsPage = () => {
    const { id } = useParams();

    const dispatch: Dispatch<any> = useDispatch();
    const all: ICollections = useSelector((state: CollectionState) => state.collections);
    const isLoading = all.isFetching;
    const cursorRef = useRef(null);
    const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);
    let receipts = all?.item?.receipts;
    let pw = all?.item?.password;
    let title = "Titel";
    let tiletitle = `Hallo velo`;

    console.log(pw);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchCollections(`${RouteCollection}/${id}`));
        };
        loadDetails();
    }, [dispatch, id]); 

    return (
        <>  
            <TitleH1
                text={title}
            />
            <Tile
                items={receipts}
                isLoading={isLoading}
                title = {tiletitle} 
                isVisible = {true}
            />
            <Cursor
                aniClass={cursorIsOnElement.isOnElement ? 'is-visible' : ''}
                ref={cursorRef}
            />
        </>
    );
};

export default CollectionsPage;