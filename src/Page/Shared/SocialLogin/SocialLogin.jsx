import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SocialLogin = () => {

    const { googleSingIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()


    const from = location.state?.from?.pathname || '/';


    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user)

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)

                        navigate(from, { replace: true })
                    })

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>

            <div>
                <div className='flex border rounded-full pl-1 py-1 my-2'>
                    <FaFacebook className='text-2xl text-blue-600'></FaFacebook>
                    <button className=' flex-1 justify-center text-center items-center'> Continue with Facebook </button>
                </div>
                <div className='flex border rounded-full pl-1 py-1'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    <button onClick={handleGoogleSingIn} className=' flex-1 justify-center text-center items-center'> Continue with Facebook </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;