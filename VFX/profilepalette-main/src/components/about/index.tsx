/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base  ">
          Crayon Media is a digital post production offers the entire range of digital services including VFX,Poster Design, Digital Intermediate,3D & 2D Animation,Motion graphics,Film ads
We got a BEST DI award from 3rd international short film festival pune 2018..
            <p className="font-semibold">
              My work and project tell me about more. 🧙‍♂️
            </p>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
           CEO / VFX SUPERVISOR
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        
 </div><br>
 </br>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* 📞 Contact Info (Left) */}
  <ItemLayout className={"col-span-1 !p-4"}>
    <div className="text-white text-base md:text-lg leading-relaxed space-y-2">
      <h2 className="text-xl font-bold mb-2">📍 Contact</h2>
      <p>No. 23A, 2nd Floor,<br />Abbusali Street, Saligramam,<br />Chennai - 600093</p>
      <p>📱 <strong>Mobile:</strong> +91 90956 23540</p>
      <p>📧 <strong>Email:</strong> <a href="mailto:crayonvfx@gmail.com" className="text-blue-400 hover:underline">crayonvfx@gmail.com</a></p>
    </div>
  </ItemLayout>

  {/* 🤝 Client Logos (Right) */}
  <ItemLayout className={"col-span-1 grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center"}>
    <img className="w-32 h-auto" src="/images/Untitled.png" alt="Client 1" loading="lazy" />
    <img className="w-32 h-auto" src="/images/client2.png" alt="Client 2" loading="lazy" />
    <img className="w-32 h-auto" src="/images/client3.png" alt="Client 3" loading="lazy" />
    <img className="w-32 h-auto" src="/images/client4.png" alt="Client 4" loading="lazy" />
    <img className="w-32 h-auto" src="/images/client5.png" alt="Client 5" loading="lazy" />
    <img className="w-32 h-auto" src="/images/client6.png" alt="Client 6" loading="lazy" />
  </ItemLayout>
</div>

     
    </section>
  );
};

export default AboutDetails;