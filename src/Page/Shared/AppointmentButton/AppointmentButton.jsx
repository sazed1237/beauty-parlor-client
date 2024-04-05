import React from 'react';

const AppointmentButton = ({ appointmentButton }) => {
    return (
        <div>
            <button className='btn btn-md px-5 bg-[#F63E7B] hover:bg-[#ef729c] text-white' >{appointmentButton}</button>
        </div>
    );
};

export default AppointmentButton;