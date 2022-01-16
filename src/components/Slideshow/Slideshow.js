import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {
    A11y,
    EffectCoverflow
} from 'swiper';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Endpoint } from '../../helper/constants/routes';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/a11y/a11y.scss';
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

import './Slideshow.scss';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
import PropTypes from 'prop-types';
import BtnRandom from '../Buttons/BtnRandom';

// install Swiper modules
SwiperCore.use([EffectCoverflow, A11y]);


const Slideshow = ({ items, isLoading, onClickFunc }) => {

    if (isLoading && !items) return (<section className='section section--swiper section--loading-spinner'><LoadingSpinner /></section>)

    return (
        <section className='section section--swiper'>
            {items?.length > 0 ? (
                <>
                    <BtnRandom
                        text='Zufallsrezepte'
                        onClickFunc={onClickFunc}
                    />
                    <Swiper
                        init={false}
                        loop={true}
                        speed={800}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        effect={'coverflow'}
                        coverflowEffect={{
                            'rotate': 0,
                            'stretch': 20,
                            'depth': 100,
                            'modifier': 5,
                            'slideShadows': false,
                        }}
                        slideToClickedSlide={true}
                        a11y={true}
                        className="swiper__container">
                        {items.map((el, index) => (
                            <SwiperSlide key={index + 'slide'} className='swiper-slide'>
                                {<div className="swiper__slide">
                                    <figure className='swiper__image-wrapper'>
                                        <img alt={el.image ? el.image.alternativeText : ""} className='swiper__image' src={el.image ? `${Endpoint}${el.image.url}` : "http://placekitten.com/200/300"} />
                                    </figure>
                                    <div className='swiper__content'>
                                        <Link to={`/receipt/${el.id}`} className='swiper__anchor'>
                                            <h2 className='title-h1 swiper__title'>{el.title}</h2>
                                            <Tag
                                                tagItems={el.categories}
                                            />
                                        </Link>
                                    </div>
                                </div>}
                            </SwiperSlide>))}
                    </Swiper>
                </>) :
                <p>no content</p>
            }
        </section >
    );
};

Slideshow.propTypes = {
    items: PropTypes.array,
    isLoading: PropTypes.bool,
    onClickFunc: PropTypes.func,
}

export default Slideshow;



