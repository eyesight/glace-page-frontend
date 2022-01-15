import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Content from '../Content/Content';

const DefaultPageSkeleton = props => {
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        window.history.scrollRestoration = 'auto'
    }, []);

    useLayoutEffect(() => {
        let theContentRef = headerRef.current;
        setHeaderHeight(theContentRef.offsetHeight);
        return () => setHeaderHeight(theContentRef.offsetHeight);
    }, []);

    useLayoutEffect(() => {
        const updatePosition = (e) => {
            let scrollPosition = contentRef?.current ? contentRef.current.getBoundingClientRect().top : 0;
            setScrollPosition(scrollPosition);
        }
        updatePosition();
        document.addEventListener('wheel', updatePosition);
        return () => window.removeEventListener('wheel', updatePosition);
    }, [scrollPosition]);

    let positionTop = scrollPosition > 0 ? scrollPosition - headerHeight : -headerHeight;
    let isAnimated = (scrollPosition > 0);
    return (
        <>
            <Header
                aniClass={isAnimated ? '' : 'header--animates'}
                styleTranslate={positionTop}
                ref={headerRef}
            />
            <Content
                ref={contentRef}
            >
                <Outlet />
            </Content>
            <Footer />
        </>
    );
};

export default DefaultPageSkeleton;

