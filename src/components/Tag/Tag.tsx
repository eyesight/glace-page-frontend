import { Link } from 'react-router-dom';
import './Tag.scss';

type Props = {
	tagItems: Array<TagProp>;
};

type TagProp = {
	id: string;
	attributes: {
		name: string;
	}
};

const Tag = ({ tagItems }: Props) => {

	return (
		<ul className='tags'>
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
		</ul>
	);
};

export default Tag;
