import React from "react";
import CarPng from "../assets/images/aboutus.jpg";
import oceanview from "../assets/images/image27.jpg";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import {
  Phone,
} from "lucide-react";

const About = ({ theme }) => {
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-orange-100 font-extrabold tracking-wide font-serif py-4 sm:py-4 mb-4 sm:mb-10 leading-tight">
            Feel your journey with RS Goa Car Rentals!
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-50 mb-6 sm:mb-8 leading-relaxed">
            Self Drive
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-50 mb-6 sm:mb-8 leading-relaxed">
            Car Rental in Goa
          </h2>
          <a
            href="tel:+918104535322"
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-orange-600 hover:to-orange-500 shadow-md transition"
          >
         <Phone className="inline-block ml-2" />   Call Now 
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="py-12 px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <img
            src={CarPng}
            alt="Luxury Car Goa Rentals"
            className="sm:scale-105 sm:-translate-x-4 max-h-[550px] drop-shadow-2xl rounded-3xl border-4 border-[#D4AF37] shadow-gold-500/40 hover:scale-110 transition-transform duration-500"
          />
          {/* </div> */}

          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="sm:p-10 space-y-6"
          >
            <h1 className="text-4xl font-extrabold font-serif text-orange-700 mb-12 animate-fadeInUp leading-tight">
              A Royal Journey Awaits
            </h1>

            <p
              className={
                theme == "dark"
                  ? "text-gray-100 tracking-wider italic"
                  : "text-gray-700 tracking-wider text-gray-700 italic"
              }
            >
              Step into the realm of grandeur in Goa. Our exclusive collection
              of luxury cars isn't just transportation — it's an opulent
              lifestyle statement.
            </p>

            <p
              className={
                theme == "dark"
                  ? "text-gray-100 tracking-wider text-1xl italic"
                  : "tracking-wider text-gray-700 text-1xl italic"
              }
            >
              Enjoy personalized services curated for the elite, with every
              detail meticulously crafted for your indulgence.
            </p>

            <ul
              className={
                theme == "dark"
                  ? "text-gray-100 list-disc pl-8 text-sm space-y-5"
                  : "text-gray-700 list-disc pl-8 text-gray-900 text-sm space-y-5"
              }
            >
              <li>
                🌟 Ultra-Premium Fleet: Rolls Royce Ghost, Bentley Mulsanne,
                Lamborghini Urus, Mercedes Maybach
              </li>
              <li>🌟 Chauffeurs in Bespoke Suits & White Gloves</li>
              <li>
                🌟 Luxury Onboard: Fresh orchids, premium champagne, and custom
                playlists
              </li>
              <li>🌟 Private Airport Lounges & Helipad Transfers</li>
              <li>
                🌟 24/7 Dedicated Lifestyle Concierge for reservations and
                experiences
              </li>
            </ul>
            <div className="relative z-10 text-center py-10 px-4 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+918828955068"
                className="flex items-center justify-center w-64 sm:w-72 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-2 py-1 rounded-full shadow-gold-400/50 shadow-2xl hover:scale-105 transition-all text-lg font-semibold tracking-wider border border-[#BFA046] hover:shadow-gold-500"
              >
                Call us +918828955068{" "}
                <FaPhone className="inline-block ml-2 text-xl" />
              </a>
              <div
                className={
                  theme === "dark"
                    ? "underline text-white text-lg font-bold"
                    : "underline text-gray-900 text-lg font-bold"
                }
              >
                OR
              </div>
              <a
                href="https://wa.me/918104535322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-64 sm:w-72 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full shadow-gold-400/50 shadow-2xl hover:scale-105 transition-all text-lg font-semibold tracking-wider border border-[#BFA046] hover:shadow-gold-500"
              >
                WhatsApp +918828955068 <FaWhatsapp className="inline-block ml-2 text-xl" />
              </a>
            </div>

            {/* <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-4 rounded-full shadow-gold-400/50 shadow-2xl hover:scale-110 transition-all text-1xl font-extrabold tracking-wider border border-[#BFA046] hover:shadow-gold-500">
            Call Now
            +918828955068
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
