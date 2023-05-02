import { Link } from 'react-router-dom';
import './Tag.scss';
import { motion } from 'framer-motion';
import { slideIn } from '../../helper/constants/animationVariants';

type Props = {
	tagItems: Array<TagProp>;
};

type TagProp = {
	id: string;
	attributes: {
		name: string;
	};
};

const Tag = ({ tagItems }: Props) => {
	return (
		<motion.ul
			className='tags'
			initial='initial'
			animate='animate'
			exit='exit'
			variants={slideIn}
		>
			{tagItems?.map((item, index) => (
				<li key={index} className='tags__item'>
					<Link
						data-category={item.attributes.name}
						to={`/category/${item.attributes.name}`}
						key={`nav-cat-${item.id}`}
						className='tags__link'
					>
						{item.attributes.name}
					</Link>
				</li>
			))}
		</motion.ul>
	);
};

export default Tag;
