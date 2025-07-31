// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const sendOtp = () => {
    if (mobile.length === 10) {
      alert("Mock OTP sent to " + mobile);
      setStep(2);
    }
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      alert("Login successful!");
      navigate("/vote");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-2xl font-semibold">Login</h2>
      {step === 1 ? (
        <>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={sendOtp}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={verifyOtp}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
