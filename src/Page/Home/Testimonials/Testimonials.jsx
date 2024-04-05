import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import { useQuery } from 'react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const Testimonials = () => {

    const axiosPublic = useAxiosPublic()

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            // console.log('insed axios', res.data)
            return res.data;
        }
    })


    return (
        <div className='my-20  w-10/12 mx-auto'>
            <SectionTitle heading={'Testimonials'}></SectionTitle>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mb-6'>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt={review.name} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{review.name}</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                            <p className='my-2'><small>{review.testimonial}</small></p>

                            <Rating
                                style={{ maxWidth: 120 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;