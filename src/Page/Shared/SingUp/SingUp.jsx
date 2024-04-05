import React, { useRef } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';



const SingUp = () => {

    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm()
    const { createUser, updateUserProfile } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()


    const from = location.state?.from?.pathname || '/';

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data)

        const firstName = data.firstName;
        const lastName = data.lastName;
        const name = firstName + ' ' + lastName;
        // console.log(name)


        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile(name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated')

                        // create user entry in the database
                        const userInfo = {
                            name: name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added in database')
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your Logged in now",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset()
                                    navigate(from, { replace: true })
                                }
                            })
                    })


            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">

                <div className="card shrink-0 w-full max-w-sm mb-10 border-gray-200 border  ">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className='text-2xl font-bold text-center'>Create an Account</h1>

                        <div className="form-control ">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input "

                                {...register("firstName", {
                                    required: 'First name is required'
                                })}
                            // aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            <hr className='w-10/12 ml-4 ' />

                            {errors.firstName && (
                                <p role="alert" className='text-red-500 ml-4'><small>{errors.firstName.message}</small></p>
                            )}
                        </div>

                        <div className="form-control ">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input"
                                {...register("lastName", {
                                    required: 'Last name is required'
                                })}
                            // aria-invalid={errors.lastName ? "true" : "false"}
                            />
                            <hr className='w-10/12 ml-4 ' />
                            {errors.lastName && (
                                <p className='text-red-500 ml-4' role="alert"><small>{errors.lastName.message}</small></p>
                            )}
                        </div>

                        <div className="form-control ">
                            <input
                                type="email"
                                placeholder="Username or Email"
                                className="input"
                                {...register("email", {
                                    required: 'Username or email is required'
                                })}
                            // aria-invalid={errors.email ? "true" : "false"}
                            />
                            <hr className='w-10/12 ml-4 ' />
                            {errors.email && (
                                <p className='text-red-500 ml-4' role="alert"><small>{errors.email.message}</small></p>
                            )}
                        </div>


                        <div className="form-control ">
                            <input
                                type="password"
                                name='password'
                                placeholder="Password"
                                className="input "

                                {...register("password", {
                                    required: 'You must specify a password',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must have at least 6 characters'
                                    }
                                })}
                            // aria-invalid={errors.password ? "true" : "false"}
                            />

                            <hr className='w-10/12 ml-4 ' />
                            {errors.password && (
                                <p className='text-red-500 ml-4' role="alert"><small>{errors.password.message}</small></p>
                            )}
                        </div>

                        <div className="form-control ">
                            <input
                                type="password"
                                name='confirm'
                                placeholder="Confirm Password"
                                className="input "
                                {...register("confirm", {
                                    // required: true,
                                    validate: value => value === password.current || 'The password do not match!',

                                })}
                            />
                            <hr className='w-10/12 ml-4 ' />

                            {errors.confirm && (
                                <p className='text-red-500 ml-4' role="alert"><small>{errors.confirm.message}</small></p>
                            )}

                        </div>

                        <div className="form-control ">
                            <input
                                type="text"
                                name='photoURL'
                                placeholder="PhotoURL"
                                className="input"
                                {...register("photoURL", {
                                    required: 'PhotoURL is required'
                                })}
                            />
                            <hr className='w-10/12 ml-4 ' />

                            {errors.confirm && (
                                <p className='text-red-500 ml-4' role="alert"><small>{errors.confirm.message}</small></p>
                            )}

                        </div>

                        <div className="form-control mt-6 text-center">
                            <button className="btn text-white bg-[#F63E7B] hover:bg-[#F45E7B]">Create an Account</button>
                            <p><small>Already Have an Account <Link to={'/login'} className='text-[#F45E7B] font-bold text-center'>Login</Link></small></p>
                        </div>
                    </form>
                    <div className='w-10/12 mx-auto mb-4' >

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;