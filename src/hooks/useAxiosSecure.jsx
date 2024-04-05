import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Loading from "../components/Loading";


const axiosSecure = axios.create({
    baseURL: 'https://beauty-parlour-server-theta.vercel.app'
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const { logOut, loading } = useAuth()

    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        if (loading) {
            return <Loading></Loading>
        }
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {

        return Promise.reject(error);
    });


    // interceptor 401 and  403 status
    axiosSecure.interceptors.response.use(function (response) {

        return response
    }, async (error) => {

        if (!error.response) {

            console.error('Network error or other unexpected error:', error);
            // Return a rejected promise to propagate the error
            return Promise.reject(error);
        }

        const status = error.response.status;
        console.log('status error in the interceptor', status)
        // for 401 or 403 logout the user and move the user to login page
        if (status === 401 || status === 403) {

            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxiosSecure;