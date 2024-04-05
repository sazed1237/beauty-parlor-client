import React from 'react';

const SectionTitle = ({ heading, subHeading, text }) => {
    return (
        <div className='text-center  my-10'>
            <h5 className='text-[#F63E7B] text-lg font-bold uppercase' >- {subHeading} -</h5>
            <h1 className=' text-3xl md:text-5xl py-5 font-bold'>{heading} </h1>
            <h3 className='text-2xl text-opacity-80 font-semibold text-[#F63E7B]'>{text}</h3>
        </div>
    );
};

export default SectionTitle;