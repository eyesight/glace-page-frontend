import React, { useRef, useState, useLayoutEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Content from '../Content/Content';
import Cursor from '../Cursor/Cursor';

const DefaultPageSkeleton = props => {
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const cursorRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);

    useLayoutEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight)
    }, [])

    useLayoutEffect(() => {
        const updatePosition = (e) => {
            let scrollPosition = contentRef.current.getBoundingClientRect().top;
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
            <Cursor
                aniClass={''}
                ref={cursorRef}
            />
        </>
    );
};

export default DefaultPageSkeleton;

