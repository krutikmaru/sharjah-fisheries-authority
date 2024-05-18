"use client";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  return (
    <div className="bg-white dark:bg-AEBlack-950">
      <Management />
      <Specializations />
    </div>
  );
}

export default page;

function Management() {
  return (
    <section className="px-[5%] pt-16 md:pt-24 lg:pt-28 flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-AEGold-500 text-AE-Text-base">
              Senior Management of the Sharjah Fisheries Authority
            </p>
            <h2 className="text-AE-Text-H3 mb-4 font-bold md:text-AE-Text-H2 lg:text-AE-Text-H1 text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
              His Excellency \ Ali Ahmed Ali Abu Ghazeen
            </h2>
            <p className="md:text-AE-Text-base text-AEBlack-800 dark:text-AEBlack-200">
              Member of the Executive Council, Chairman of the Sharjah Fisheries
              Authority. His responsibilities include developing and
              implementing local strategies and plans aimed at enhancing food
              and water security for the Emirate of Sharjah and preserving and
              sustaining the marine environment.
            </p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <button className="bg-AEGold-500 text-white px-6 py-3 rounded-md hover:bg-AEGold-400 transition-colors ease-in-out">
                Know what we do
              </button>
            </div>
          </div>
          <div className="w-full h-96 bg-AEBlack-100 dark:bg-AEBlack-900 mb-12 md:mb-18 lg:mb-20 rounded-lg relative">
            <Image
              src="/images/about/Ali-Ahmed-Ali-Abu-Ghazeen.png"
              alt="Goals Display Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Specializations = () => {
  const specializations = [
    {
      title: "Policy Development",
      description:
        "Develop general policies and strategic plans for the authority in the emirate and present them to the Executive Council for appropriate decision.",
    },
    {
      title: "Legislation Proposals",
      description:
        "Propose necessary legislation and regulations related to the Authority’s work and present them to the Executive Council for appropriate decisions.",
    },
    {
      title: "Association Oversight",
      description:
        "Oversee fishermen's associations and monitor fishing activities in the emirate.",
    },
    {
      title: "Fisheries Development",
      description:
        "Work on developing fisheries in collaboration with fishermen's associations and relevant authorities.",
    },
    {
      title: "Issue Research & Solutions",
      description:
        "Research, study, and propose solutions to any issues related to fisheries.",
    },
    {
      title: "Awareness Campaigns",
      description:
        "Raise awareness of the importance of preserving fisheries through available means and coordinate with relevant authorities in all matters related to fisheries.",
    },
    {
      title: "Contract Management",
      description:
        "Enter into contracts, agreements, and memorandums of understanding and partnerships after approval by the Executive Council.",
    },
    {
      title: "Support & Collaboration",
      description:
        "Seek administrative and technical support from specialized entities, and consult experts and specialists in all matters related to its work, and collaborate with other entities in matters falling within its objectives and specializations.",
    },
    {
      title: "Emirate Representation",
      description:
        "Represent the emirate in all local, regional, and international conferences and meetings.",
    },
    {
      title: "Maritime Participation",
      description:
        "Participate in all maritime activities and festivals within and outside the emirate.",
    },
    {
      title: "Other Specializations",
      description:
        "Undertake any other specializations assigned by the ruler or the Executive Council.",
    },
  ];

  return (
    <section className="px-[5%] pb-16 flex justify-center items-center">
      <div className="container mx-auto w-full max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20 text-left md:text-center">
          <h3 className="text-AE-Text-H4 mb-4 font-bold md:text-AE-Text-H3 lg:text-AE-Text-H1 text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
            About
          </h3>

          <p className="mb-3 font-semibold md:mb-4 text-AEGold-500 text-AE-Text-base">
            Sharjah Fisheries Authority specializations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          {specializations.map((specialization) => {
            return (
              <div key={specialization.title}>
                <h3 className="mb-5 text-AE-Text-2xl font-bold md:mb-6 md:text-AE-Text-3xl md:leading-[1.3] lg:text-AE-Text-H3 tracking-tighter text-AEBlack-900 dark:text-AEBlack-100">
                  {specialization.title}
                </h3>
                <p className="text-AEBlack-900 dark:text-AEBlack-100">
                  {specialization.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            reach out for personalized assistance to know more.
          </p>
          <div className="mt-6 md:mt-8">
            <button className="bg-AEGold-500 text-white px-6 py-3 rounded-md hover:bg-AEGold-400 transition-colors ease-in-out">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
