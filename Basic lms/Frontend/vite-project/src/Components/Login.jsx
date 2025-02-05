import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input} from "./index";
import { useDispatch } from "react-redux";
import authService from "../BackendApi/auth.js";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const login = async (data) => {
        console.log("data",data);
        
        setError("");
        try {
            console.log("trying logging in");
            
            const session = await authService.login(data);
            console.log("session",session);
            
            if (session) {
                console.log("getting current user");
                
                const userData = await authService.getCurrentUser();
                console.log("userdata",userData);
                
                if (userData) dispatch(authLogin({ userData })); 
                navigate("/dashboard");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center m-14 ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div> */}
                <h2 className="text-center text-2xl font-bold leading-tight">Log in to your account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)}>
                    <div className='space-y-5'>
                        <Input
                            label="Username: "
                            placeholder="Enter your username"
                            type="text"
                            {...register("username", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            Log in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
