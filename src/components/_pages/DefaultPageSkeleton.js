import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Content from '../Content/Content';
import { RouteCategories, RouteReceipt } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategoryAsFilter } from '../../store/actions/categories';

const DefaultPageSkeleton = props => {
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const dispatch = useDispatch();
    const all = useSelector(state => state.categories);
    const categories = all.items;
    const isLoading = all.isFetching;

    useEffect(() => {
        window.history.scrollRestoration = 'auto'
    }, []);

    useEffect(() => {
        const loadDetails = async () => {
            await dispatch(fetchCategories(RouteCategories));
        };
        loadDetails();
    }, [dispatch]);

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

    const clickNav = (e) => {
        const selectedItem = e.target.dataset.category;
        dispatch(setCategoryAsFilter(selectedItem, RouteReceipt));
    }

    return (
        <>
            <Header
                aniClass={isAnimated ? '' : 'header--animates'}
                styleTranslate={positionTop}
                ref={headerRef}
                categories={categories}
                isLoading={isLoading}
                onClick={(e) => { clickNav(e) }}
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

