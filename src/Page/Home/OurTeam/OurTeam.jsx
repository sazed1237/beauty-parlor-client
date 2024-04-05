import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ceoImg from '../../../assets/image/ceo2.jpg';
import beautician from '../../../assets/image/beautician.jpg';
import beautician2 from '../../../assets/image/beautician2.jpg';
import beautician3 from '../../../assets/image/beautician3.jpg';
import barber from '../../../assets/image/barber.jpg';
import barber2 from '../../../assets/image/hair2.jpg';

const OurTeam = () => {
    return (
        <div>
            <SectionTitle heading={'Our Masters'} subHeading={"Team"} text={'You are in good hands at Beauty Parlor.'}></SectionTitle>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5 text-white'>
                <div style={{ backgroundImage: `url('${ceoImg}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-96 relative'>

                    <div className=' absolute bottom-0 pb-2 pl-3 bg-black w-full bg-opacity-40'>
                        <h1 className='text-2xl  font-semibold'>Sofia Williams</h1>
                        <p className='text-sm '>CEO of Beauty Parlour</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url('${barber}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-96 relative'>
                    <div className=' absolute bottom-0 pb-2 pl-3 bg-black w-full bg-opacity-40'>
                        <h1 className='text-2xl  font-semibold'>Jessica </h1>
                        <p className='text-sm'>Hair Cutter</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url('${beautician2}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-96 relative'>
                    <div className=' absolute bottom-0 pb-2 pl-3 bg-black w-full bg-opacity-40'>
                        <h1 className='text-2xl  font-semibold'>Olivia Brown</h1>
                        <p className='text-sm'>Beautician</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url('${barber2}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='h-96 relative'>
                    <div className=' absolute bottom-0 pb-2 pl-3 bg-black w-full bg-opacity-40'>
                        <h1 className='text-2xl  font-semibold'>Emma Clark</h1>
                        <p className='text-sm'>Beautician</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;