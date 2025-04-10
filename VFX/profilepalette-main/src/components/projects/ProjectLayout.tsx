import React from "react";
import { ProjectListType } from "@/types";

function ProjectLayout({ image }: ProjectListType) {
  const images = [
    "/images/img3.png",
    "/images/project2.png",
    "/images/project3.png",
    "/images/project4.png",
    "/images/project5.png",
    "/images/project6.png",
    "/images/project7.png",
    "/images/project8.png",
    "/images/project9.png",
  ];

  return (
    <div className="w-full px-4 py-8 space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg p-2"
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-[800px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectLayout;