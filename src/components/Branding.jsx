import React from 'react';
import brandingImg from '../assets/image/5.jpg';
import spa from '../assets/image/Home/spa.jpg';
import spa1 from '../assets/image/Home/beauty-spa.jpg';

const Branding = () => {
    return (
        <div style={{ backgroundImage: `url('${spa1}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} className='h-screen bg-fixed'>
        </div>
    );
};

export default Branding;