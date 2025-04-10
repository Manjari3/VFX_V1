"use client";

import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import bg from "../../../public/background/contact-background.png";

const services: string[] = [
  "2D & 3D Animation",
  "Digital Intermediate",
  "VFX",
  "Motion Graphics",
  "Virtual Reality (VR)",
  "Augmented Reality (AR)",
];

// Animation variant for service cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServicesPage(): JSX.Element {
  return (
    <>
      {/* 🔁 Background Image */}
      <Image
        src={bg}
        alt="Service background"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />

      <article className="relative w-full min-h-screen flex flex-col items-center justify-start py-8 space-y-10 px-4 text-white">
        {/* 🔠 Header */}
        <div className="text-center space-y-3 mt-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wider drop-shadow-md">
            OUR SERVICES
          </h2>
          <p className="text-sm sm:text-base font-light text-white/80">
            Digital post production
          </p>
        </div>

        {/* 🧩 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl py-6 text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex flex-col items-center space-y-4 bg-black/30 backdrop-blur-md rounded-xl p-6 shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              <Star className="text-accent w-6 h-6 animate-pulse" />
              <p className="text-white text-lg font-semibold tracking-wide uppercase">
                {service}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 📞 Footer Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 pb-20 px-2">
          {/* 📍 Contact Card */}
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2 flex items-center gap-2">
              <MapPin size={22} /> Contact Us
            </h3>
            <div className="space-y-3 pl-1 text-white/90">
              <p className="flex gap-2 items-start">
                <MapPin size={18} className="mt-1" />
                No.23A 2nd Floor, Abbusali Street,
                <br />
                Saligramam, Chennai - 600093
              </p>
              <p className="flex gap-2 items-center">
                <Phone size={18} />
                +91 9095623540
              </p>
              <p className="flex gap-2 items-center">
                <Mail size={18} />
                crayonvfx@gmail.com
              </p>
            </div>
          </div>

          {/* 👥 Clients Card with 7 Logos */}
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2 flex items-center gap-2">
              <Users size={22} /> Our Clients
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {[...Array(7)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-24 h-16 rounded-xl bg-white/10 p-2 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  <Image
                    src={`/clients/client${index + 1}.png`}
                    alt={`Client ${index + 1}`}
                    width={100}
                    height={50}
                    className="object-contain h-full w-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
