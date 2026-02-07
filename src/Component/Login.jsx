import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup"); // Signup page pe route
  };
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
const handleSubmit=async(e)=>{
  e.preventDefault();
 try {
   const res=await axios.post("http://localhost:5000/api/user/login",{
    email,
    password
   });
       console.log(res.data);
        // token save
      localStorage.setItem("token", res.data.token);
      alert("Login successful");

      // clear form
      setEmail("");
      setPassword("");
      navigate("/")
 } catch (err) {
  console.log(err.response?.data);
      alert(err.response?.data?.message || "Login failed");
 }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form  onSubmit={handleSubmit}className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        
        <input  onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="border p-2 rounded" />
        <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border p-2 rounded" />
        
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        {/* Bottom message */}
        <p className="text-center text-gray-600 mt-2">
          Don't have an account?{" "}
          <button 
            type="button" 
            onClick={goToSignup} 
            className="text-blue-600 hover:underline font-semibold"
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
