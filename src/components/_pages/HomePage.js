import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Content from '../Content/Content';
import TitleH1 from '../TitleH1/TitleH1';
import Searchbar from '../Searchbar/Searchbar';
import Tile from '../Tile/Tile';
import Footer from '../Footer/Footer';

const HomePage = ({ getReceipts, receipts, isFetching }) => {
    const [allReceipts, setAllReceipts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReceipts();
        setIsLoading(isFetching);
    }, []);

    useEffect(() => {
        setAllReceipts(receipts);
        setIsLoading(isFetching);
    }, [receipts]);

    console.log(allReceipts);
    console.log(isLoading);

    return (
        <>
            <Header />
            <Content>
                <>
                    <TitleH1
                        text='Guten Morgen. Hier findest du Inspiration für die Küche.'
                    />
                    <Searchbar />
                    <Tile
                        items={allReceipts}
                        isLoading={isLoading}
                    />
                </>
            </Content>
            <Footer />
        </>
    );
};

HomePage.propTypes = {

};

export default HomePage;