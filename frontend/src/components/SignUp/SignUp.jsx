import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const AwesomeToast = ({ message, icon }) => {
  <div className="animate-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-br from-amber-500 to-amber-600 px-6 py-4 rounded-lg shadow-lg border-2 border-amber-300/20">
    <span className="text-2xl mr-3 text-[#2d1b0e]">{icon}</span>
    <span className="font-semibold text-[#2d1b0e]">{message}</span>
  </div>;
};

const SignUp = () => {
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a120b] p-4">
      {showToast && (
        <AwesomeToast message="Sign Up Successful" icon={<FaCheckCircle />} />
      )}
    
    <div className="w-full max-w-md bg-gradient-to-br from-[#2d1b0e] to-[#4a372a] p-8 rounded-xl shadow-lg border-4 border-amber-700/30 tranform transition-all duration-300 hover:shadow-2xl">
    <h1 className="text-3xl font-bold"></h1>
    </div>
    </div>
  );
};

export default SignUp;
