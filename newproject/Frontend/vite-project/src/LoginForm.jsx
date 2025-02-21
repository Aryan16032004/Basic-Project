import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from './store/authSlice';
import authService from './auth';
import Button from './Button';
import Input from './Input';

function LoginForm() {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await authService.login({
                email: formData.email,
                password: formData.password,
            });
            const userData = await authService.getCurrentUser();
            if (userData) dispatch(authLogin({ userData }));
            navigate("/home");
        } catch (error) {
            setError(error.response?.data?.message || "Invalid email or password");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">Login</h1>
                <form onSubmit={handleLogin}>
                    <Input 
                        label="Email:" 
                        placeholder="Enter your email" 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <Input 
                        label="Password:" 
                        placeholder="Enter your password" 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                    <Button type="submit" className="w-full mt-4">Login</Button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">Don't have an account? <a href="/signup" className="text-black font-medium">Sign up</a></p>
            </div>
        </div>
    );
}

export default LoginForm;