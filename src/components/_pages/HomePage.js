import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Content from '../Content/Content';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import TilesItem from '../Tile/TilesItem';
import Footer from '../Footer/Footer';

const HomePage = props => {

    const [allReceipts, setAllReceipts] = useState('');

    useEffect(() => {
        props.loadReceipts();
        setAllReceipts(props.receipt);
        console.log(props);
    }, []);
    console.log(allReceipts);
    return (
        <>
            <Header />
            <Content>
                <>
                    <TitleH1
                        text='Guten Morgen. Hier findest du Inspiration für die Küche.'
                    />
                    <Searchbar />
                    <Tile>
                        <TilesItem />
                    </Tile>
                </>
            </Content>
            <Footer />
        </>
    );
};

HomePage.propTypes = {

};

export default HomePage;