import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from 'react-query';
import testIcon from '../../../assets/icons/006-eyelashes.svg';

const TreatmentProgram = () => {

    const axiosPublic = useAxiosPublic()

    const { data: treatments } = useQuery({
        queryKey: ['treatment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data;
        }
    })

    return (
        <div className='w-10/12 mx-auto my-20'>
            <SectionTitle subHeading={'services'} heading={'Treatment Program'} text={"Here's a list of our basic services and prices."} ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-5 font-serif'>

                {
                    treatments?.map(treatment => <div
                        key={treatment._id}
                        class="flex items-center border-b py-2 gap-3">
                        <div class="avatar">
                            <div class="mask mask-circle  w-16 h-16">
                                <img className='bg-[#F63E7B] p-2 bg-opacity-20 ' src={treatment.icon} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex justify-between items-center">
                                <div class="font-bold md:text-xl ">{treatment.service_name}</div>
                                <div class="flex-grow h-0 border-t border-gray-400"></div>
                                <div class="font-bold text-sm md:text-md text-[#F63E7B]"><span className='italic'>from</span> ${treatment.price}</div>
                            </div>
                            <div class="text-sm opacity-80 ">{treatment.details}</div>
                        </div>
                    </div>)
                }






            </div>
        </div>
    );
};

export default TreatmentProgram;