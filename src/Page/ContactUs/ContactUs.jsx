import React from 'react';
import contactBanner from '../../assets/image/contact.jpg';
import CoverBanner from '../../components/CoverBanner';

const ContactUs = () => {
    return (
        <div>
            <CoverBanner bannerImg={contactBanner} heading={'Contact'} subHeading={'Us'} ></CoverBanner>

        </div>
    );
};

export default ContactUs;