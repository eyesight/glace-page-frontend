// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TitleH1 from '../TitleH1/TitleH1';
import Tile from '../Tile/Tile';
import { RouteCollection, RouteLikes } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, updateInputCollections, checkInputCollections } from '../../store/actions/collection';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import { fetchLikes } from '../../store/actions/likes';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const CollectionsPage = () => {
	const { id } = useParams();

	const dispatch: Dispatch<any> = useDispatch();
	const all: ICollections = useSelector((state: CollectionState) => state.collections);
	let allLikes: ILike = useSelector((state: LikeState) => state.likes);
	const theRoute = `${RouteLikes}?[collections.id][0]=${id}`;
	const isLoading = all.isFetching;
	const cursorRef = useRef(null);
	const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);
	let receipts = all?.item?.receipts;
	let title = all?.item?.Title;
	let tiletitle = all?.item?.description;
	let isAllowed = all?.isAccessed;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(updateInputCollections(data));
	};

	useEffect(() => {
		const loadDetails = async () => {
			await dispatch(fetchCollections(`${RouteCollection}/${id}`));
			await dispatch(checkInputCollections());
		};
		loadDetails();
	}, [dispatch, id]);

	useEffect(() => {
		const loadLikeDetails = async () => {
			await dispatch(fetchLikes(`${theRoute}`));
		};
		loadLikeDetails();
	}, [dispatch, theRoute]);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			{isAllowed ? (
				<>
					<TitleH1 text={title} />
					<Tile items={receipts} isLoading={isLoading} title={tiletitle} isVisible={true} likes={allLikes?.item} collection={all?.item} />
					<Cursor aniClass={cursorIsOnElement.isOnElement ? 'is-visible' : ''} ref={cursorRef} />
				</>
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* register your input into the hook by invoking the "register" function */}
						<input {...register('name', { required: true, maxLength: 20 })} />
						{/* register your input into the hook by invoking the "register" function */}
						<input {...register('pw', { required: true, maxLength: 20 })} />

						{/* errors will return when field validation fails  */}
						{errors.name && <span>This field is required</span>}

						<input type='submit' />
					</form>
				</>
			)}
		</>
	);
};

export default CollectionsPage;
