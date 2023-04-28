import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH2 from '../TitleH2/TitleH2';

type Props = {
    items: RezeptType[],
    isLoading: boolean,
    title: string,
    isLikesVisible: boolean,
    likes?: LikeType[],
    collection?: {
        data: CollectionType
    }
}
const Tile = ({ items, isLoading, title, collection, isLikesVisible = false }: Props) => {

    if (isLoading) return (<section className="section tiles section--loading-spinner"><LoadingSpinner /></section>);

    return (
        <section className="tiles" role="list">
            <TitleH2
                title={title}
                theClass='tiles__item'
            />
            {items?.length > 0 ?
                items.map((item, index) => (
                    <TilesItem {...item.attributes} id={item.id} key={item.id} isLikesVisible={isLikesVisible} nr={index} collection={collection} />
                )) : <p>no content</p>}
        </section>
    )
};

export default Tile; 
