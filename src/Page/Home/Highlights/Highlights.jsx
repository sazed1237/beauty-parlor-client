import React from 'react';
import highlights from '../../../assets/image/highlights.jpg';

const Highlights = () => {
    return (
        <section className='bg-[#fbedf1]'>
            <div className='w-10/12 mx-auto grid md:grid-cols-2 gap-10 py-24'>
                <div className='flex justify-center'>
                    <img className='rounded-xl ' src={highlights} alt="" />
                </div>

                <div className='w-5/6 '>
                    <h2 className='text-4xl text-center md:text-left font-bold'>Let us handle your screen <span className='text-[#F63E7B]'>Professionally</span>.</h2>
                    <p className='my-7 text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aspernatur vero iste dolorum saepe itaque sequi corporis dicta, pariatur officiis magni deserunt optio quisquam ad? Provident mollitia nostrum unde quos!</p>

                    <div className='flex gap-10 pt-5 '>
                        <h1 className='text-[#F63E7B] text-3xl font-bold'>300+ <br /> <span className='text-sm text-black'>Happy Customer</span></h1>
                        <h1 className='text-[#F63E7B] text-3xl font-bold'>10+ <br /> <span className='text-sm text-black'>Total Services</span></h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;