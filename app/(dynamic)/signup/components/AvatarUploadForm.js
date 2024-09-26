'use client'
import axios from 'axios';
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function AvatarUploadForm({ uploadedImageUrl, setUploadedImageUrl, setImagePublicId, handleAccountCreation, isFinishing }) {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    // Handle avatar upload
    const handleAvatarChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'avatar'); // Replace with your Cloudinary upload preset

            setIsUploading(true);
            setUploadProgress(0);

            try {
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dbneycd8g/image/upload', // Replace with your Cloudinary URL
                    formData,
                    {
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            setUploadProgress(percentCompleted);
                        },
                    }
                );

                // Set the uploaded image URL
                setUploadedImageUrl(response.data.secure_url);
                setImagePublicId(response.data.public_id);
                setIsUploading(false);
            } catch (error) {
                console.error('Error uploading avatar:', error);
                setIsUploading(false);
            }
        }
    };

    // Handle image removal
    const handleRemoveImage = () => {
        setUploadedImageUrl('');
        setImagePublicId('');
        setUploadProgress(0);
    };

    return (
        <form onSubmit={handleAccountCreation}>
            <div>
                <label htmlFor="avatar" className="block font-semibold text-sm  text-gray-700">
                    Avatar (Optional) :
                </label>
                <input
                    id="avatar"
                    type="file"
                    onChange={handleAvatarChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                />
                {isUploading && (
                    <div className="mt-2">
                        <div className="bg-gray-200 rounded-full h-2 w-full">
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${uploadProgress}%` }}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{uploadProgress}%</p>
                    </div>
                )}
                {uploadedImageUrl && (
                    <div className='flex justify-center'>
                        <div className="mt-4 relative">
                            <img src={uploadedImageUrl} alt="Uploaded avatar" className="w-24 h-24 object-cover rounded-full" />
                            <button
                                type="button"
                                onClick={handleRemoveImage}
                                className="text-red-600 absolute top-0 right-0"
                            >
                                <RxCross1 className='bg-slate-200 hover:bg-slate-300 rounded-full' />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <button
                type="submit"
                className={`w-full mt-8 text-white py-2 px-4 rounded-md transition duration-300 
                    ${isUploading || isFinishing ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"}`}
                disabled={isUploading || isFinishing} // Disable when uploading or finishing
            >
                {isFinishing ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
                        </svg>
                        Creating Account...
                    </div>
                ) : (
                    uploadedImageUrl ? "Save" : "Skip"
                )}
            </button>
        </form>
    );
}
