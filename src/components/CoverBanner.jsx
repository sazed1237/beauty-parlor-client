import React from 'react';

const CoverBanner = ({ bannerImg, heading, subHeading }) => {
    return (
        <div style={{ backgroundImage: `url('${bannerImg}')`, backgroundSize: 'cover' }} className='h-screen bg-fixed flex  items-center justify-center'>
            <div className='bg-black bg-opacity-40 h-1/6 md:w-6/12 w-full  mx-auto flex justify-center items-center'>
                <h1 className='md:text-4xl  text-xl text-white font-serif text-center  '>{heading} <span className='text-[#F63E7B] '>{subHeading}</span> </h1>

            </div>

        </div>
    );
};

export default CoverBanner;