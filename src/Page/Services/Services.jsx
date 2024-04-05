import React, { useEffect, useState } from 'react';
import CoverBanner from '../../components/CoverBanner';
import serviceBanner from '../../assets/image/services/services.jpg';
import ServiceTabs from '../../components/ServiceTabs';
import { useQuery } from 'react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Services = () => {

    // const [services, setServices] = useState([])
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';



    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setServices(data)
    //         })
    // }, [])

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic('/services')
            return res.data;
        }
    })

    const handleAppointment = (id) => {
        console.log(id)

        if (user && user?.email) {
            // axiosPublic.get(`/services/${id}`)
            navigate(`/dashboard/bookingAppointment/${id}`)
        }
        else {
            Swal.fire({
                title: "Please Login to booking appointment",
                text: "You are not login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }





    return (
        <div>
            <CoverBanner bannerImg={serviceBanner} heading={'OUR AMAZING'} subHeading={'SERVICES'} ></CoverBanner>
            <ServiceTabs handleAppointment={handleAppointment} services={services} ></ServiceTabs>
        </div>
    );
};

export default Services;