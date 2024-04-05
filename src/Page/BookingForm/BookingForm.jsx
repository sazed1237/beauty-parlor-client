import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaRegCreditCard } from "react-icons/fa";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';


// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const BookingForm = () => {
    const service = useLoaderData()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { register, handleSubmit, reset } = useForm()
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    // const location = useLocation()
    const navigate = useNavigate()

    const stripe = useStripe()
    const elements = useElements();



    // const id = location.state?.id;
    // // console.log(id)
    // const { data: service, isLoading, isError } = useQuery(['service'], async () => {
    //     if (id) {
    //         const res = await axiosSecure.get(`/services/${id}`);
    //         return res.data;
    //     }
    // }, {
    //     enabled: !!id,
    // });

    console.log(service?.price)



    // payment intent 
    useEffect(() => {
        if (service.price) {
            axiosSecure.post('/create-payment-intent', { price: service?.price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
                .catch(error => {
                    console.error('Error creating payment intent:', error);
                    setError('Error creating payment intent. Please try again.');
                })
        }
    }, [axiosSecure, service])




    const onSubmit = async (data) => {
        console.log(data)


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirm error', confirmError.message)
        }
        else {
            console.log('payment intent', paymentIntent)
            setTransactionId(paymentIntent.id)

            // now save the bookingInfo in the database
            const bookingInfo = {
                name: data.name,
                email: data.email,
                number: data.number,
                service_name: data.service,
                price: service?.price,
                date: new Date(),
                transactionId: paymentIntent.id,
                status: 'pending',
            }
            // console.log(bookingInfo)
            const res = await axiosSecure.post('/bookings', bookingInfo)
            console.log('payment saved', res.data)


            if (paymentIntent.status === 'succeeded' || res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Your Booking is Confirmed`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/myBookings')
            }
        }
    }



    return (
        <section>

            <div className="hero ">

                <div className="card shrink-0 w-full max-w-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                placeholder="Name" className="input "
                                {...register("name", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                type="email"
                                defaultValue={user?.email}
                                placeholder="Email Address"
                                className="input "
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                type="text"
                                defaultValue={service?.service_name}
                                placeholder="Service Name" className="input "
                                {...register("service", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                className="input "
                                {...register("number", { required: true })}
                            />
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm py-3'>Pay with</p>
                            <div className='flex items-center gap-1'>
                                <input type="radio" name="radio-1" className="radio radio-sm" />
                                <FaRegCreditCard className='text-blue-600 text-lg'></FaRegCreditCard>
                                <p>Credit Card</p>
                            </div>

                            <div className='mt-4'>
                                {/* card elements */}
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>
                            <p className='text-red-600 text-center'><small>{error}</small></p>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                className='btn btn-md px-5 bg-[#F63E7B] hover:bg-[#ef729c] text-white'
                                disabled={!stripe || !clientSecret}
                            >
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;