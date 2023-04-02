import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { A11y, EffectCoverflow } from 'swiper';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { EndpointAssets } from '../../helper/constants/routes';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/a11y/a11y.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';

import './Slideshow.scss';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
import BtnRandom from '../Buttons/BtnRandom';
import { useDispatch } from 'react-redux';
import { detectCursor, leaveCursor, enterCursor } from '../../store/actions/cursor';

type Props = {
	items: Array<any>;
	isLoading: boolean;
	onClickFunc: React.MouseEventHandler<HTMLButtonElement>;
};

// install Swiper modules
SwiperCore.use([EffectCoverflow, A11y]);

const Slideshow = ({ items, isLoading, onClickFunc }: Props) => {
	const dispatch = useDispatch();

	const detectCursorFunc = (e: React.MouseEvent<HTMLElement>) => {
		let mousePos = { x: 0, y: 0, className: '' };
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
		mousePos.className = 'slider';
		dispatch(detectCursor(mousePos));
	};

	const detectCursorFuncEye = (e: React.MouseEvent<HTMLElement>) => {
		let mousePos = { x: 0, y: 0, className: '' };
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
		mousePos.className = 'eye';
		dispatch(detectCursor(mousePos));
	};

	if (isLoading && !items)
		return (
			<section className='section section--swiper section--loading-spinner'>
				<LoadingSpinner />
			</section>
		);
	return (
		<section className='section section--swiper'>
			{items?.length > 0 ? (
				<>
					<BtnRandom text='Zufallsrezepte' onClickFunc={onClickFunc} />
					<Swiper
						init={false}
						loop={true}
						speed={800}
						slidesPerView={'auto'}
						centeredSlides={true}
						effect={'coverflow'}
						coverflowEffect={{
							rotate: 0,
							stretch: 20,
							depth: 100,
							modifier: 5,
							slideShadows: false,
						}}
						slideToClickedSlide={true}
						a11y={{
							enabled: true,
						}}
						className='swiper__container'
					>
						{items.map((el, index) => (
							<SwiperSlide key={index + 'slide'} className='swiper-slide'>
								{
									<div className='swiper__slide'>
											<figure
												className='swiper__image-wrapper'
												onMouseMove={(event) => detectCursorFunc(event)}
												onMouseEnter={() => dispatch(enterCursor(true))}
												onMouseLeave={() => dispatch(leaveCursor(true))}
											>
												<img
													alt={el.attributes.image?.alternativeText ?? ''}
													className='swiper__image'
													src={
														el.attributes.imageUrl
															? el.attributes.imageUrl
															: el.attributes.image.data
															? `${EndpointAssets}${el.attributes.image.data.attributes?.url}`
															: 'http://placekitten.com/200/300'
													}
												/>
												<Link to={`/receipt/${el.id}`} className="swiper__image-link"></Link>
											</figure>
										<div className='swiper__content'>
											<h2
												className='title-h1 swiper__title'
												onMouseMove={(event) => detectCursorFuncEye(event)}
												onMouseEnter={() => dispatch(enterCursor(true))}
												onMouseLeave={() => dispatch(leaveCursor(true))}
											>
												<Link to={`/receipt/${el.id}`} className='swiper__anchor'>
													{el.attributes.title}
												</Link>
											</h2>
											<Tag tagItems={el.attributes.categories.data} />
										</div>
									</div>
								}
							</SwiperSlide>
						))}
					</Swiper>
				</>
			) : (
				<p>no content</p>
			)}
		</section>
	);
};

export default Slideshow;
