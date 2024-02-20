import React from 'react';
import { images } from "../../../constants";

function Welcome() {
  document.title = "Home";

  return (
    <div className="bg-white p-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-orange-600 mb-6">Welcome!</h1>
          <p className="text-lg text-gray-700 mb-4">
            You can search and explore many kind of recipes here including the
            required ingredients and their nutritional properties. Have fun
            exploring. You can select any of the desire tabs to start.
          </p>
          <p className="font-semibold mb-4">Popular Recipe: Homemade Shakshuka for 5 people.</p>
          <p className="mb-4">This website was created by Amir, Dana, Lital, and Michael.</p>
          <button className="bg-orange-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-orange-600 transition duration-300">
            Explore Now
          </button>
        </div>
        <div className="md:w-1/2 grid grid-cols-3 gap-4 mt-6 md:mt-0">
          {Object.values(images).map((src, index) => (
            <img key={index} src={src} alt={`Recipe ${index}`} className="w-full h-32 md:h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
