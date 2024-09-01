'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './ImageSlider.css'
import 'swiper/css/autoplay'

interface ImageSliderProps {
    images: ImageUrlType[];
}

export type ImageUrlType = {
    imageUrl: string
    content?: string
}

export const ImageSlider = ({images}: ImageSliderProps) => {
    return (
        <Swiper autoplay={{
            delay: 1000,
        }} spaceBetween={50} modules={[Pagination, Navigation]} pagination={true} navigation={true}>
            {images.map(({imageUrl, content}, index) => (
                <SwiperSlide key={`image-slider-${imageUrl}-${index}`}>
                    <div className="image-slider-item flex items-center justify-center"
                         style={{backgroundImage: `url(${imageUrl})`}}>
                        {content && (
                            <article className="text-white text-md lg:text-xl lg:w-1/2 w-4/5 text-center">
                                {content}
                            </article>
                        )}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
