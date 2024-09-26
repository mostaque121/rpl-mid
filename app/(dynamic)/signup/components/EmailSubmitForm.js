'use client'

import { useState } from 'react';

// Simple email validation regex
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function EmailSubmitForm({ isSending, email, setEmail, handleEmailSubmit }) {
    const [isEmailValid, setIsEmailValid] = useState(false);

    // Handle email input change and validate email format
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(isValidEmail(emailValue));
    }

    return (
        <form onSubmit={handleEmailSubmit}>
            <div>
                <label htmlFor="email" className="block font-semibold text-sm text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="you@example.com"
                    required
                />
            </div>
            <button
                disabled={isSending || !isEmailValid} // Button is disabled if sending or email is invalid
                type="submit"
                className={`w-full mt-6 text-white py-2 px-4 rounded-md transition duration-300 
                ${isSending || !isEmailValid ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"}`} // Disabled state for invalid email
            >
                {isSending ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
                        </svg>
                        Sending...
                    </div>
                ) : (
                    "Send OTP"
                )}
            </button>
        </form>
    )
}
