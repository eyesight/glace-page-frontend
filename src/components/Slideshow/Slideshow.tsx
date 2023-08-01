import React from 'react';
import SwiperCore, { A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { EndpointAssets } from '../../helper/constants/routes';

import 'swiper/css'; // core Swiper
import 'swiper/css/a11y';
import 'swiper/css/effect-coverflow';

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
											className={el.attributes.imageUrl || el.attributes.image.data ? 'swiper__image-wrapper' : 'swiper__image-wrapper swiper__image-wrapper--boarder'}
											onMouseMove={(event) => detectCursorFunc(event)}
											onMouseEnter={() => dispatch(enterCursor(true))}
											onMouseLeave={() => dispatch(leaveCursor(true))}
										>
											{el.attributes.imageUrl || el.attributes.image.data ? (
												<img
													alt={el.attributes.image?.alternativeText ?? ''}
													className='swiper__image'
													src={
														el.attributes.imageUrl
															? el.attributes.imageUrl
															: `${EndpointAssets}${el.attributes.image.data.attributes?.url}`
													}
												/>
											) : (
												<svg
													className='swiper__svg'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 1024 796'
												>
													<g className='bg' data-name='Ebene 2'>
														<rect className='cls-1' width='1024' height='796' />
													</g>
													<g className='ice' data-name='Ebene 1'>
														<path
															className='ice__path'
															data-name='Pfad 100'
															d='m487.80092,126.12043c-.68787.0642-1.36866.18922-2.03446.37337-57.65208,14.24199-97.95477,66.243-97.36373,125.62518.56525,18.70296,6.04501,36.92781,15.88822,52.84066-19.80308,3.8798-34.1123,21.20165-34.18455,41.38118.02883,19.20895,13.6637,35.70381,32.52378,39.34709l86.27795,270.08594c1.81932,5.18743,5.69347,9.39667,10.71206,11.63941,7.89291,3.44899,16.8667,3.44899,24.75961,0,5.01859-2.24273,8.89274-6.45198,10.71206-11.63941l86.27798-270.08594c18.86008-3.64328,32.49493-20.13814,32.52375-39.34709-.07228-20.17953-14.38148-37.50138-34.18458-41.38118,9.84321-15.91285,15.32297-34.1377,15.88819-52.84066,1.02676-59.63053-39.5485-111.95422-97.55748-125.8051-6.39401-1.49262-12.78707,2.48179-14.27926,8.87548-1.4922,6.39369,2.48147,12.78738,8.87548,14.27916.19935.04646.39987.08785.60134.12417,46.96283,11.59633,79.63974,54.1618,78.70754,102.52629-.74774,20.53009-8.06318,40.27882-20.87057,56.34203-3.77611,5.32427-2.52091,12.70207,2.80363,16.47797,1.98821,1.40984,4.36377,2.17093,6.80127,2.17853h11.81928c9.42935,1.92258,16.5739,9.65769,17.74278,19.20979.31402,8.66177-6.45346,15.93904-15.11554,16.25243-.25743.00929-.51507.01267-.77266.00929h-125.94316c-6.52763,0-11.81928,5.29133-11.81928,11.81933h0v47.29085c0,6.53138-5.29476,11.82609-11.8262,11.82609s-11.8262-5.29471-11.8262-11.82609h0v-47.29085c.00003-6.528-5.29162-11.81933-11.81923-11.81933h-31.41664c-8.66707.11235-15.78448-6.82196-15.8972-15.4888-.00335-.25764-.00037-.51528.00898-.77292,1.16888-9.5521,8.31342-17.28721,17.74275-19.20979h11.81928c6.52758-.02027,11.8031-5.32765,11.78322-11.85481-.00742-2.43786-.76827-4.81322-2.17832-6.80169-12.81238-16.06152-20.13273-35.81025-20.88443-56.34203-.35724-48.2741,32.15548-90.60897,78.88744-102.71973,6.3305-1.5923,10.17181-8.01471,8.57978-14.34505-1.3448-5.34793-6.2087-9.05456-11.72145-8.93377h-.04144Zm-11.63935,53.02059c-1.89254.11657-3.72934.68676-5.35606,1.66072-25.44563,13.87707-41.34655,40.47902-41.51971,69.46223,0,6.53138,5.29476,11.82609,11.8262,11.82609s11.8262-5.29471,11.8262-11.82609h0c.08223-20.41943,11.35954-39.14689,29.3683-48.77164,5.83137-2.93372,8.18059-10.03866,5.24714-15.86977-2.13603-4.24641-6.60799-6.8-11.35057-6.48154h-.0415Zm-48.43967,207.08667h1.48087v4.80224l-1.48087-4.80224Zm107.95124,0h22.57289l-16.81549,34.72394-14.96095-21.42381,9.20355-13.30013Zm48.59193,0h12.01304l-24.75961,77.7802-14.78103-21.06396,27.5276-56.71624Zm-72.24432,33.81079l17.54902,25.11946-17.54902,36.20558-17.54902-36.20558,17.54902-25.11946Zm-62.81932,33.43743c2.69363,1.34817,5.54968,2.34326,8.49771,2.96159l-5.17613,7.39046-3.32157-10.35205Zm29.74196,13.8399l19.95716,41.00781-19.37589,39.90038-17.92265-55.96866,17.34138-24.93953Zm65.96097,0l17.54902,24.91166-17.90887,56.02357-19.37589-40.13606,19.73574-40.79917Zm-32.88361,67.98144l22.14383,45.67152-20.8844,65.21329c-.8452.24581-1.74287.24581-2.58807,0l-20.87057-65.21329,22.19921-45.67152Z'
														/>
													</g>
												</svg>
											)}
											<Link to={`/receipt/${el.id}`} className='swiper__image-link'></Link>
										</figure>
										<div className='swiper__content'>
											<h2
												className='title-h2 swiper__title'
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
