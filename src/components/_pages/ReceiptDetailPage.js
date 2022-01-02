import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import { fetchReceipts, receiptMinusPortion, receiptPlusPortion } from '../../store/actions/receipt';

const ReceiptDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const oneReceipt = useSelector(state => state.receipt.items);
    const isLoading = useSelector(state => state.receipt.isFetching);
    const theportion = useSelector(state => state.receipt.portions);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchReceipts(`${RouteReceipt}/${id}`));
        };
        loadDetails();
    }, [dispatch, id]);

    const renderSteps = (oneReceipt && oneReceipt.steps && oneReceipt.steps.length > 0) ?
        oneReceipt.steps.map((item, index) =>
            <SectionContainer key={index}>
                <>
                    <TitleH2
                        title={item.titleOfStep}
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
            />
            <SectionContainer>
                <>
                    <TitleH2
                        title='Zutaten'
                    />
                    <PortionCalculation
                        number={Number(theportion)}
                        minuOperation={() => dispatch(receiptMinusPortion(Number(theportion)))}
                        plusOperation={() => dispatch(receiptPlusPortion(Number(theportion)))}
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