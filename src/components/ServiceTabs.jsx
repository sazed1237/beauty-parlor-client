import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ServiceTabs = ({ services, handleAppointment }) => {

    return (
        <div className='my-8'>
            <Tabs >
                <TabList >
                    {
                        services.map(service => <Tab
                            key={service._id}

                        >{service.service_name}</Tab>)
                    }

                </TabList>

                {
                    services.map(service => <TabPanel
                        key={service._id}
                    >
                        <div className='md:flex justify-center gap-5'>
                            <div className='w-9/12 mx-auto'>
                                <img src={service.img} alt={service.service_name} />
                            </div>

                            <div className='mt-10 ml-5'>
                                <h1 className='text-4xl font-mono' >{service.service_name}</h1>
                                <h3 className='text-2xl py-3 text-[#F63E7B] font-mono'>${service.price}</h3>
                                <p className='text-gray-500'>{service.details}</p>

                                <div className='mt-10'>
                                    <button onClick={() => handleAppointment(service._id)} className='btn btn-md px-5 bg-[#F63E7B] hover:bg-[#ef729c] text-white' >Book Appointment</button>
                                </div>
                            </div>
                        </div>

                    </TabPanel>)
                }

            </Tabs>
        </div>
    );
};

export default ServiceTabs;