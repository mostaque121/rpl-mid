'use client'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function NamePassForm({ isNamePassSubmitting, name, setName, password, setPassword, handleNamePassSubmit }) {
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Check if both name and password are not empty
    const isFormComplete = name.trim() !== '' && password.trim() !== '';

    return (
        <form onSubmit={handleNamePassSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    id="username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Choose a username"
                    required
                />
            </div>

            <div className="relative">
                <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Create a password"
                    required
                />
                <button
                    type="button"
                    className="absolute top-9 right-3 flex items-center text-gray-600"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            <button
                type="submit"
                className={`w-full mt-8 text-white py-2 px-4 rounded-md transition duration-300 
        ${isNamePassSubmitting || !isFormComplete ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"}`}
                disabled={isNamePassSubmitting || !isFormComplete} // Button disabled when form is incomplete or submitting
            >
                {isNamePassSubmitting ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
                        </svg>
                        Submitting...
                    </div>
                ) : (
                    "Next"
                )}
            </button>
        </form>
    );
}
