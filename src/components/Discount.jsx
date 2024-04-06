import React from 'react';
import discount from '../assets/image/Home/discount.jpg';

const Discount = ({ subHeading, heading, buttonText }) => {
    return (
        <div style={{ backgroundImage: `url('${discount}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-fixed  ' >
            <div className='flex justify-center items-center bg-[#F63E7B] w-full  bg-opacity-30 '>
                <div className='text-center py-14 '>
                    <h4 className='text-[#F63E7B] md:text-lg font-bold'>- {subHeading} -</h4>
                    <h1 className='md:text-6xl text-3xl font-serif font-semibold py-10' >{heading}</h1>
                    <button className='btn bg-[#F63E7B] hover:bg-black border-none text-white md:mt-5 md:btn-lg'>{buttonText}</button>

                </div>

            </div>

        </div>
    );
};

export default Discount;