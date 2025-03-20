import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = ({ theme }) => {
  return (
    <section
      id="contact"
      className={
        theme == "dark"
          ? "py-28 bg-black text-white"
          : "py-28 bg-gradient-to-b from-orange-50 to-white text-gray-900"
      }
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="py-4 text-4xl font-extrabold mb-4 bg-orange-900 bg-clip-text text-transparent">
            Let's Craft Your Luxury Car Rental Experience
          </h2>
          <p
            className={
              theme == "dark"
                ? "text-gray-300 max-w-2xl mx-auto"
                : "text-gray-500 max-w-2xl mx-auto"
            }
          >
            We're passionate about creating seamless, high-end car rental
            experiences in Goa. Connect with us and let's make your journey
            unforgettable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={
              theme == "dark"
                ? "bg-black p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100"
                : "bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100"
            }
          >
            <h3
              className={
                theme == "dark"
                  ? "text-white text-3xl font-semibold mb-6 text-amber-600"
                  : "text-3xl font-semibold mb-6 text-amber-600"
              }
            >
              Get in Touch
            </h3>
            <div
              className={
                theme == "dark"
                  ? "space-y-4 text-gray-300"
                  : "space-y-4 text-gray-700"
              }
            >
              <div className="flex items-center gap-3">
                <Mail className="text-amber-500" />
                <span>contact@goacarrental.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-amber-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-amber-500" />
                <span>Goa, India</span>
              </div>
              <div
                className={
                  theme == "dark"
                    ? "flex gap-4 pt-4 text-gray-300"
                    : "flex gap-4 pt-4 text-gray-700"
                }
              >
                <a href="#" className="hover:text-amber-600">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-amber-600">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-amber-600">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={
              theme == "dark"
                ? "bg-black p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100"
                : "bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-gray-100"
            }
          >
            <h3 className="text-3xl font-semibold mb-6 text-amber-600">
              Send Us a Message
            </h3>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className={
                  theme == "dark"
                    ? "w-full p-4 bg-black placeholder-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                    : "w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                className={
                  theme == "dark"
                    ? "w-full p-4 bg-black placeholder-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                    : "w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                }
              />
              <input
                type="text"
                placeholder="Phone Number"
                className={
                  theme == "dark"
                    ? "w-full p-4 bg-black placeholder-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                    : "w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                }
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className={
                  theme == "dark"
                    ? "w-full p-4 bg-black placeholder-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                    : "w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                }
              ></textarea>
              <button
                type="submit"
                className={
                  theme == "dark"
                    ? "w-full p-4 bg-black placeholder-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                    : "w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none shadow-sm"
                }
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
        >
          <iframe
            title="Goa Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31457.682063206434!2d73.7429591!3d15.4909302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc025fbbd88a3%3A0xa183aa9b3aefbdf4!2sGoa!5e0!3m2!1sen!2sin!4v1710854541369!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-none w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
