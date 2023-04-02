import { Link } from 'react-router-dom';
import { EndpointAssets, RouteLikes } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { enterCursor, leaveCursor, detectCursor } from '../../store/actions/cursor';
import { useEffect, useState } from 'react';
import { addLike } from '../../store/actions/likes';
import { fetchLikes } from '../../store/actions/likes';

const TilesItem = ({ title, image, id, isVisible = false, nr, collection, imageUrl }: any) => {
	const dispatch = useDispatch();
	const [countLikes, setCountLikes] = useState(0);
	let allLikes: ILike = useSelector((state: LikeState) => state.likes);

	useEffect(() => {
		countLike(allLikes?.item, id);
	}, [allLikes, id]);

	const receipt = {
		id: id,
	};

	const targetCollection = {
		id: collection?.collectionItem.id,
	};

	const detectCursorFunc = (e: React.MouseEvent<HTMLElement>) => {
		let mousePos = { x: 0, y: 0, className: '' };
		mousePos.x = e.clientX;
		mousePos.y = e.clientY;
		mousePos.className = 'eye';
		dispatch(detectCursor(mousePos));
	};

	const countLike = (arr: LikeType[], id: string) => {
		if (arr && arr.length > 0) {
			const result = arr.filter((like) => {
				return like.attributes.receiptId === id.toString();
			});
			setCountLikes(result.length);
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
					<img className='tiles__img' alt='' src={imageUrl ? imageUrl : (image?.data ? `${EndpointAssets}${image.data.attributes.url}` : 'http://placekitten.com/200/300')} />
				</figure>
			</Link>
			<div className='tiles__item-inner'>
				<h3 className='tiles__title'>
					<Link className='tiles__anchor' to={`/receipt/${id}`}>
						{title}
					</Link>
				</h3>
				{isVisible ? (
					<div className='tiles__button-wrap'>
						<button
							className='tiles__button'
							type='button'
							onClick={() => {
								dispatch(addLike(RouteLikes, targetCollection, receipt));
								dispatch(fetchLikes(RouteLikes));
								countLike(allLikes?.item, id);
							}}
							data-itemid={id}
							data-itemnr={nr}
						>
							<svg className='tiles__icon-smile' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'>
								<g className='Smile' transform='translate(-546.252 -647.893)'>
									<g className='Head' transform='translate(546.252 647.893)' fill='none' stroke='currentColor' strokeWidth='2'>
										<circle cx='14' cy='14' r='14' stroke='none' />
										<circle cx='14' cy='14' r='13' fill='none' />
									</g>
									<g className='Details' transform='translate(553.826 657.963)'>
										<g className='Eyes' transform='translate(2.466 1.455)'>
											<line className='right' y2='1.693' fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='2' />
											<path className='left' d='M0,0V1.693' transform='translate(7.562)' fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeWidth='2' />
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
