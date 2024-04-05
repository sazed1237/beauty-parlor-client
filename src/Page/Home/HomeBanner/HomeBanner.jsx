import React from 'react';
import homeBg from '../../../assets/image/bg.png';

const HomeBanner = () => {
    return (
        <section className=' bg-[#fbedf1] min-h-screen bg-fixed'>
            <div className=' grid md:grid-cols-2 min-h-screen items-center justify-center w-10/12 mx-auto '>

                <div className='ml-5 mt-4'>
                    <h1 className=' text-2xl  md:text-5xl font-bold w-3/4  '>Beauty Salon For Every Women</h1>
                    <p className='md:my-10 my-6 w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque quae corporis deserunt accusantium? Laboriosam aliquid fugit sint hic excepturi asperiores, veritatis mollitia ad nihil pariatur sit ipsum rem cum?</p>
                    <button className='btn btn-md  bg-[#F63E7B] hover:bg-[#ef729c] px-10 text-white' >Get an Appointment</button>
                </div>
                <div className='flex items-center justify-center '>
                    <img className='  rounded-lg' src={homeBg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;