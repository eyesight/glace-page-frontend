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
            <div key={index} className="swiper-slide" style={{ backgroundImage: 'url(' + 'https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85' + ')' }}>
                <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85" className="entity-img" />
                <div className="content">
                    <p className="title" data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">Alexis Berry</p>
                    <span className="caption" data-swiper-parallax="-20%">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>)
    );

    return (
        <Swiper
            init={false}
            loop={true}
            speed={800}
            slidesPerView={'auto'}
            centeredSlides={true}
            effect={'coverflow'}
            coverflowEffect={{
                'rotate': 0,
                'stretch': -80,
                'depth': 100,
                'modifier': 3,
                'slideShadows': true,
            }}
            grabCursor={true}
            parallax={true}
            className="swiper-container loading swiper-container-3d">
            {slides.map((slideContent, index) => (
                <SwiperSlide key={index + 'slide'} virtualIndex={index} className='swiper-slide'>
                    {slideContent}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slideshow;