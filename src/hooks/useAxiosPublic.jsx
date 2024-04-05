import axios from "axios";


const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL: 'https://beauty-parlour-server-theta.vercel.app'
    })

    return axiosPublic;
};

export default useAxiosPublic;