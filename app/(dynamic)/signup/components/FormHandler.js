'use client'
import { useState } from 'react';
import AvatarUploadForm from './AvatarUploadForm';
import EmailSubmitForm from './EmailSubmitForm';
import NamePassForm from './NamePassForm';
import OtpForm from './OtpForm';
;


const FormHandler = () => {
    const [step, setStep] = useState(1);
    const [isSending, setIsSending] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isFinishing, setIsFinishing] = useState(false);
    const [isNamePassSubmitting, setIsNamePassSubmitting] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    const [imagePublicId, setImagePublicId] = useState('');
    const [error, setError] = useState('');


    // Simulate OTP send/verification and account creation
    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Simulate sending OTP
            setStep(2); // Proceed to OTP step
        } else {
            setError('Please enter a valid email.');
        }
    };

    // Handle OTP form submission
    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        setStep(3);
        console.log("Submitted OTP: ", enteredOtp);
        // Add your verification logic here
    };

    // Handle OTP form submission
    const handleNamePassSubmit = (e) => {
        e.preventDefault();
        setStep(4);
        console.log("Submitted OTP: ", otp);
        // Add your verification logic here
    };


    const handleAccountCreation = (e) => {
        e.preventDefault();
        if (name && password) {
            setError('');
            // Proceed with account creation, like sending data to the backend
            console.log({
                email,
                name,
                password,
            });
            alert('Account created successfully!');
            // Reset form after successful signup
            setStep(1);
            setEmail('');
            setName('');
            setPassword('');
            setOtp('');
            setUploadedImageUrl('');
        } else {
            setError('Please complete all required fields.');
        }
    };



    return (
        <div>
            <div className="bg-white w-full">
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {step === 1 && (
                    <div>
                        <EmailSubmitForm
                            isSending={isSending}
                            email={email}
                            setEmail={setEmail}
                            handleEmailSubmit={handleEmailSubmit}
                        />
                    </div>
                )}

                {step === 2 && (
                    <OtpForm
                        isVerifying={isVerifying}
                        otp={otp}
                        setOtp={setOtp}
                        handleOtpSubmit={handleOtpSubmit}
                    />
                )}

                {step === 3 && (
                    <NamePassForm
                        isNamePassSubmitting={isNamePassSubmitting}
                        name={name}
                        setName={setName}
                        password={password}
                        setPassword={setPassword}
                        handleNamePassSubmit={handleNamePassSubmit}
                    />
                )}

                {step === 4 && (
                    <AvatarUploadForm
                        isFinishing={isFinishing}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImagePublicId={setImagePublicId}
                        handleAccountCreation={handleAccountCreation}
                    />
                )}
            </div>
        </div>
    );
};

export default FormHandler;
