import './Tile.scss';
import TilesItem from './TilesItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TitleH2 from '../TitleH2/TitleH2';
import { motion } from 'framer-motion';
import { slideIn2 } from '../../helper/constants/animationVariants';

type Props = {
	items: RezeptType[];
	isLoading: boolean;
	title: string;
	isLikesVisible: boolean;
	likes?: LikeType[];
	collection?: {
		data: CollectionType;
	};
};
const Tile = ({ items, likes, isLoading, title, collection, isLikesVisible = false }: Props) => {
	if (isLoading)
		return (
			<section className='section tiles section--loading-spinner'>
				<LoadingSpinner />
			</section>
		);

	return (
		<motion.section
			className='tiles'
			role='list'
			initial='initial'
			animate='animate'
			variants={slideIn2}
		>
			<TitleH2 title={title} theClass='tiles__item' />
			{items?.length > 0 ? (
				items.map((item, index) => (
					<TilesItem
						{...item.attributes}
						id={item.id}
						key={item.id}
						isLikesVisible={isLikesVisible}
						likes={likes}
						nr={index}
						collection={collection}
					/>
				))
			) : (
				<p>no content</p>
			)}
		</motion.section>
	);
};

export default Tile;
