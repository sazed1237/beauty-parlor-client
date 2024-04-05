import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';


const Login = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const { singIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/';


    const onSubmit = (data) => {
        console.log(data)

        singIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)


                reset()
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">

                <div className="card  shrink-0 w-full max-w-sm mb-10 border-gray-200 border  ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className='text-2xl font-bold text-center'>Please Login</h1>


                        <div className="form-control ">
                            <input
                                type="email"
                                placeholder="Username or Email"
                                className="input"
                                {...register("email", {
                                    required: 'You must enter Username or email'
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
                                    required: 'You must enter password',
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

                        <div className="form-control mt-6 text-center">
                            <button className="btn text-white bg-[#F63E7B] hover:bg-[#F45E7B]">Login</button>
                            <p><small>Don't have an Account <Link to={'/singup'} className='text-[#F45E7B] font-bold text-center'>Create an Account</Link></small></p>
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

export default Login;