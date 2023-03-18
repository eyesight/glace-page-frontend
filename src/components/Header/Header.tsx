import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import './MainNav.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

//TODO: define this the right way! -> declare a interface and check line 37 not t be any
type Props = {
	categories: CategoryGroupType[];
	isLoading: boolean;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
	selectedElement: string;
	burgerClick: React.MouseEventHandler<HTMLButtonElement>;
	isNavOpen: boolean;
};

type SubCat = {
	id: string;
	name: string;
};

const Header = forwardRef<HTMLDivElement, Props>(({ categories, isLoading, onClick, selectedElement, burgerClick, isNavOpen }, ref) => {
	//TODO: check to not have ani!
	const renderCategories = (items: any) =>
		items.map((item: SubCat) => {
			return (
				<li key={`nav-cat-${item.id}`} className={`main-nav__list-item ${item.name === selectedElement ? 'active' : ''}`}>
					<Link data-category={item.name} onClick={onClick} to={`/category/${item.name}`} key={`nav-cat-${item.id}`} className='main-nav__list-link'>
						{item.name}
					</Link>
				</li>
			);
		});

	if (isLoading) return <LoadingSpinner />;

	return (
		<header className={`header ${isNavOpen ? 'header--open' : ''}`}>
			<div className={`header__wrapper`} ref={ref}>
				<div className={`header__inner`}>
					<div className='header__item header__left'>
						<Logo />
					</div>
					<div className='header__item header__right'>
						<Burger clickFunc={burgerClick} isOpen={isNavOpen} />
					</div>
				</div>
			</div>
			<nav className='main-nav'>
				<div className='main-nav__inner'>
					<ul className='main-nav__list-container'>
						{categories?.map((category) => (
							<li key={`cat-group-${category.id}`} className='main-nav__column'>
								<h3 className='main-nav__subtitle'>{category.title}</h3>
								<ul className='main-nav__list'>{renderCategories(category.categories)}</ul>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
});

export default Header;
