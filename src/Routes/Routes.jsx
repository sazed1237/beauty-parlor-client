import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Shared/Login/Login";
import SingUp from "../Page/Shared/SingUp/SingUp";
import Secret from "../Page/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Services from "../Page/Services/Services";
import BookingForm from "../Page/BookingForm/BookingForm";
import Dashboard from "../Layout/Dashboard";
import Users from "../Page/Dashboard/Users/Users";
import AdminHome from "../Page/Dashboard/AdminHome/AdminHome";
import UserHome from "../Page/Dashboard/UserHome/UserHome";
import AddService from "../Page/Dashboard/AddService/AddService";
import Payments from "../Page/Payments/Payments";
import MyBookings from "../Page/Dashboard/MyBookings/MyBookings";
import AddReview from "../Page/Dashboard/AddReview/AddReview";
import ManageBookings from "../Page/Dashboard/ManageBookings/ManageBookings";
import ContactUs from "../Page/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // normal user route
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'bookingAppointment/:id',
                element: <Payments></Payments>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },

            {
                path: 'myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: 'addReview',
                element: <AddReview></AddReview>,
            },


            // admin only route
            {
                path: 'users',
                element: <Users></Users>
            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'service',
                element: <AddService></AddService>
            },
            {
                path: 'manageBookings',
                element: <ManageBookings></ManageBookings>
            }
        ]
    }
]);