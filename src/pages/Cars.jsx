import React from "react";
import whiteCar from "../assets/images/image8.jpg";
import oceanview from "../assets/images/image25.jpg";
import { FaPhone, FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

const carList = [
  {
    name: "Swift",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Ertiga",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Thar",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Venue",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "I10",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Verna",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Audi A4",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "BMW 5 Series",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Mercedes‑Benz",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Fortuner",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Creta",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Baleno",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "WagonR",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "MG Hector",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Alcazar",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Innova",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Hycross",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Innova Crysta",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "Kia",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "I20",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
  {
    name: "I10 Grand",
    image: whiteCar,
    Manual: "1100/-",
    Automatic: "1400/-",
    Fueltype: "Petrol/Diesel",
    Transmission: "Auto/Manual",
    Passengers: "5 Person",
    aosDelay: "0",
  },
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
          : "relative dark:bg-dark bg-gradient-to-b z-1 from-orange-50 to-white  pt-32 pb-10"
      }
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[270px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url(${oceanview})`,
            filter: "blur(0px)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>
        <div
          className={
            theme == "dark"
              ? "relative z-10 text-center py-12 px-4 max-w-6xl mx-auto"
              : "relative z-10 text-center py-12 px-4 max-w-6xl mx-auto"
          }
        >
          <h1 className="text-4xl sm:text-4xl text-orange-100 font-extrabold tracking-wide font-serif mb-4">
            All Luxury Car Rentals in Goa available
          </h1>
          <h2 className="text-1xl text-gray-50 mb-8 leading-relaxed">
            Experience the ultimate in comfort and style with our premium fleet.
          </h2>
          <a
            href="tel:+918104535322" // Replace with your booking page URL
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-500 shadow-md transition"
          >
            Call Now <FaPhone className="inline-block ml-2" />
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
            ? "dark:bg-black dark:text-white py-6 px-22 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10"
            : "py-6 px-22 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
            <div className="relative overflow-hidden">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-56 object-cover transition-transform duration-700 rounded-t-2xl hover:scale-110"
              />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-xl">
                ₹ {data.Manual}
              </span>
            </div>

            <div className="p-4">
              <h1
                className={
                  theme === "dark"
                    ? `text-white font-semibold text-xl mb-3`
                    : "text-orange-700 font-semibold text-xl mb-3"
                }
              >
                {data.name}
              </h1>

              <div className="grid grid-cols-2 gap-4 text-gray-700 text-base font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">⚙️</span>
                  <p
                    className={
                      theme === "dark" ? `text-gray-200` : "text-black"
                    }
                  >
                    Transmission: {data.Transmission}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">⛽</span>
                  <p
                    className={
                      theme === "dark" ? `text-gray-200` : "text-black"
                    }
                  >
                    Fuel: {data.Fueltype}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">🚗</span>
                  <p
                    className={
                      theme === "dark" ? `text-gray-200` : "text-black"
                    }
                  >
                    Manual: ₹{data.Manual}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">🔧</span>
                  <p
                    className={
                      theme === "dark" ? `text-gray-200` : "text-black"
                    }
                  >
                    Automatic: ₹{data.Automatic}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">👥</span>
                  <p
                    className={
                      theme === "dark" ? `text-gray-200` : "text-black"
                    }
                  >
                    Seats: {data.Passengers}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <p
                  className={theme === "dark" ? `text-gray-200` : "text-black"}
                >
                  ₹ {data.Manual} Day
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
