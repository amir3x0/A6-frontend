import React from "react";
import sign from '../home_img/sign.png';

export default function JoinUs() {

  const images = [sign];
  const reasons = ["Worldwide Contribution.",
                   "Varified by the people.",
                   "2 is plenty."];
  
  return (
    <div className="flex flex-col md:w-fit md:flex-row">
      <div className="md:w-1/2 gap-4 mt-6 md:mt-0">
        {images.map((src, index) => (
          <img key={index} src={src} alt='hello' className="w-full h-32 md:h-48 object-cover rounded-lg" />
        ))}
      </div>

      <div className="col join">
        <h1 className="title">Join The Fatties!</h1>
        <p className="info">Why, you ask? <br></br></p>

        {
          reasons.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }

        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}