import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Dispatch } from "redux"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet, useParams } from 'react-router-dom';
import Content from '../Content/Content';
import { RouteCategories, RouteCategoriesAll } from '../../helper/constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, selectCategories, fetchOneCategory } from '../../store/actions/categories';

const DefaultPageSkeleton = () => {
    const { id } = useParams();
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
    let catId = id;

    useEffect(() => {
        window.history.scrollRestoration = 'auto'
    }, []);

    useEffect(() => {
        const loadDetails: () => Promise<void> = async () => {
           await dispatch(fetchCategories(RouteCategories, {
                isFetching: false,
                items: [],
                selectedItem: '',
                selectedCategory: {} as CategoryType
            }));
            if (catId) {
                await dispatch(selectCategories(catId));
                await dispatch(fetchOneCategory(`${RouteCategoriesAll}/${catId}`, {} as CategoryType ))
                setselectedNavItem(Number(catId));
            };
            
        };
        loadDetails();
    }, [dispatch, catId]);

    useLayoutEffect(() => {
        let currentEl = headerRef.current;
        if(headerRef && currentEl){
            setScrollPosition(currentEl?.offsetHeight);
            setHeaderHeight(currentEl?.offsetHeight);
        }
        return () => {
            if(headerRef && currentEl){
                setHeaderHeight(currentEl?.offsetHeight)
            }
        };
    }, []);

    useLayoutEffect(() => {
        let rootElement = document.querySelector(':root');
        const updatePosition = () => {
            if(contentRef && contentRef.current){
                let scrollPosition = contentRef?.current.getBoundingClientRect().top < headerHeight ? contentRef?.current.getBoundingClientRect().top : 0;
                let docHeight = contentRef?.current.getBoundingClientRect().height;
                let docTop = contentRef?.current.getBoundingClientRect().top;
                let percentage = 100 / docHeight * (docTop * -1);
                setScrollPosition(scrollPosition);
                setColor(rootElement, percentage);
            }
        }
        updatePosition();
        document.addEventListener('wheel', updatePosition);
        return () => window.removeEventListener('wheel', updatePosition);
    }, [scrollPosition]);

    let positionTop = scrollPosition > 0 ? scrollPosition - headerHeight : -headerHeight;
    let isAnimated = (scrollPosition > 0);

    const clickNav = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        const selectedItem = e.currentTarget.dataset.category;
        if(selectedItem){
            setselectedNavItem(Number(selectedItem));
            setIsNavOpen(!isNavOpen)
            dispatch(selectCategories(selectedItem));
        }
    }
    //TODO: check to not have ani!
    const setColor = (rootEl: any, color: number) => {
        let colMin = 167;
        let colMax = 222;
        let range = colMax - colMin
        let colorFinal = (range / 100 * color) + colMin;
        rootEl.style.setProperty('--color-h', colorFinal.toString());
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

