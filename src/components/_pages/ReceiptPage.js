import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import TitleWrapper from '../TitleWrapper/TitleWrapper';
import FullscreenImage from '../FullscreenImage/FullscreenImage';
import SectionContainer from '../SectionContainer/SectionContainer';
import TitleH2 from '../TitleH2/TitleH2';
import PortionCalculation from '../PortionCalculation/PortionCalculation';
import TilesRound from '../TilesRound/TilesRound';
import Paragraph from '../Paragraph/Paragraph';
import InfoBox from '../InfoBox/InfoBox';

const ReceiptPage = props => {
    return (
        <>
            <Header />
            <Content>
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
            </Content>
            <Footer />
        </>
    );
};

ReceiptPage.propTypes = {

};

export default ReceiptPage;