import Image from "next/image";
import React from "react";

const Hero = () => {
  const images = [
    "/images/fishes-1.jpg",
    "/images/home-1.jpg",
    "/images/home-2.jpg",
    "/images/fishes-2.jpg",
    "/images/home-3.jpg",
    "/images/fishes-3.jpg",
  ];
  return (
    <header className="bg-white grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 font-bold tracking-tighter text-4xl sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
          Department of Fisheries
        </h1>
        <p className="text-AEBlack-700 font-medium text-sm leading-[150%] sm:text-xl">
          To develop fisheries, empower fishermen, and enhance partnerships to
          achieve sustainable food security and economic growth.
        </p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          <button className="bg-AEGold-500 text-white px-6 py-3 rounded-md hover:bg-AEGold-400 transition-colors ease-in-out">
            Explore
          </button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover"
                    src={image}
                    alt={`Placeholder image ${index}`}
                    layout="fill"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.reverse().map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover"
                    src={image}
                    alt={`Placeholder image ${index}`}
                    layout="fill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
