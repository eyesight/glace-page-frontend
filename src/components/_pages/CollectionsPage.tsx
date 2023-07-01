// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TitleH1 from '../TitleH1/TitleH1';
import Tile from '../Tile/Tile';
import { FilterCollections, PopulatesCollections, RouteCollection, RouteLikes } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, updateInputCollections, checkInputCollections } from '../../store/actions/collection';
import Cursor from '../Cursor/Cursor';
import { useRef } from 'react';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import { fetchLikes } from '../../store/actions/likes';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './CollectionsPage.scss';

const CollectionsPage = () => {
	const { id } = useParams();

	const dispatch: Dispatch<any> = useDispatch();
	const all: ICollections = useSelector((state: CollectionState) => state.collections);
	const allLikes: ILike = useSelector((state: LikeState) => state.likes);
	const theRoute = `${RouteLikes}${FilterCollections}${id}`;
	const isLoading = all.isFetching;
	const cursorRef = useRef(null);
	const cursorIsOnElement: ICursor = useSelector((state: CursorState) => state.cursor);
	const user = localStorage.getItem("user");
	const liker = user ? JSON.parse(user) : null;
	let receipts = all?.collectionItem?.attributes?.receipts.data;
	let title = `Hey ${liker}. \n${all?.collectionItem?.attributes?.Title}`;
	let tiletitle = all?.collectionItem?.attributes?.description;
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
			await dispatch(fetchCollections(`${RouteCollection}/${id}${PopulatesCollections}`));
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
	//TODO: export form as component
	return (
		<>
			{isAllowed ? (
				<>
					<TitleH1 text={title} />
					<Tile items={receipts} isLoading={isLoading} title={tiletitle} isLikesVisible={true} likes={all?.collectionItem?.attributes?.likes?.data} collection={all}/>
					<Cursor aniClass={cursorIsOnElement.isOnElement ? 'is-visible' : ''} ref={cursorRef} />
				</>
			) : (
				<section className='section-container'>
					<TitleH1 text={'Bitte logge dich hier ein ...'} />
					<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
						<div className='login-form__inner-wrapper'>
							<div className='login-form__label-wrapper'>
								<label className='login-form__label'> <span className='sr-hidden'>Username</span>
									<input className='login-form__input' type="text" placeholder="Username" {...register('name', { required: true, maxLength: 20 })} />
								</label>
								{errors.name && <span className='login-form__error-txt'>This field is required</span>}
							</div>
							<div className='login-form__label-wrapper'>
								<label className='login-form__label'><span className='sr-hidden'>Passwort</span>
									<input className='login-form__input' type="password" placeholder="Passwort" {...register('pw', { required: true, maxLength: 20 })} />
								</label>
								{errors.pw && <span className='login-form__error-txt'>This field is required</span>}
							</div>
						</div>

						<div className='login-form__btn-wrapper'>
							<input className='btn' type='submit' />
						</div>
					</form>
				</section>
			)}
		</>
	);
};

export default CollectionsPage;
