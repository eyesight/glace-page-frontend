import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Content from '../Content/Content';

const DefaultPageSkeleton = props => {
    return (
        <>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </>
    );
};

export default DefaultPageSkeleton;