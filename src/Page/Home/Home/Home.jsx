import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import PopularServices from '../PopularServices/PopularServices';
import Highlights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import Branding from '../../../components/Branding';
import BookingForm from '../../../components/BookingForm';
import OurTeam from '../OurTeam/OurTeam';
import Discount from '../../../components/Discount';
import TreatmentProgram from '../TreatmentProgram/TreatmentProgram';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <SectionTitle heading={'Our Awesome Services'} subHeading={'Services'}></SectionTitle>
            <PopularServices></PopularServices>
            <Highlights></Highlights>
            <TreatmentProgram></TreatmentProgram>
            <Branding></Branding>
            <Discount subHeading={'BECOME A BEAUTY MEMBER'} heading={'Enjoy a 25% Discount'} buttonText={'Become a Member'}  ></Discount>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
            <BookingForm></BookingForm>
        </div>
    );
};

export default Home;