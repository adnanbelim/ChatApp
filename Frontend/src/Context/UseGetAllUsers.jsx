import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import axios from 'axios';

const UseGetAllUsers = () => {
 const [allUsers, setAllUsers] = useState([]);
 // if when we click on chat then if old chat available then loading false otherwise true
 const [loading, setLoading] = useState(false);

 useEffect(() => {
    const getUsers = async () => {
        setLoading(true);
        try{
            const token = Cookies.get("jwt");
            const response = await axios.get("http://localhost:9000/user/allusers",{
                credential : "include", 
                headers : {
                    Authorization : `Bearer ${token}`,
                }
            });
            setAllUsers(response.data);
            setLoading(false); 
        }catch(error)
        { 
            console.log("error in getAllUsers", error);
        }
    }
 }, [])
}

export default UseGetAllUsers