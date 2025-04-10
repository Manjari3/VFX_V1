import Image from "next/image";
import bg from "../../../public/background/about-background.png";
import founder from "../../../public/images/img1.png"; // ✅ Import founder image
import AboutDetails from "@/components/about";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* ✅ Founder Image Section */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 flex items-center justify-center">
        <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <Image
            src={founder}
            alt="Founder Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <br></br><br></br>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] sm:top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            R.MAHENDIRAN
          </h1>
          <p className="font-light text-foreground text-lg">
            Scroll down to know more about me
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}