import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH2 from '../TitleH2/TitleH2';

type Props = {
    items: RezeptType[],
    isLoading: boolean
}

const Tile = ({ items, isLoading }: Props) => {
    if (isLoading) return (<section className="section tiles section--loading-spinner"><LoadingSpinner /></section>);
    return (
        <section className="tiles" role="list">
            <TitleH2
                title={`${items ? items.length : 0} Rezepte`}
                theClass='tiles__item'
            />
            {items?.length > 0 ?
                items.map((item) => (
                    <TilesItem {...item} key={item.id} />
                )) : <p>no content</p>}
        </section>
    )
};

export default Tile; 