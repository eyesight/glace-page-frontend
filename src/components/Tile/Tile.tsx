import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH2 from '../TitleH2/TitleH2';

type Props = {
    items: RezeptType[],
    isLoading: boolean,
    title: string,
    isVisible: boolean,
    likes?: LikeType[],
    collection?: {
        data: CollectionType
    }
}

const Tile = ({ items, isLoading, title, collection, likes, isVisible = false }: Props) => {

    if (isLoading) return (<section className="section tiles section--loading-spinner"><LoadingSpinner /></section>);

    function countLike(arr: LikeType[] | undefined, id: string) {
        if(arr && arr.length > 0) {
            const result = arr.filter(like => {
                return like.attributes.receiptId === id.toString()
            });

            return result;
        }

        return 0;
    }

    return (
        <section className="tiles" role="list">
            <TitleH2
                title={title}
                theClass='tiles__item'
            />
            {items?.length > 0 ?
                items.map((item, index) => (
                    <TilesItem {...item.attributes} id={item.id} key={item.id} isVisible={isVisible} nr={index} collection={collection} likes={countLike(likes, item.id)} />
                )) : <p>no content</p>}
        </section>
    )
};

export default Tile; 
