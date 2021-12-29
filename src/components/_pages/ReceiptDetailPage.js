import React from 'react';
import PropTypes from 'prop-types';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import FullscreenImage from '../FullscreenImage/FullscreenImage';
import SectionContainer from '../SectionContainer/SectionContainer';
import TitleH2 from '../TitleH2/TitleH2';
import PortionCalculation from '../PortionCalculation/PortionCalculation';
import TilesRound from '../TilesRound/TilesRound';
import Paragraph from '../Paragraph/Paragraph';
import InfoBox from '../InfoBox/InfoBox';

const ReceiptDetailPage = props => {
    return (
        <>
            <TitleWrapper />
            <FullscreenImage />
            <SectionContainer>
                <>
                    <TitleH2 />
                    <PortionCalculation />
                    <TilesRound />
                </>
            </SectionContainer>
            <SectionContainer>
                <>
                    <TitleH2 />
                    <Paragraph />
                    <InfoBox />
                </>
            </SectionContainer>
        </>
    );
};

ReceiptDetailPage.propTypes = {

};

export default ReceiptDetailPage;