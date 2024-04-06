import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';




const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddService = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        const imgDisplayUrl = res.data.data.display_url;

        if (res.data.success) {
            // now send the items data to the server with the image url
            const serviceDetails = {
                service_name: data.name,
                price: parseFloat(data.price),
                details: data.details,
                img: imgDisplayUrl
            }
            // now send data to database
            const serviceRes = await axiosSecure.post('/services', serviceDetails);
            console.log(serviceRes.data)
            if (serviceRes.data.insertedId) {
                Swal.fire({
                    title: "Services Added",
                    text: "You are added new service Successfully",
                    icon: "success"
                });
                reset()
            }
        }
        console.log(imgDisplayUrl)
    }

    return (
        <section>
            <SectionTitle heading={'Add An Item'} subHeading={`What's new`}></SectionTitle>


            <div className="card md:w-5/6 mx-auto shadow-2xl bg-base-200 rounded-none mdmb-20">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className='grid md:grid-cols-2 md:gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name*</span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Service Name"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details*</span>
                        </label>
                        <textarea
                            {...register("details", { required: true })}
                            placeholder="Details"
                            className="textarea textarea-bordered textarea-md w-full "
                        ></textarea>

                    </div>

                    <div className="form-control">
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input w-full file-input-sm md:file-input-md"
                        />
                    </div>


                    <div className=" mx-auto mt-6 ">
                        <button className="btn btn-sm rounded-none bg-[#F63E7B] border-none btn-w-sm btn-primary hover:bg-gray-400 text-white">Add service <FaPlus></FaPlus></button>
                        {/* <input type="submit" value="Add Item" /> */}
                    </div>
                </form>
            </div>

        </section>
    );
};

export default AddService;