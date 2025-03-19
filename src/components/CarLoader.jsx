import React from "react";
import backgroundimg from "../assets/images/image18.jpg";
import loadercar from "../assets/images/image18.png";

const CarLoader = () => {
  return (
    <div className="fixed  bg-gradient-to-b from-orange-50 to-white inset-0 flex items-center justify-center bg-cream bg-opacity-80 z-50">
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // backgroundImage: `url(${backgroundimg})`,
          filter: "blur(2px) brightness(0.8)",
        }}
      ></div>

      {/* Road with Moving Lane Lines */}
      {/* <div className="absolute bottom-80 w-full h-8 bg-gray-800 overflow-hidden shadow-lg"> */}
        {/* <div className="absolute w-full h-full bg-gradient-to-r from-orange-400 to-orange-600"></div> */}
        {/* Lane Markings */}
        <div className="absolute w-full h-0.5 top-83 transform -translate-y-1/2 bg-red-800 shadow-lg animate-roadMove"></div>
      {/* </div> */}

      {/* Moving Car */}
      <div className="absolute bottom-80 w-25 h-7 animate-carMove">
        <img
          src={loadercar}
          alt="Car"
          className="w-full drop-shadow-[0px_10px_15px_rgba(255,255,255,0.8)]"
        />
      </div>

      {/* Loading Text */}
      <p className="absolute bottom-70 text-black text-lg md:text-2xl tracking-wider animate-textGlow">
         Hold on... Loading your request.....
      </p>

      {/* Premium Animations */}
      <style>
        {`
          @keyframes carMove {
            0% { transform: translateX(-100%); opacity: 0.7; }
            50% { transform: translateX(40%) scale(1.05); opacity: 1; }
            100% { transform: translateX(120%); opacity: 0.7; }
          }
          .animate-carMove {
            animation: carMove 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          @keyframes textGlow {
            0%, 100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
            50% { text-shadow: 0 0 15px rgba(255,255,255,0.8); }
          }
          .animate-textGlow {
            animation: textGlow 1.5s ease-in-out infinite;
          }

          @keyframes roadMove {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
          .animate-roadMove {
            animation: roadMove 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CarLoader;
