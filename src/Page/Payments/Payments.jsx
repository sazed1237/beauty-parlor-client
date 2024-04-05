import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payments = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <BookingForm></BookingForm>
            </Elements>
        </div>
    );
};

export default Payments;