import React from "react";


function Contact() {
  



  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 p-6 bg-gray-100">
      
      {/* Contact Form */}
      <form className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-blue-600">Contact Us</h2>
        <input type="text" placeholder="Your Name" className="border p-2 rounded"/>
        <input type="email" placeholder="Your Email" className="border p-2 rounded"/>
        <textarea placeholder="Your Message" rows="4" className="border p-2 rounded"/>
        
        {/* Button with navigate */}
        <button
          type="button"

          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          send Message
        </button>

      </form>
    </div>
  );
}

export default Contact;
