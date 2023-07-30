import { Link } from 'react-router-dom';
import { EndpointAssets, FilterCollections, RouteLikes } from '../../helper/constants/routes';
import { useDispatch } from 'react-redux';
import { enterCursor, leaveCursor, detectCursor } from '../../store/actions/cursor';
import { useState } from 'react';
import { addLike, removeLike } from '../../store/actions/likes';
import { getCountedLikes, hasUserLikedReceipt } from '../../helper/constants/getLikeCount';
import Confetti from './Confetti';
import { motion } from 'framer-motion';

const TilesItem = ({
	title,
	image,
	id,
	isLikesVisible = false,
	nr,
	collection,
	imageUrl,
	likes,
}: any) => {
	const dispatch = useDispatch();

	const user = localStorage.getItem('user');
	const liker = user ? JSON.parse(user) : null;
	const countedLikes = likes ? getCountedLikes(likes, id.toString()) : 0;
	const userLikedReceipt = likes ? hasUserLikedReceipt(likes, liker, id.toString()) : false;
	const [countLikes, setCountLikes] = useState(countedLikes);
	const [liked, setLiked] = useState(userLikedReceipt);
	const [isConfettiVisible, setisConfettiVisible] = useState(false);

	const receipt = {
		id: id,
	};

	const targetCollection = {
		id: collection?.collectionItem.id,
	};

	//to do: not fetch the likes, when it is not on collection-page
	const routeCollectionLikes = targetCollection.id
		? `${RouteLikes}${FilterCollections}${targetCollection.id}`
		: RouteLikes;

	const detectCursorFunc = (e: React.MouseEvent<HTMLElement>) => {
		let mousePos = { x: 0, y: 0, className: '' };
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
		mousePos.className = 'eye';
		dispatch(detectCursor(mousePos));
	};

	const handleClick = async () => {
		try {
			if (!liked) {
				await dispatch(addLike(routeCollectionLikes, targetCollection, receipt));
				setCountLikes(countLikes + 1);
				setisConfettiVisible(true);
			} else {
				await dispatch(removeLike(routeCollectionLikes, receipt));
				setCountLikes(countLikes - 1);
				setisConfettiVisible(false);
			}
			setLiked(!liked); // toggle liked
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div
			role='listitem'
			className='tiles__item'
			onMouseMove={(event): void => detectCursorFunc(event)}
			onMouseEnter={() => dispatch(enterCursor(true))}
			onMouseLeave={() => dispatch(leaveCursor(true))}
		>
			<Link className='tiles__anchor' to={`/receipt/${id}`} tabIndex={-1}>
				<motion.figure className='tiles__image-wrapper'>
					{imageUrl || image?.data ? (
						<img
							className='tiles__img'
							alt=''
							src={image?.data ? `${EndpointAssets}${image.data.attributes.url}` : imageUrl}
						/>
					) : (
						<svg className='tiles__svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 796'>
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
				</motion.figure>
			</Link>
			<div className='tiles__item-inner'>
				<h3 className='tiles__title'>
					<Link className='tiles__anchor' to={`/receipt/${id}`}>
						{title}
					</Link>
				</h3>
				{isLikesVisible && (
					<div className='tiles__button-wrap'>
						<button
							className='tiles__button'
							type='button'
							onClick={handleClick}
							data-itemid={id}
							data-itemnr={nr}
						>
							<svg
								className='tiles__icon-smile'
								data-name='Ebene 1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 28 28'
							>
								{countLikes >= 1 && (
									<g className='happy'>
										<path
											className='cls-2'
											d='m7.8572,16.12885c1.00966,1.78448,3.21887,5.06829,6.28169,5.06829,2.89687.03679,5.03682-3.19601,5.88691-5.09178-4.12524,2.46699-7.96283,2.4427-12.1686.02349Z'
										/>
									</g>
								)}
								{countLikes === 0 && (
									<g className='smile'>
										<path
											className='cls-3'
											d='m7.57397,17.82196c1.83105,1.44336,4.08691,2.24023,6.41797,2.27148,2.19531.04297,4.32129-.77148,5.92578-2.27148'
										/>
									</g>
								)}
								<g className='rest'>
									<g>
										<line
											className='cls-3'
											x1='10.03997'
											y1='11.52501'
											x2='10.03997'
											y2='13.21801'
										/>
										<path className='cls-4' d='m17.60197,11.52501v1.693' />
									</g>
									<g>
										<circle className='cls-1' cx='14' cy='14' r='14' />
										<circle className='cls-3' cx='14' cy='14' r='13' />
									</g>
								</g>
							</svg>
							Das nehme ich {countLikes > 0 && `(${countLikes} Stimme${countLikes > 1 ? 'n' : ''})`}
						</button>
						{isConfettiVisible && <Confetti />}
					</div>
				)}
			</div>
		</div>
	);
};

export default TilesItem;
