import { Link } from 'react-router-dom';
import './Tag.scss';

type Props = {
	tagItems: Array<TagProp>;
};

type TagProp = {
	name: string;
	id: string;
};

const Tag = ({ tagItems }: Props) => {
	return (
		<ul className='tags'>
			{tagItems?.map((item, index) => (
				<li key={index} className='tags__item'>
					<Link data-category={item.id} to={`/category/${item.id}`} key={`nav-cat-${item.id}`} className='tags__link'>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Tag;
