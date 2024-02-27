import React from 'react';

import pastaImage from '../home_img/pasta.png';
import hamburgerImage from '../home_img/hamburger.png';
import healthyImage from '../home_img/Healthy.jpg';
import hungryImage from '../home_img/HungryHungry.jpg';
import shakshukaImage from '../home_img/shakshuka.png';
import toastImage from '../home_img/toast.png';
import hummusImage from '../home_img/hummus.png';
import shrimpImage from '../home_img/shrimp.png';
import snailsImage from '../home_img/snails.png';

function Welcome() {
  document.title = "Home";

  const images = [pastaImage, hamburgerImage, healthyImage, hungryImage, shakshukaImage, toastImage, hummusImage, shrimpImage, snailsImage];

  return (
    <div className="bg-white p-10 text-gray-700"> 
      <div className="flex flex-col md:w-fit md:flex-row">

        <div className="md:w-1/2 font-bold pt-16 pr-7">
          <h1 className="text-5xl text-red-800 mb-6 pt-10">Welcome!</h1>
          <p className="text-2xl mb-4">
            You can search and explore many kind of recipes here including the
            required ingredients and their nutritional properties. Have fun
            exploring. You can select any of the desire tabs to start.
          </p>
          <p className="text-2xl mb-4">Popular Recipe: Homemade Shakshuka for 5 people.</p>
          <p className="text-xl mb-4 pb-10">This website was created by Amir, Dana, Lital, and Michael.</p>
          <button className="bg-red-800 text-white text-xl rounded-lg px-6 py-3 font-semibold hover:bg-orange-600 transition duration-300">
            Explore Now
          </button>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-3 gap-4 mt-6 md:mt-0">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Recipe ${index}`} className="w-full h-32 md:h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;