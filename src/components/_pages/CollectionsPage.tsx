// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import TitleH1 from '../TitleH1/TitleH1';
import Tile from '../Tile/Tile';
import { RouteCollection, RouteLikes } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections } from '../../store/actions/collection';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import { fetchLikes } from '../../store/actions/likes';

const CollectionsPage = () => {
    const { id } = useParams();

    const dispatch: Dispatch<any> = useDispatch();
    const all: ICollections = useSelector((state: CollectionState) => state.collections);
    let allLikes: ILike = useSelector((state: LikeState) => state.likes);
    const theRoute = `${RouteLikes}?[collections.id][0]=${id}`
    const isLoading = all.isFetching;
    const cursorRef = useRef(null);
    const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);
    let receipts = all?.item?.receipts;
    let title = all?.item?.Title;
    let tiletitle = all?.item?.description;
    // let allLikes = all?.item?.likes;
    // console.log(allLikes?.item.length);
    // console.log(allLikes?.item);
    // console.log(all);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchCollections(`${RouteCollection}/${id}`));
        };
        loadDetails();
    }, [dispatch, id]); 

    useEffect(() => {
        const loadLikeDetails = async () => {
            await dispatch(fetchLikes(`${theRoute}`));     
        };
        loadLikeDetails();
    }, [dispatch]); 

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
                likes = {allLikes?.item}
                collection = {all?.item}
            />
            <Cursor
                aniClass={cursorIsOnElement.isOnElement ? 'is-visible' : ''}
                ref={cursorRef}
            />
        </>
    );
};

export default CollectionsPage;