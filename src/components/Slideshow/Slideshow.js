import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {
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

// install Swiper modules
SwiperCore.use([EffectCoverflow]);


const Slideshow = ({ items, isLoading }) => {

    if (isLoading && !items) return (<section className='section section--swiper section--loading-spinner'><LoadingSpinner /></section>)

    return (
        <section className='section section--swiper'>
            {items && items.length > 0 ? (
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
                </Swiper>) :
                <p>no content</p>
            }
        </section >
    );
};

Slideshow.propTypes = {
    items: PropTypes.array,
    isLoading: PropTypes.bool,
}

export default Slideshow;



