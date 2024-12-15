import React from 'react';
import hero1 from '../../assets/images/input.png';
import lara from '../../assets/images/input.png';
import Adjohn from '../../assets/images/input.png';
import AdjohnK from '../../assets/images/input.png';


const AboutPage = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay with Semi-transparent Background */}
        <div className="absolute inset-0 bg-[rgba(80,23,32,0.7)]"></div>

        {/* Content Inside the Hero Section */}
        <div className="relative text-white p-4 md:p-8 lg:p-12 max-w-4xl mx-auto text-center">
          <h1 className="text-2xl mt-[10%] md:text-3xl lg:text-[60px] lg:leading-[77px] font-bold">
            Guided by Expertise: Our Creative Team
          </h1>
          <p className="text-white text-sm md:text-base lg:text-lg my-4 md:py-[20px] lg:py-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, odit adipisci numquam nam aliquam minima distinctio alias vitae molestiae sunt?.
          </p>
        </div>
      </div>

      {/* Advisory Team Section */}
      <div className="bg-[rgba(255,238,208,1)] pb-[2rem] flex flex-col items-center justify-center gap-[2rem] px-[2rem] sm:px-[3rem] py-14 lg:px-[5rem] text-[rgba(80,23,32,1)]">
        {/* Title Section */}
        <h2 className="w-full text-center text-3xl md:text-4xl lg:text-[44px] font-semibold">
          Creative Team
        </h2>

        {/* Grid Section for Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[lara, Adjohn, AdjohnK, lara, Adjohn, AdjohnK].map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={image}
                alt={`img-${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
              <h2 className="w-full text-center p-4 font-semibold text-lg">
                {["MaRt OgBe", "Oyasub Bala", "Imanra Musa", "Iyu Amos ", "Luke Kay", "Lee Kelly"][index]}
              </h2>
              <p className="w-full text-center text-sm font-light">
                {["Director", "Creative Designer", "Content Dev", "Media Strategist", "Graphic Designer", "Content Dev"][index]}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;
