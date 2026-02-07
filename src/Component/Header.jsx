import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate=useNavigate();
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">MyApp</div>

        {/* Nav Links */}
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
           <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/Skill" className="hover:text-gray-200">Skill</Link>
        <Link to="/Experience" className="hover:text-gray-200">Experience</Link>
        <Link to="/Project" className="hover:text-gray-200">Project</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Signup</Link>  
        </nav>

        {/* Optional Button */}
        <button  onClick={() => navigate("/contact")} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
          Contact
        </button>
         <button  onClick={() => navigate("/login")} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
