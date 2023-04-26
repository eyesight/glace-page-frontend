import { Link } from 'react-router-dom';
import { EndpointAssets, FilterCollections, RouteLikes } from '../../helper/constants/routes';
import { useDispatch } from 'react-redux';
import { enterCursor, leaveCursor, detectCursor } from '../../store/actions/cursor';
import { useState } from 'react';
import { addLike, removeLike } from '../../store/actions/likes';
import { getCountedLikes, hasUserLikedReceipt } from '../../helper/constants/getLikeCount';
import Confetti from './Confetti';

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
	const countedLikes = likes?.data ? getCountedLikes(likes.data, id.toString()) : 0;
	const userLikedReceipt = likes?.data ? hasUserLikedReceipt(likes.data, liker, id.toString()) : false;
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
				<figure className='tiles__image-wrapper'>
					<img
						className='tiles__img'
						alt=''
						src={
							imageUrl
								? imageUrl
								: image?.data
								? `${EndpointAssets}${image.data.attributes.url}`
								: 'http://placekitten.com/200/300'
						}
					/>
				</figure>
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
								{countLikes >= 1 && (<g className='happy'>
									<path
										className='cls-2'
										d='m7.8572,16.12885c1.00966,1.78448,3.21887,5.06829,6.28169,5.06829,2.89687.03679,5.03682-3.19601,5.88691-5.09178-4.12524,2.46699-7.96283,2.4427-12.1686.02349Z'
									/>
								</g>)}
								{countLikes === 0 && (<g className='smile'>
									<path
										className='cls-3'
										d='m7.57397,17.82196c1.83105,1.44336,4.08691,2.24023,6.41797,2.27148,2.19531.04297,4.32129-.77148,5.92578-2.27148'
									/>
								</g>)}
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
