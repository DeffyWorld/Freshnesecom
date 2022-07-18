import React, { useEffect } from 'react'
import './index.scss'

import Swiper, {Navigation, FreeMode} from 'swiper';
import 'swiper/css';

import { ChevronLeft, ChevronRight } from '../../assets/svg/_Icons';

export default function Slider() {
	useEffect(() => {
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
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }, [])


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
