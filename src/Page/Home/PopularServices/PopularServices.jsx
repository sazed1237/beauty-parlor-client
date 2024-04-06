import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from 'react-query';

const PopularServices = () => {

    // const [services, setServices] = useState([])
    // const axiosPublic = useAxiosPublic()

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             const popularItem = data.filter(item => item.category === 'popular')

    //             setServices(popularItem)
    //         })
    // }, [])

    // const { data: services = [] } = useQuery({
    //     queryKey: ['popularServices'], 
    //     queryFn: async () => { 
    //         const res = await axiosPublic('/services')
    //         const popularData = res.data
    //         const services = popularData.filter(data => data.category === 'popular')

    //         return services;
    //     }
    // })

    // console.log(services)

    return (
        <section className='w-10/12 mx-auto md:my-20'>
            <div className='grid   md:grid-cols-3 gap-7 '>
                <div className="card  shadow-sm">
                    <div className="card-body items-center text-center">
                        {/* <img className='w-2/6' src={service.icon} alt="" /> */}
                        <h2 className="card-title text-2xl font-serif pb-5">Treatments</h2>
                        {/* <p className='text-[#F63E7B] font-bold'>All types of classic beauty treatments for women and men.</p> */}
                        <p className='text-gray-500'>All types of classic beauty treatments for women and men.</p>

                        <div className='flex justify-center mt-4'>
                            <button className='btn btn-sm btn-ghost border-x-0 border-t-0 border-b-2 border-black px-5 text-[#F63E7B] hover:text-black ' >Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className="card-body items-center text-center">
                        {/* <img className='w-2/6' src={service.icon} alt="" /> */}
                        <h2 className="card-title text-2xl font-serif pb-5">Thermal Bath</h2>
                        {/* <p className='text-[#F63E7B] font-bold'>All types of classic beauty treatments for women and men.</p> */}
                        <p className='text-gray-500'>The power of thermal springs protects your health and youth.</p>

                        <div className='flex justify-center mt-4'>
                            <button className='btn btn-sm btn-ghost border-x-0 border-t-0 border-b-2 border-black px-5 text-[#F63E7B] hover:text-black ' >Explore More</button>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-sm">
                    <div className="card-body items-center text-center">
                        {/* <img className='w-2/6' src={service.icon} alt="" /> */}
                        <h2 className="card-title text-2xl font-serif pb-5">Oil Massages</h2>
                        {/* <p className='text-[#F63E7B] font-bold'>All types of classic beauty treatments for women and men.</p> */}
                        <p className='text-gray-500'>Our massage therapists will decrease muscle stiffness in your body.</p>

                        <div className='flex justify-center mt-4'>
                            <button className='btn btn-sm btn-ghost border-x-0 border-t-0 border-b-2 border-black px-5 text-[#F63E7B] hover:text-black ' >Explore More</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PopularServices;