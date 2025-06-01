import React from "react";
import whiteCar from "../assets/images/image8.jpg";
import oceanview from "../assets/images/image27.jpg";
import hondacity from "../assets/indiancars/hondacity.webp";
import fortuner from "../assets/indiancars/fortuner.png";
import Ertiga from "../assets/indiancars/Ertiga.jpg";
import creta from "../assets/indiancars/creta.png";
import bmw from "../assets/indiancars/bmw.webp";
import baleno from "../assets/indiancars/baleno.jpg";
import audi from "../assets/indiancars/audi.jpg";
import alcazar from "../assets/indiancars/alcazar.png";
import thar from "../assets/indiancars/thar.png";
import swift from "../assets/indiancars/swift.png";
import mghector from "../assets/indiancars/mg-hector.png";
import kia from "../assets/indiancars/kia.png";
import innovahycross from "../assets/indiancars/innova-hycross.png";
import innovacrysta from "../assets/indiancars/innova-crysta.png";
import breeza from "../assets/indiancars/breeza.webp";
import innova from "../assets/indiancars/innova.png";
import i20 from "../assets/indiancars/i20.png";
import i10grand from "../assets/indiancars/i10grand.webp";
import i10 from "../assets/indiancars/i10-grand.png";
import wagonR from "../assets/indiancars/wagonR.png";
import verna from "../assets/indiancars/verna.png";
import venue from "../assets/indiancars/venue.png";
import mercedes from "../assets/indiancars/mercedes.png";

