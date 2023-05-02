import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import './MainNav.scss';
import Logo from '../Logo/Logo';
import Burger from '../Burger/Burger';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { motion } from 'framer-motion';

//TODO: define this the right way! -> declare a interface and check line 37 not t be any
type Props = {
	categories: any;
	isLoading: boolean;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
	selectedElement: string;
	burgerClick: React.MouseEventHandler<HTMLButtonElement>;
	isNavOpen: boolean;
};

type SubCat = {
	id: string;
	attributes: {
		name: string;
	};
};

const Header = forwardRef<HTMLDivElement, Props>(
	({ categories, isLoading, onClick, selectedElement, burgerClick, isNavOpen }, ref) => {
		//TODO: check to not have ani!
		const renderCategories = (items: any) => {
			return items?.data?.map((item: SubCat) => {
				const categoryItem = item?.attributes;
				return (
					<li
						key={`nav-cat-${item.id}`}
						className={`main-nav__list-item ${
							categoryItem.name === selectedElement ? 'active' : ''
						}`}
					>
						<Link
							data-category={categoryItem.name}
							onClick={onClick}
							to={`/category/${categoryItem.name}`}
							key={`nav-cat-${item.id}`}
							className='main-nav__list-link'
						>
							{categoryItem.name}
						</Link>
					</li>
				);
			});
		};

		if (isLoading) return <LoadingSpinner />;
		return (
			<motion.header
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 1, delay: 0.2, ease: [0.87, 0, 0.13, 1] },
				}}
				className={`header ${isNavOpen ? 'header--open' : ''}`}
			>
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
							{categories?.map((category: CategoryGroupType) => (
								<li key={`cat-group-${category?.id}`} className='main-nav__column'>
									<h3 className='main-nav__subtitle'>{category?.attributes.title}</h3>
									<ul className='main-nav__list'>
										{renderCategories(category?.attributes.categories)}
									</ul>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</motion.header>
		);
	}
);

export default Header;
