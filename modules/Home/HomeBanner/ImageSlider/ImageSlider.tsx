'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './ImageSlider.css'

interface ImageSliderProps {
    images?: string[];
}

const imageUrls: string[] = [
    '/wall-papers/wall-paper-1.png',
    '/wall-papers/wall-paper-2.png',
];

export const ImageSlider = ({images = imageUrls}: ImageSliderProps) => {
    return (
        <Swiper autoplay={{delay: 3000}} spaceBetween={50} modules={[Pagination, Navigation]} pagination={true}>
            {images.map((imageUrl, index) => (
                <SwiperSlide key={`image-slider-${imageUrl}-${index}`}>
                    <div className="image-slider-item" style={{backgroundImage: `url(${imageUrl})`}}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