import { FaPhone, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

const carList = [
  {
    name: "WagonR",
    image: wagonR,
    Manual: "900/-",
    // Automatic: "1100/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Swift",
    image: swift,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Baleno",
    image: baleno,
    Manual: "1200/-",
    Automatic: "1500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "I20",
    image: i20,
    Manual: "1200/-",
    Automatic: "1500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Ertiga",
    image: Ertiga,
    Manual: "1900/-",
    Automatic: "2400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "7 Person",
    aosDelay: "0",
  },
  {
    name: "Innova",
    image: innova,
    Manual: "1900/-",
    // Automatic: "3000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Manual",
    Passengers: "7 Person",
    aosDelay: "0",
  },
  {
    name: "Innova Crysta",
    image: innovacrysta,
    Manual: "2600/-",
    Automatic: "3000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "7 Person",
    aosDelay: "0",
  },
  {
    name: "Breeza",
    image: breeza,
    Manual: "2000/-",
    Automatic: "2500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },

  {
    name: "Venue",
    image: venue,
    Manual: "2000/-",
    Automatic: "2500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Thar",
    image: thar,
    Manual: "3000/-",
    Automatic: "3500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Creta",
    image: creta,
    Manual: "2000/-",
    Automatic: "3000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Alcazar (Panaromic Sunroof)",
    image: alcazar,
    // Manual: "3500/-",
    Automatic: "3000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Innova Hycross",
    image: innovahycross,
    // Manual: "3500/-",
    Automatic: "3000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "7 Person",
    aosDelay: "0",
  },

  {
    name: "MG Hector (Panaromic Sunroof)",
    image: mghector,
    // Manual: "3000/-",
    Automatic: "4500/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "7 Person",
    aosDelay: "0",
  },
  {
    name: "Fortuner",
    image: fortuner,
    // Manual: "4500/-",
    Automatic: "5000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "7 Person",
    aosDelay: "0",
  },
  // {
  //   name: "Verna",
  //   image: verna,
  //   Manual: "1800/-",
  //   Automatic: "2000/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Kia",
  //   image: kia,
  //   Manual: "2000/-",
  //   Automatic: "3000/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "I10 Grand",
  //   image: i10grand,
  //   Manual: "1100/-",
  //   Automatic: "1300/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "I10",
  //   image: i10,
  //   Manual: "1000/-",
  //   Automatic: "1200/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },

  // {
  //   name: "Honda City",
  //   image: hondacity,
  //   Manual: "2000/-",
  //   Automatic: "2200/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },

  {
    name: "Audi A4",
    image: audi,
    // Manual: "13000/-",
    Automatic: "16000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Mercedes-Benz-CLA",
    image: mercedes,
    // Manual: "13000/-",
    Automatic: "16000/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Automatic",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  // {
  //   name: "BMW 5 Series",
  //   image: bmw,
  //   Manual: "8500/-",
  //   Automatic: "10500/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
  // {
  //   name: "Thar",
  //   image: whiteCar,
  //   Manual: "1100/-",
  //   Automatic: "1400/-",
  //   Fueltype: "Petrol/Diesel",
  //   Transmission: "Auto/Manual",
  //   Passengers: "5 Person",
  //   aosDelay: "0",
  // },
];

const CarList = ({ theme }) => {
  return (
    <div
      className={
        theme == "dark"
          ? " relative dark:bg-black pt-32 pb-10"
          : "relative dark:bg-dark bg-gradient-to-b z-1 from-orange-50 to-white pb-10"
      }
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[390px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${oceanview})`,
            filter: "blur(0px)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center pt-28 sm:pt-36 px-4 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-100 font-extrabold tracking-wide font-serif py-4 sm:py-6 mb-4 sm:mb-10 leading-tight">
            All Luxury Car Rentals in Goa available
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-50 mb-6 sm:mb-8 leading-relaxed">
            Experience the ultimate in comfort and style with our premium fleet.
          </h2>
          <a
            href="tel:+918104535322"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-orange-600 hover:to-orange-500 shadow-md transition"
          >
            <Phone className="inline-block ml-2" /> Call Now
          </a>
        </div>
      </div>

      <div className="relative text-center py-8">
        <h2 className="text-4xl text-orange-900 leading-relaxed font-bold rounded-full underline hover:scale-105">
          Our Cars
        </h2>
      </div>
      <div
        className={
          theme == "dark"
            ? "dark:bg-black dark:text-white py-6 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-15 cursor-pointer"
            : "py-6 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-15 cursor-pointer"
        }
      >
        {carList.map((data) => (
          <div
            key={data.id}
            className={
              theme === "dark"
                ? `border border-gray-700 shadow-2xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:ring-2 hover:ring-orange-400 duration-300 dark:bg-gray-800/60`
                : `border border-gray-200 bg-white/80 shadow-2xl rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:ring-2 hover:ring-orange-400 duration-500`
            }
          >
            <div className="relative overflow-hidden p-8">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-48 object-contain transition-transform duration-500 rounded-t-2xl hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-xl">
                ₹ {data.Manual ? data.Manual : data.Automatic}
              </span>
            </div>

            <div className="p-4">
              <h1
                className={
                  theme === "dark"
                    ? `text-white font-semibold text-xl mb-3 text-center`
                    : "text-orange-700 font-semibold text-xl mb-3 text-center"
                }
              >
                {data.name}
              </h1>

              <div className="grid grid-cols-2 gap-2 text-base font-medium mt-4">
                <div className="text-gray-500 dark:text-gray-300 text-left">
                  Transmission
                </div>
                <div
                  className={
                    theme === "dark"
                      ? `text-gray-100 text-right`
                      : "text-black text-right"
                  }
                >
                  {data.Transmission}
                </div>

                <div className="text-gray-500 dark:text-gray-300 text-left">
                  Fuel Type
                </div>
                <div
                  className={
                    theme === "dark"
                      ? `text-gray-100 text-right`
                      : "text-black text-right"
                  }
                >
                  {data.Fueltype}
                </div>

                {/* Manual (conditionally shown) */}
                {data.Manual && (
                  <>
                    <div className="text-gray-500 dark:text-gray-300 text-left">
                      Manual
                    </div>
                    <div
                      className={
                        theme === "dark"
                          ? "text-gray-100 text-right"
                          : "text-black text-right"
                      }
                    >
                      ₹{data.Manual}
                    </div>
                  </>
                )}

                {/* Automatic (conditionally shown) */}
                {data.Automatic && (
                  <>
                    <div className="text-gray-500 dark:text-gray-300 text-left">
                      Automatic
                    </div>
                    <div
                      className={
                        theme === "dark"
                          ? "text-gray-100 text-right"
                          : "text-black text-right"
                      }
                    >
                      ₹{data.Automatic}
                    </div>
                  </>
                )}

                <div className="text-gray-500 dark:text-gray-300 text-left">
                  Seats
                </div>
                <div
                  className={
                    theme === "dark"
                      ? `text-gray-100 text-right`
                      : "text-black text-right"
                  }
                >
                  {data.Passengers}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <p
                  className={theme === "dark" ? `text-gray-200` : "text-black"}
                >
                  ₹ {data.Manual ? data.Manual : data.Automatic} Day
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2">
                <a
                  href="tel:+919876543210"
                  className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-orange-500 hover:to-red-500 shadow-md transition"
                >
                  Call Now
                </a>

                <a
                  href={`https://wa.me/918104535322?text=Hi,%20I%20would%20like%20to%20inquire%20about%20the%20rental%20charges%20for%20${data.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600 transition"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
