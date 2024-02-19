import React from 'react';
import { images } from "../../../constants";

function Welcome() {
    document.title = "Home";

    return (
      <div className="bg-gray-50 min-h-screen p-5 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="mb-10 md:mb-0 md:w-1/3">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
          <p className="text-gray-600 text-lg">
            You can search and explore many kinds of recipes here including the
            required ingredients and their nutritional properties. Have fun
            exploring. You can select any of the desired tabs to start.
            <br/><br/>
            Popular Recipe: Homemade Shakshuka for 5 people.
            <br/><br/>
            This website was created by Amir, Dana, Lital, and Michael.
          </p>
          <button className="mt-5 bg-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-700 transition duration-300">Explore Now</button>
        </div>

        {/* Images Section */}
        <div className="md:w-2/3 grid grid-cols-3 gap-4">
          {Object.values(images).map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Recipe ${index}`} className="w-full h-auto object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    );
}

export default Welcome;
