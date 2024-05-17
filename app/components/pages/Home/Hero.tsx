import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-screen min-h-[92vh] bg-white overflow-hidden flex justify-center items-center relative">
      <div className="absolute px-10 z-10 w-full md:w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto flex flex-col items-end justify-center">
        <div className="flex flex-col space-y-5 items-center ">
          <h1 className="text-4xl text-center font-bold tracking-tighter sm:text-8xl">
            Department of Fisheries
          </h1>
          <p className="text-AEBlack-700 text-center font-medium text-sm leading-[150%] sm:text-xl">
            To develop fisheries, empower fishermen, and enhance partnerships to
            achieve sustainable food security and economic growth.
          </p>
          <button className="bg-AEGold-500 text-white px-6 py-3 rounded-md hover:bg-AEGold-400 transition-colors ease-in-out">
            Explore
          </button>
        </div>
      </div>
      <div>
        <div className="w-[140px] h-[200px] md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-AEBlack-100 rounded-lg absolute  -left-1 top-80 md:-left-10 md:top-32 lg:-left-10 lg:top-32 border-5 border-AEGold-500">
          <Image layout="fill" src={"/images/fishes-1.jpg"} alt="Fishes" />
        </div>

        <div className="w-[100px] h-[200px] md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-AEBlack-100 rounded-lg absolute  -right-1 top-20 md:-right-24 md:top-20 lg:-right-24 lg:top-20 border-5 border-AEGold-500">
          <Image layout="fill" src={"/images/fishes-2.jpg"} alt="Fishes" />
        </div>
        {/* <Image
          width={500}
          height={300}
          src={"/images/fishes-3.jpg"}
          alt="Fishes"
          className="bg-AEBlack-100 rounded-lg absolute left-1/2 -translate-x-1/2 -bottom-20 border-5 border-AEGold-500"
        /> */}
      </div>
    </div>
  );
}

export default Hero;
