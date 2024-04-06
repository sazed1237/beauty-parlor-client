import React from 'react';
import SectionTitle from '../Page/Shared/SectionTitle/SectionTitle';
import booking1 from '../assets/image/booking1.jpg';

const BookingForm = () => {
    return (
        <div style={{ backgroundImage: `url('${booking1}')`, backgroundSize: 'cover' }} className='min-h-screen grid md:grid-cols-2  pt-5 bg-fixed '>
            <div></div>
            <div className='bg-base-100 opacity-80 m-10'>
                <SectionTitle heading={'Book Your Visit'} subHeading={'Contact Us'}></SectionTitle>


                <div className="hero">

                    <div className="card shrink-0 w-full max-w-xl">
                        <form className="card-body">

                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <input type="text" placeholder="First Name" className="input input-bordered text-black  " required />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Last Name" className="input input-bordered text-black  " required />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <input type="email" placeholder="Email Address" className="input input-bordered text-black  " required />
                                </div>
                                <div className="form-control">
                                    <input type="number" placeholder="Mobile Number" className="input input-bordered text-black  " required />
                                </div>
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered w-full textarea-lg" placeholder="Your Message"></textarea>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className='btn btn-md px-5 bg-[#F63E7B] hover:bg-[#ef729c] text-white' >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;