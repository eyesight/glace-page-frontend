import { useEffect } from 'react';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import FullscreenImage from '../FullscreenImage/FullscreenImage';
import SectionContainer from '../SectionContainer/SectionContainer';
import TitleH2 from '../TitleH2/TitleH2';
import PortionCalculation from '../PortionCalculation/PortionCalculation';
import TilesRound from '../TilesRound/TilesRound';
import Paragraph from '../Paragraph/Paragraph';
import InfoBox from '../InfoBox/InfoBox';
import { RouteReceipt, Endpoint } from '../../helper/constants/routes';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Tag from '../Tag/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneReceipts, receiptMinusPortion, receiptPlusPortion } from '../../store/actions/receipt';

const ReceiptDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const all: IReceipt = useSelector((state: ReceiptState) => state.receipt);

    const oneReceipt = all.oneItem;
    const isLoading = all.isFetching;
    const theportion = all.portions;

    useEffect(() => {
        const loadDetails = async () => {
            dispatch(fetchOneReceipts(`${RouteReceipt}/${id}`));
        };
        loadDetails();
    }, [dispatch, id]);

    const renderSteps = (oneReceipt?.steps?.length > 0) ?
        oneReceipt.steps.map((item, index) =>
            <SectionContainer key={index}>
                <>
                    <TitleH2
                        title={item.titleOfStep}
                        theClass={''}
                    />
                    <Paragraph
                        text={item.text}
                    />
                    {item.infobox && item.infobox.length > 0 ?
                        item.infobox.map((info, index) =>
                            <InfoBox
                                key={index}
                                title={info.title}
                                text={info.text}
                            />
                        ) : null
                    }

                </>
            </SectionContainer>) : null;

    if (isLoading || !oneReceipt) return (<LoadingSpinner />);

    return (
        <>
            <TitleWrapper
                title={oneReceipt.title}
                children={
                    <Tag
                        tagItems={oneReceipt.categories}
                    />
                }
            />
            <FullscreenImage
                image={oneReceipt.image ? `${Endpoint}${oneReceipt.image.url}` : 'http://placekitten.com/2000/1500'}
                altText={oneReceipt.image ? oneReceipt.image.alternativeText : ''}
            />
            <SectionContainer>
                <>
                    <TitleH2
                        title='Zutaten'
                        theClass=''
                    />
                    <PortionCalculation
                        number={theportion}
                        minuOperation={() => dispatch(receiptMinusPortion(theportion))}
                        plusOperation={() => dispatch(receiptPlusPortion(theportion))}
                    />
                    <TilesRound
                        items={oneReceipt.ingredients}
                        portion={theportion}
                        originalPortion={oneReceipt.portions}
                    />
                </>
            </SectionContainer>
            {renderSteps}
        </>
    );
};

export default ReceiptDetailPage;