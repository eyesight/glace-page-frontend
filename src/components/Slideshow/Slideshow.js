import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {
    EffectCoverflow
} from 'swiper';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/a11y/a11y.scss';
import "swiper/modules/effect-coverflow/effect-coverflow.scss";

import './Slideshow.scss';

// install Swiper modules
SwiperCore.use([EffectCoverflow]);


const Slideshow = () => {
    // Create array with 1000 slides
    const slides = Array.from({ length: 10 }).map(
        (el, index) => (
            <div key={index} className="swiper__slide">
                <figure className='swiper__image-wrapper'>
                    <img className='swiper__image' src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" />
                </figure>
                <div className='swiper__content'>
                    <a className='swiper__anchor'>
                        <h2 className='title-h1 swiper__title'>ich bin ein Titel</h2>
                        <ul class="tags">
                            <li class="tags__item">winter</li>
                            <li class="tags__item">herbst</li>
                            <li class="tags__item">schnell</li>
                            <li class="tags__item">rahmglace</li>
                            <li class="tags__item">schokoladig</li>
                        </ul>
                    </a>
                </div>
            </div>
        )
    );

    return (
        <section className='section section--swiper'>
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
                grabCursor={true}
                parallax={true}
                className="swiper__container">
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={index + 'slide'} virtualIndex={index} className='swiper-slide'>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slideshow;