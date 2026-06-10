import React, { useState } from "react";

import trunkImg from "../assets/Screenshot 2026-06-01 113838.png"; 
import rearFogImg from "../assets/Screenshot 2026-06-01 135129.png";
import BrakeSystemWarning from "../assets/Screenshot 2026-06-01 141551.png" ;

const Led = () => {

  const ledProducts = [
    {
      id: 1,
      name: "Trunk LED",
      image: trunkImg,
      ledStatus: "red", 
      description: "Indicates that the trunk is open or not securely closed. Driving with the trunk open may create a safety hazard and increase the risk of losing cargo. Make sure the trunk is fully closed before continuing your journey.",
    },
    {
      id: 2,
      name: "Interior LED Lights",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=500&auto=format&fit=crop&q=60", 
      ledStatus: "yellow", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Rear Fog Lights",
      image: rearFogImg,
      ledStatus: "yellow", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
    },
    {
      id: 4,
      name: "Brake System Warning",
      image: BrakeSystemWarning, 
      ledStatus: "red",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      name: "Trunk LED",
      image: trunkImg,
      ledStatus: "red",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      name: "Trunk LED",
      image: trunkImg,
      ledStatus: "yellow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      name: "Trunk LED",
      image: trunkImg,
      ledStatus: "green",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 8,
      name: "Trunk LED",
      image: trunkImg,
      ledStatus: "green",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="container mx-auto p-6 flex flex-col items-center min-h-screen">
      {/* تعديل لون العنوان ليصبح أبيض ناصع وواضح */}
      <h2 className="text-3xl font-bold mb-8 text-center text-white tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
        LED Services
      </h2>
      
      {/* شبكة العرض المستجيبة */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:max-w-4xl gap-6 justify-items-center">
        {ledProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden flex flex-col items-center p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] w-full max-w-xs h-full"
          >
            
            {/* خلفية الصورة */}
            <div className="w-full h-44 rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5 flex items-center justify-center p-3 flex-shrink-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
              />
            </div>

            {/* تعديل لون اسم الكرت للأبيض */}
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {product.name}
            </h3>

            {/* تعديل لون الوصف لرمادي فاتح مريح للعين */}
            <p className="text-gray-300 text-center text-xs leading-relaxed max-w-[240px] mb-4 flex-grow">
              {product.description}
            </p>

            {/* لمبة الـ LED المضيئة */}
            <div className="flex items-center justify-center pt-2 mt-auto w-full flex-shrink-0">
              
              {product.ledStatus === "green" && (
                <div className="w-5 h-5 rounded-full bg-green-500 shadow-[0_0_14px_#22c55e] animate-pulse"></div>
              )}

              {product.ledStatus === "red" && (
                <div className="w-5 h-5 rounded-full bg-red-500 shadow-[0_0_14px_#ef4444] animate-pulse"></div>
              )}

              {product.ledStatus === "yellow" && (
                <div className="w-5 h-5 rounded-full bg-amber-400 shadow-[0_0_14px_#fbbf24] animate-pulse"></div>
              )}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Led;