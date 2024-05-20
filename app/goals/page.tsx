import Image from "next/image";
import React from "react";
import { Meteors } from "../components/ui/meteors";
import { CardBody, CardContainer } from "../components/ui/3d-card";

const Goals = () => {
  return (
    <>
      <section className=" px-[5%] py-16 md:py-24 lg:py-28 flex justify-center items-center">
        <div className="container flex flex-col items-start">
          <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4 text-AEGold-500 text-AE-Text-base">
                Sharjah Fish Resource Authority (2024-2028)
              </p>
              <h2 className="text-AE-Text-H2 font-bold md:text-AE-Text-H1 lg:text-AE-Text-Display text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
                Strategic Goals
              </h2>
            </div>
            <p className="md:text-AE-Text-base text-AEBlack-800 dark:text-AEBlack-200">
              The Strategic Goals of the Sharjah Fish Resource Authority
              (2024-2028) aim to foster sustainable fisheries, empower fishermen
              with modern techniques, and create robust industry infrastructure.
              The Authority will optimize systems, innovate environments, and
              harness human talent, striving for self-sufficiency through
              sustainable resource management and marine preservation, ensuring
              food security for the emirate.
            </p>
          </div>
          <div className="w-full h-96  mb-12 md:mb-18 lg:mb-20 rounded-lg relative">
            <Image
              src="/images/home-1.jpg"
              alt="Goals Display Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {goals.map((goal) => {
              return (
                <div key={goal.title}>
                  <div className="mb-5 md:mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      className="fill-AEGold-500"
                    >
                      <path d={goal.svgPath}></path>
                    </svg>
                  </div>
                  <h3 className="mb-5 text-AE-Text-2xl font-bold md:mb-6 md:text-AE-Text-3xl md:leading-[1.3] lg:text-AE-Text-H3 tracking-tighter text-AEBlack-900 dark:text-AEBlack-100">
                    {goal.title}
                  </h3>
                  <p className="text-AEBlack-900 dark:text-AEBlack-100">
                    {goal.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 flex justify-center items-center">
        <div className="container ">
          <div className="mx-auto mb-12 w-full max-w-4xl text-left md:text-center md:mb-18 lg:mb-20 ">
            <p className="mb-3 font-semibold md:mb-4 text-AEGold-500 text-AE-Text-base">
              Sharjah Fish Resource Authority (2024-2028)
            </p>
            <h2 className="text-AE-Text-H4 mb-4 font-bold md:text-AE-Text-H3 lg:text-AE-Text-H2 text-AEBlack-950 tracking-tighter dark:text-AEBlack-50">
              Sustainable Development Goals{" "}
            </h2>
            <p className="text-AE-Text-base md:max-w-xl mx-auto text-AEBlack-800 dark:text-AEBlack-200">
              In line with UAE Vision 2021, the Sharjah Fish Resource Authority,
              in collaboration with federal and local specialized entities,
              works to achieve goals 3, 4, 8, 9, 14, and 17 of the Sustainable
              Development Goals by implementing several projects aimed at
              preserving marine ecosystems and natural resources and ensuring
              their sustainability
            </p>
          </div>
          <DevelopmentGoals />
        </div>
      </section>
    </>
  );
};

function DevelopmentGoals() {
  const developmentGoals = [
    { numeric: 3, number: "Three", value: "Good Health and Well-being." },
    { numeric: 4, number: "Four", value: "Quality Education." },
    { numeric: 8, number: "Eight", value: "Decent Work and Economic Growth." },
    {
      numeric: 9,
      number: "Nine",
      value: "Industry, Innovation, and Infrastructure..",
    },
    { numeric: 14, number: "Fourteen", value: "Life Below Water." },
    { numeric: 17, number: "Seventeen", value: "Partnerships for the Goals." },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-28 ">
      {developmentGoals.map((developmentGoal) => {
        return (
          <CardContainer key={developmentGoal.number} className="w-full">
            <CardBody className=" relative group/card  h-full flex flex-col justify-center items-center">
              <MeteorCard
                numeric={developmentGoal.numeric}
                number={developmentGoal.number}
                value={developmentGoal.value}
              />
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
}

function MeteorCard({
  numeric,
  number,
  value,
}: {
  numeric: number;
  number: string;
  value: string;
}) {
  return (
    <div className=" w-full mx-auto  relative max-w-xs flex justify-center items-center">
      <div className="absolute inset-0  h-full w-full bg-gradient-to-r from-AEGold-200 to-AEGold-500 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-AEGold-500 border border-AEGold-600 w-full  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 border-AEBlack-100 p-2 text-AE-Text-2xl font-semibold">
          {numeric}
        </div>

        <h1 className="font-bold text-AE-Text-xl text-AEBlack-50 relative z-50">
          Goal {number}
        </h1>

        <p className="font-normal text-AE-Text-sm text-AEBlack-100 relative z-50">
          {value}
        </p>

        <Meteors number={20} />
      </div>
    </div>
  );
}

export default Goals;

const goals = [
  {
    title: "Sustainable Fisheries",
    description:
      "Achieve sustainable development of fisheries and strategic partnerships, and empower fishermen with modern techniques according to best practices and distinguished services, contributing to the creation of a supportive infrastructure for leadership in fisheries in the emirate",
    svgPath: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z`,
  },
  {
    title: "Process Optimization",
    description:
      "Improve internal systems, processes, and technical procedures according to best practices and monitor and control their quality and efficiency.",
    svgPath: `M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z`,
  },
  {
    title: "Innovative Environments",
    description:
      "Create innovative and high-quality environments, utilizing resources and investing in human talents and competencies",
    svgPath: `M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z`,
  },
  {
    title: "Human Resource Development",
    description:
      "Employ and enhance the capabilities of human resources and work teams.",
    svgPath: `M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z`,
  },
  {
    title: "Process Strengthening",
    description: "Strengthen and develop internal processes.",
    svgPath: `M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z`,
  },
  {
    title: "Financial Efficiency",
    description:
      "Sustain financial resources, manage assets, and enhance financial efficiency and effectiveness.",
    svgPath: `M200,168a48.05,48.05,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.05,48.05,0,0,1-48-48,8,8,0,0,1,16,0,32,32,0,0,0,32,32h48a32,32,0,0,0,0-64H112a48,48,0,0,1,0-96h8V24a8,8,0,0,1,16,0V40h8a48.05,48.05,0,0,1,48,48,8,8,0,0,1-16,0,32,32,0,0,0-32-32H112a32,32,0,0,0,0,64h40A48.05,48.05,0,0,1,200,168Z`,
  },
  {
    title: "Self-Sufficiency",
    description:
      "Achieve the Authority’s self-sufficiency by utilizing and investing in fisheries resources and preserving the marine environment to provide sustainable food security in the emirate.",
    svgPath: `M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z`,
  },
];
