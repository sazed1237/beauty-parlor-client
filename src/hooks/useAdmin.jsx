import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            // console.log(user?.email)
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data.admin)
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;