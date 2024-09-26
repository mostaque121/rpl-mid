'use client'

export default function OtpForm({ isVerifying, otp, setOtp, handleOtpSubmit }) {
  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    // Focus next input automatically when a digit is entered
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  // Handle pasting OTP
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (paste.length === otp.length && !isNaN(paste)) {
      setOtp(paste.split(""));
      document.querySelectorAll('input')[otp.length - 1].focus(); // Focus on the last input after pasting
    }
  };

  // Check if all OTP digits are entered
  const isOtpComplete = otp.every(digit => digit !== "");

  return (
    <form onSubmit={handleOtpSubmit}>
      <div>
        <p className="text-sm text-dark-gray mb-4">
          A 6-digit OTP has been sent to
          <span className="text-blue-500"> mostaqueahmad121@gmail.com</span>. Please enter it below.
          <span className="text-red-500 text-nowrap hover:text-red-600 cursor-pointer active:text-red-700 duration-200 ease-in-out transition-all"> change email</span>
        </p>
        <div className="flex space-x-2 justify-center" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          ))}
        </div>
      </div>
      <button
        disabled={isVerifying || !isOtpComplete} // Button is disabled if OTP is incomplete or verifying
        type="submit"
        className={`w-full mt-6 text-white py-2 px-4 rounded-md transition duration-300
    ${isVerifying
            ? "bg-blue-500 cursor-wait"
            : isOtpComplete
              ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
              : "bg-blue-400 cursor-not-allowed"} // Disabled style when OTP is incomplete`}
      >
        {isVerifying ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
            </svg>
            Verifying
          </div>
        ) : (
          "Verify OTP"
        )}
      </button>
    </form>
  );
}
