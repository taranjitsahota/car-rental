import React, { useState, useEffect, useRef } from "react";
import darkthemeimg from "../assets/images/image1.jpg";
import whitethemeimg from "../assets/images/image21.jpg";
import whiteCar from "../assets/images/image3.webp";
import car2 from "../assets/images/image8.jpg";
import car3 from "../assets/images/image8.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import CountUp from "react-countup";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Home = ({ theme }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    // Get section position relative to viewport
    const rect = sectionRef.current.getBoundingClientRect();

    // Calculate cursor position relative to the section
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Dark effect lasts for 200ms
  };

  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "Prateek Srivastava",
      text: "Nice service with on-time pickup and delivery. Good customer support with friendly and very helpful staff. The car was also very smooth, and the packages are pocket-friendly. Overall an amazing experience. Would highly recommend 😊",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Roshan Raval",
      text: "The car delivery was done on time, and we were satisfied with the entire booking experience. We also got an instant refund, and the overall service was outstanding.",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Sanjib Sarkar",
      text: "Very good service. I never expected that I could get a car at 4:30 in the morning! Even they refunded the extra fuel amount I paid. Very transparent ❤",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "Ananya Iyer",
      text: "Superb service! The car was sanitized, and the process was hassle-free. The team was extremely professional and polite. Would definitely rent again!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Justin Rheo",
      text: "Loved the experience! The car was in top condition, and the support team was very responsive. Booking was quick and easy. Highly recommend!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Neha Kapoor",
      text: "Great service and very affordable pricing! The car was delivered clean and well-maintained. Perfect for a family trip. Keep up the good work!",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      name: "Harpreet Singh Gill",
      text: "Had an amazing road trip, all thanks to the hassle-free car rental. The staff was cooperative, and everything went smoothly.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
      name: "Sneha Rao",
      text: "Affordable rental with no hidden charges. Loved the experience, and their cars are well-maintained. Booking and refund were smooth as well.",
      rating: 3,
      photo: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Show 3 at a time
    slidesToScroll: 3, // Scroll 3 at a time
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 5000, // Auto slide every 3 seconds
    arrows: true, // Hide navigation arrows (optional)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
  ];

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 duration-300 overflow-hidden items-center justify-center">
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${
            theme === "dark" ? darkthemeimg : whitethemeimg
          })`,
        }}
      >
        {/* Blurred Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${
              theme === "dark" ? darkthemeimg : whitethemeimg
            })`,
            filter: "blur(0px)", // Apply blur here
            zIndex: -2, // Keep it behind everything
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none"></div>

        {/* Content (Text, Button) */}
        <div className="relative text-center z-10 p-8">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
            style={{
              background: "linear-gradient(90deg, #d1d5db, #ffffff, #9ca3af)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(2px 4px 6px rgba(255,255,255,0.2))",
            }}
          >
            Your Perfect Car Awaits
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Explore Goa with our reliable car rentals. Book now!
          </p>
          <div className="container flex items-center justify-center gap-4">
            <a
              href="tel:+918104535322"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaPhone className="text-white text-lg" />
              Call Now
            </a>
            <a
              href="https://wa.me/918104535322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 hover:cursor-pointer"
            >
              <FaWhatsapp className="text-white text-lg" />
              WhatsApp
            </a>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </section>

      {/* Featured Cars Section */}
      <section
        className={
          theme === "dark"
            ? `dark:bg-gray-900 text-gray-200 py-15 px-6`
            : "py-15 px-6 bg-gradient-to-b from-orange-50 to-white"
        }
      >
        <div className="container mx-auto">
          <h1
            className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-10"
            data-aos="fade-up"
          >
            Featured Cars
          </h1>

          <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-800 font-serif mb-4">
              Explore Our Luxury Collection
            </h2>
            <p
              className={
                theme == "dark"
                  ? `text-md text-gray-200 pb-10 leading-relaxed`
                  : `text-md text-gray-600 pb-10 leading-relaxed`
              }
            >
              Discover the perfect blend of style, cleanliness, comfort, and
              performance with our exclusive range of luxury cars in Goa.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
            data-aos="fade-up"
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
                    className="w-full h-44 object-cover transition-transform duration-700 rounded-t-2xl hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-xl">
                    ₹ {data.Manual}
                  </span>
                </div>

                <div className="p-6">
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
                      className={
                        theme === "dark" ? `text-gray-200` : "text-black"
                      }
                    >
                      ₹ {data.Manual} Day
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
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

          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate("/cars")}
              className="cursor-pointer px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-500 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:from-orange-500 hover:to-orange-600"
            >
              Explore More Cars
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <section
        ref={sectionRef}
        className={
          theme === "dark"
            ? `relative dark:bg-gray-900 dark:text-gray-200 py-20 px-6 overflow-hidden`
            : `relative bg-gradient-to-b from-orange-50 to-white py-20 px-6 overflow-hidden`
        }
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* Cursor Circle */}
        <div
          className={`absolute w-22 h-22 rounded-full pointer-events-none transition-transform duration-75 ${
            isClicked
              ? "bg-orange-600 opacity-60 scale-110"
              : "bg-orange-400 opacity-30"
          }`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div className="container mx-auto text-center">
          <h2
            className={
              theme === "dark"
                ? `text-4xl font-extrabold text-white mb-8`
                : "text-4xl font-extrabold text-gray-900 dark:text-white mb-8"
            }
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <p
            className={
              theme === "dark"
                ? `text-white text-lg max-w-2xl mx-auto mb-6`
                : "text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-6"
            }
            data-aos="fade-up"
          >
            Experience the best car rentals in Goa with our top-quality vehicles
            and competitive pricing. Give us a call 📞 or WhatsApp
            <span className="inline-flex items-center mx-1">
              <FaWhatsapp className="text-green-500 text-base" />
            </span>
            for a seamless booking process.
          </p>

          {/* Features Section */}
          <div
            className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-left"
            data-aos="fade-up"
          >
            {/* Feature 1 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">🚗</span>
              <div>
                <h3
                  className={
                    theme === "dark"
                      ? `text-white text-xl font-semibold`
                      : "text-black text-xl font-semibold"
                  }
                >
                  Wide Vehicle Selection
                </h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  Choose from hatchbacks, sedans, SUVs & luxury cars.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">💰</span>
              <div>
                <h3 className="text-xl font-semibold">Best Pricing</h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  No hidden fees—transparent & affordable rates.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">🏝️</span>
              <div>
                <h3 className="text-xl font-semibold">Perfect for Goa Trips</h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  Hassle-free rentals with flexible return options.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">📞</span>
              <div>
                <h3 className="text-xl font-semibold">24/7 Support</h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  Our team is always available to assist you.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">🛡️</span>
              <div>
                <h3 className="text-xl font-semibold">Safe & Insured</h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  Fully maintained, sanitized & insured vehicles.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div
              className={
                theme === "dark"
                  ? `flex items-center space-x-4 p-5 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-white`
                  : "flex items-center space-x-4 p-5 bg-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-black"
              }
            >
              <span className="text-orange-500 text-3xl">⏳</span>
              <div>
                <h3 className="text-xl font-semibold">Instant Booking</h3>
                <p
                  className={
                    theme === "dark"
                      ? `text-white text-sm`
                      : "text-black  text-sm"
                  }
                >
                  Get your ride confirmed in minutes!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="cursor-pointer mt-10 bg-orange-500 hover:bg-orange-700 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Book Your Ride Now
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </section>

      <section
        className={
          theme === "dark"
            ? `py-20 px-6 dark:bg-gray-900`
            : `py-20 px-6 bg-gradient-to-b from-orange-50 to-white overflow-hidden`
        }
      >
        {/* Glowing Circle Decoration */}
        {/* <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500 opacity-20 blur-3xl rounded-full"></div> */}

        <div className="container mx-auto text-center relative z-10">
          <h2
            className={
              theme == "dark"
                ? `text-4xl font-extrabold text-white mb-12`
                : "text-4xl font-extrabold text-gray-900 dark:text-white mb-12"
            }
            data-aos="fade-up"
          >
            ⭐ What Our Customers Say ⭐
          </h2>

          <div className="container mx-auto max-w-6xl mx-auto px-5 py-5">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div
                    className={
                      theme == "dark"
                        ? "bg-gray-800 shadow-2xl rounded-xl p-8 flex flex-col justify-between h-72 transition-transform transform hover:scale-105 duration-300"
                        : "bg-white/50 shadow-2xl rounded-xl p-8 flex flex-col justify-between h-72 transition-transform transform hover:scale-105 duration-300"
                    }
                    data-aos="zoom-in"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mb-4 border-2 border-orange-400 shadow-md"
                      />
                      <h3
                        className={
                          theme == "dark"
                            ? "text-xl font-semibold text-white"
                            : "text-xl font-semibold text-gray-900"
                        }
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        className={
                          theme == "dark"
                            ? "text-gray-400 italic leading-relaxed flex-1"
                            : "text-gray-700 italic leading-relaxed flex-1"
                        }
                      >
                        "{testimonial.text}"
                      </p>
                      <div className="flex justify-center mt-4 text-yellow-500">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className={
          theme === "dark"
            ? `text-center text-white shadow-lg relative py-20 px-6 dark:bg-gray-900`
            : `bg-gradient-to-b from-orange-50 to-white py-20 px-6 text-center text-black shadow-lg relative`
        }
      >
        <div className="container mx-auto">
          {/* Headline */}
          <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
            Explore Goa in Style – Rent Your Dream Car Today!
          </h2>

          {/* Subtext */}
          <p className="text-lg text-black-200 mb-6">
            Trusted by{" "}
            <span
              className={
                theme === "dark"
                  ? `font-bold text-white`
                  : `font-bold text-black`
              }
            >
              <CountUp
                start={5000}
                end={10000}
                duration={3}
                separator=","
                enableScrollSpy
              />
              +
            </span>{" "}
            happy customers across Goa!
          </p>

          {/* Cities Covered */}
          <div
            className={`${
              theme === "dark"
                ? "container mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 border border-gray-700"
                : "container mx-auto bg-white text-orange-900 border border-orange-200"
            } p-10 rounded-3xl shadow-xl max-w-4xl mx-auto mb-10 transition-transform duration-500 hover:scale-[1.02]`}
          >
            <h3
              className={
                theme == "dark"
                  ? "text-3xl font-bold mb-6 tracking-wide text-center text-white"
                  : "text-3xl font-bold mb-6 tracking-wide text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-400"
              }
            >
              Available in All Major Goa Locations
            </h3>
            <ul
              className={
                theme == "dark"
                  ? "grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-100 font-medium leading-relaxed text-center"
                  : "grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700 font-medium leading-relaxed text-center"
              }
            >
              {[
                "Car Rental in Panaji",
                "Car Rental in Margao",
                "Car Rental  Vasco da Gama",
                "Car Rental in Mapusa",
                "Car Rental in Calangute",
                "Car Rental in Candolim",
                "Car Rental in Baga",
                "Car Rental in Anjuna",
                "Car Rental in Morjim",
                "Car Rental in Arambol",
                "Car Rental in Colva",
                "Car Rental in Palolem",
                "Car Rental in Benaulim",
                "Car Rental in Assagao",
                "Car Rental in Ponda",
                "Car Rental in Siolim",
                "Car Rental in Sinquerim",
                "Car Rental in Dona Paula",
                "Car Rental in Goa",
                "Car Rental in South Goa",
                "Car Rental in North Goa",
              ].map((place) => (
                <li
                  key={place}
                  className="hover:text-yellow-500 transition-all duration-300 tracking-wide text-xl"
                >
                  {place}
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* <button className="bg-white text-orange-600 py-3 px-8 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
              🚗 Book Now
            </button> */}
            <a
              href="tel:+919876543210"
              className={
                theme === "dark"
                  ? `bg-gray-800 text-white py-3 px-10 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300`
                  : "bg-orange-400 text-white py-3 px-10 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
              }
            >
              📞 Call Us: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* <div className="container min-h-[620px] flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center p-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <div className="relative">
              <img
                src={theme === "dark" ? darkthemeimg : whitethemeimg}
                alt="img"
                className="sm:scale-125 max-h-[400px] rounded-lg"
              />
              <div
                className={`absolute inset-0 bg-black ${
                  theme === "dark" ? "opacity-30" : "opacity-0"
                } transition duration-300`}
              ></div>
            </div>
          </div>
          <div className="space-y-6 order-2 sm:order-1 text-center sm:text-left">
            <p
              data-aos="fade-up"
              className="text-orange-400 text-3xl font-serif"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif leading-tight"
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md bg-orange-500 hover:bg-orange-600 transition duration-200 py-3 px-8 text-white font-semibold shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
