import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("OTP sent (simulated)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Login via Mobile</h2>
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full mb-4 p-2 border rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}
