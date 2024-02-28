import React, { useState } from 'react';
import sign from "../home_img/sign.png";

export default function JoinUs() {
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const images = [sign];
    const reasons = ["Worldwide Contribution.", "Varified by the people.", "2 is plenty."];

    return (
        <div className="flex flex-col md:flex-row md:items-start gap-36 p-8 my-20 animate-fadeIn rounded-lg">
            
            {/* Image Section */}
            <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
                {images.map((src, index) => (
                    <img key={index} src={src} alt="Sign" className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-full"/>
                ))}
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left md:pl-4 font-bold">
                <h1 className="flex justify-center text-4xl text-red-800 mb-4">Join The Fatties!</h1>
                <p className="flex justify-center mb-4 text-3xl text-gray-700">Why, you ask? <br/></p>
                
                {reasons.map((item, index) => (
                    <div key={index} className="mb-3 pl-4 border-l-4 border-red-800">
                        <p className="text-2xl text-gray-600">{item}</p>
                    </div>
                ))}
                
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    className="bg-red-800 hover:bg-red-600 text-white text-xl rounded-lg px-8 py-3 my-5 font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1">
                      Sign Up
                  </button>
                </div>

                {/* Sign Up Section */}
                {showForm && (
                    <div className="mt-5 mx-auto transition-all duration-500 transform origin-top bg-white shadow-md rounded-lg p-6">
                        <div className="text-red-800 font-bold text-xl mb-5 border-b-4">Enter Info</div>
                        <form className="flex flex-col items-center gap-4">
                            <input type="text" placeholder="Name" className="input border-2 border-gray-300 rounded-lg p-2 w-full" />
                            <input type="email" placeholder="Email" className="input border-2 border-gray-300 rounded-lg p-2 w-full" />
                            <input type="phone" placeholder="Phone Number" className="input border-2 border-gray-300 rounded-lg p-2 w-full" />
                            <input type="password" placeholder="Password" className="input border-2 border-gray-300 rounded-lg p-2 w-full" />
                            <input type="text" placeholder="Country" className="input border-2 border-gray-300 rounded-lg p-2 w-full" />
                            <button type="submit" className="bg-red-800 hover:bg-red-600 text-white text-lg rounded-lg px-4 py-2 mt-4 font-semibold transition duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
