import React from 'react'
import './index.scss'

import Swiper, {Navigation, FreeMode} from 'swiper';
import 'swiper/css';

import { ChevronLeft, ChevronRight } from '../../assets/svg/_Icons';

export default function Slider() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	const swiper = new Swiper('.swiper', {
        modules: [Navigation, FreeMode],
		slidesPerView: 3,
		spaceBetween: 32,
		navigation: {
			nextEl: '.slider__button-prev',
			prevEl: '.slider__button-next',
		},
		loop: true,
		freeMode: true,
        // breakpoints: {
        //     640: {
        //       slidesPerView: 2,
        //       spaceBetween: 20,
        //     },
        //     768: {
        //       slidesPerView: 4,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerView: 5,
        //       spaceBetween: 50,
        //     },
        // },
	});


    return (
        <div className="swiper slider-wrapper">
            <div className="swiper-wrapper">
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
                <div className="swiper-slide slider-slide">
                    <div className="slider-slide__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea, quam
                        aperiam illum quisquam dolorem officia. Quia illum a cupiditate sint magni
                        sunt mollitia rerum.
                    </div>
                    <div className="slider-slide__author">Name and Surname</div>
                </div>
            </div>
            <div className="slider__button-next"><ChevronLeft/></div>
            <div className="slider__button-prev"><ChevronRight/></div>
        </div>
    );
}
