import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Dispatch } from "redux"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Content from '../Content/Content';
import { RouteCategories, RouteReceipt } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategoryAsFilter } from '../../store/actions/categories';

const DefaultPageSkeleton = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [selectedNavItem, setselectedNavItem] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const dispatch: Dispatch<any> = useDispatch();
    const all: ICategories = useSelector((state: CategoryState) => state.categories);
    const categories = all.items;
    const isLoading = all.isFetching;

    useEffect(() => {
        window.history.scrollRestoration = 'auto'
    }, []);

    useEffect(() => {
        const loadDetails: () => Promise<void> = async () => {
            await dispatch(fetchCategories(RouteCategories, {
                isFetching: false,
                items: [],
                selectedItem: ''
            }));
        };
        loadDetails();
    }, [dispatch]);

    useLayoutEffect(() => {
        if(headerRef && headerRef.current){
            setScrollPosition(headerRef.current?.offsetHeight);
            setHeaderHeight(headerRef.current?.offsetHeight);
        }
        return () => {
            if(headerRef && headerRef.current){
                setHeaderHeight(headerRef.current?.offsetHeight)
            }
        };
    }, []);

    useLayoutEffect(() => {
        const updatePosition = () => {
            if(contentRef && contentRef.current){
                let scrollPosition = contentRef?.current.getBoundingClientRect().top < headerHeight ? contentRef?.current.getBoundingClientRect().top : 0;
                setScrollPosition(scrollPosition);
            }
        }
        updatePosition();
        document.addEventListener('wheel', updatePosition);
        return () => window.removeEventListener('wheel', updatePosition);
    }, [scrollPosition]);

    let positionTop = scrollPosition > 0 ? scrollPosition - headerHeight : -headerHeight;
    let isAnimated = (scrollPosition > 0);

    const clickNav = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        const selectedItem = e.currentTarget.dataset.category;
        if(selectedItem){
            setselectedNavItem(Number(selectedItem));
            setIsNavOpen(!isNavOpen)
            dispatch(setCategoryAsFilter(Number(selectedItem), RouteReceipt));
        }
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
                selectedElement={selectedNavItem}
                isNavOpen={isNavOpen}
                burgerClick={() => { setIsNavOpen(!isNavOpen) }}
            />
            <Content ref={contentRef} >
                <Outlet />
            </Content>
            <Footer />
        </>
    );
};

export default DefaultPageSkeleton;

