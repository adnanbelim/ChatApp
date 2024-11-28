import React from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../Context/Authprovider';
import { Link } from 'react-router-dom';


function SignIn() {

    // Use ContextHook
    const [authUser, setAuthUser] = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        // console.log(userInfo);
        await axios.post("http://localhost:9000/user/login", userInfo)
            .then((response) => {
                // console.log(response.data);
                if (response.data) {
                    alert("LoggedIn Successfull");
                }

                // Store Data on Local Storage to use on routes

                localStorage.setItem("ChatApp", JSON.stringify(response.data));

                // Initialize user data in Context
                setAuthUser(response.data);

            })
            .catch((err) => {
                if (err.response) {
                    // This message redirect from backend 
                    alert("Error " + err.response.data.error);
                }
            });
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <form onSubmit={handleSubmit(onSubmit)} className='border border-white px-8 py-4 rounded-lg space-y-3 w-80 sm:w-96'>
                    <h2 className='text-2xl text-center text-white'>
                        Chat<span className='text-green-500 font-semibold'>App</span>
                    </h2>
                    <h3 className='font-semibold text-xl text-white py-2'>SignIn</h3>

                    <label class="input input-bordered flex items-center gap-2">
                        <MdOutlineAlternateEmail />
                        <input type="text" class="grow" placeholder="Email"
                            {...register("email", { required: true })}
                        />
                    </label>
                    {errors.email && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}

                    <label class="input input-bordered flex items-center gap-2">
                        <FaKey />
                        <input type="password" placeholder="password"
                            {...register("password", { required: true })}
                        />
                    </label>
                    {errors.password && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}

                    <div className='flex justify-between'>
                        <p className='text-white'>
                            Haven't an account?
                            <Link to='/signup' className='text-blue-500 cursor-pointer ml-1'>
                                SignUp
                            </Link>
                        </p>
                        <input type="submit" value="SignIn" className='px-2 py-1 cursor-pointer text-white bg-green-500 rounded-lg' />
                    </div>

                </form>
            </div>
        </>
    )
}

export default SignIn