// TODO: make a model for an empty ReceiptState see line 28
import { useEffect } from 'react';
import { FilterPages, PopulatesPageContent, RoutePages } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { fetchOnePage } from '../../store/actions/pages';
import Richtext from '../Richtext/Richtext';
import Image from '../Image/Image';
import SectionContainer from '../SectionContainer/SectionContainer';
import TitleH1 from '../TitleH1/TitleH1';
import Lead from '../Lead/Lead';

const InfoPage = () => {
	const { id } = useParams();

	const dispatch: Dispatch<any> = useDispatch();
	const all: IPages = useSelector((state: PagesState) => state.pages);
	const theRoute = `${RoutePages}${PopulatesPageContent}${FilterPages}${id}`;
	const isLoading = all.isFetching;
	const selectedPageComponent = all.selectedPage?.attributes?.content;
	const selectedPage = all.selectedPage?.attributes;

	console.log(all);

	useEffect(() => {
		const loadDetails = async () => {
			await dispatch(fetchOnePage(`${theRoute}`));
		};
		loadDetails();
	}, [dispatch, id, theRoute]);

	const getComponent = (item: any) => {
		switch (item.__component) {
			case 'pages.text':
				return <Richtext text={item.text} key={item.id} />;
			case 'pages.image':
				return (
					<Image
						image={item.image}
						imageUrl={item.imageUrl}
						caption={item.caption}
						key={item.id}
						isFullwidth={item.fullwidth}
					/>
				);
		}
	};

	if (isLoading) return <LoadingSpinner />;
	return (
		<>
				<TitleH1 text={selectedPage?.header?.title} positioningClass={true} />
				{selectedPage?.header?.lead ? <Lead text={selectedPage?.header?.lead} /> : null}
			<SectionContainer>
				{selectedPageComponent?.map((item) => getComponent(item))}
			</SectionContainer>
		</>
	);
};

export default InfoPage;
