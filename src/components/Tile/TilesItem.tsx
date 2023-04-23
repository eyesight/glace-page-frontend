import { Link } from 'react-router-dom';
import { EndpointAssets, FilterCollections, RouteLikes } from '../../helper/constants/routes';
import { useDispatch } from 'react-redux';
import { enterCursor, leaveCursor, detectCursor } from '../../store/actions/cursor';
import { useState } from 'react';
import { addLike, removeLike } from '../../store/actions/likes';
import { getCountedLikes, hasUserLikedReceipt } from '../../helper/constants/getLikeCount';

const TilesItem = ({ title, image, id, isLikesVisible = false, nr, collection, imageUrl, likes }: any) => {
	const dispatch = useDispatch();
	
	const user = localStorage.getItem("user");
	const liker = user ? JSON.parse(user) : null;
	const [countLikes, setCountLikes] = useState(getCountedLikes(likes.data, id.toString()));
	const [liked, setLiked] = useState(hasUserLikedReceipt(likes.data, liker, id.toString()));

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
			} else {
				await dispatch(removeLike(routeCollectionLikes, receipt));
				setCountLikes(countLikes - 1); 
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
				{isLikesVisible ? (
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
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 28 28'
							>
								<g className='Smile' transform='translate(-546.252 -647.893)'>
									<g
										className='Head'
										transform='translate(546.252 647.893)'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
									>
										<circle cx='14' cy='14' r='14' stroke='none' />
										<circle cx='14' cy='14' r='13' fill='none' />
									</g>
									<g className='Details' transform='translate(553.826 657.963)'>
										<g className='Eyes' transform='translate(2.466 1.455)'>
											<line
												className='right'
												y2='1.693'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeWidth='2'
											/>
											<path
												className='left'
												d='M0,0V1.693'
												transform='translate(7.562)'
												fill='currentColor'
												stroke='currentColor'
												strokeLinecap='round'
												strokeWidth='2'
											/>
										</g>
										<path
											className='mouth'
											d='M-14707.748-22613.916a10.594,10.594,0,0,0,6.418,2.271,8.435,8.435,0,0,0,5.926-2.271'
											transform='translate(14707.748 22621.668)'
											fill='none'
											stroke='currentColor'
											strokeLinecap='round'
											strokeWidth='2'
										/>
										<path
											className='zunge'
											d='M14.855,19.26s-.364,1.287,1.861,1.265,2.048-1.785,2.048-1.785'
											transform='translate(-7.574 -10.07)'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											opacity='0'
										/>
									</g>
								</g>
							</svg>
							Das nehme ich {countLikes}
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default TilesItem;
