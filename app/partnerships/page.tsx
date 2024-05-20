import React from "react";
import { Meteors } from "../components/ui/meteors";
import { CardBody, CardContainer } from "../components/ui/3d-card";

function Partnerships() {
  const partners = [
    {
      key: "1",
      number: "1",
      collaboration: "Khorfakkan University",
      entities: "private",
    },
    {
      key: "2",
      number: "2",
      collaboration: "Maritime Transport Academy",
      entities: "private",
    },
    {
      key: "3",
      number: "3",
      collaboration: "Bee'ah",
      entities: "semi-governmental",
    },
    {
      key: "4",
      number: "4",
      collaboration: "American University of Sharjah",
      entities: "private",
    },
    {
      key: "5",
      number: "5",
      collaboration: "Fishermen Associations",
      entities: "governmental",
    },
    {
      key: "6",
      number: "6",
      collaboration: "Aquarium",
      entities: "governmental",
    },
    { key: "7", number: "7", collaboration: "Evergreen", entities: "private" },
    {
      key: "8",
      number: "8",
      collaboration: "Fujairah Research Center",
      entities: "governmental",
    },
    {
      key: "9",
      number: "9",
      collaboration: "Omega Fish Farms",
      entities: "private",
    },
    {
      key: "10",
      number: "10",
      collaboration: "Fish Farm",
      entities: "private",
    },
    {
      key: "11",
      number: "11",
      collaboration: "AquaBridge",
      entities: "private",
    },
    {
      key: "12",
      number: "12",
      collaboration: "Abu Dhabi Environment Authority",
      entities: "governmental",
    },
    {
      key: "13",
      number: "13",
      collaboration: "SeaWorld Research Center",
      entities: "governmental",
    },
    {
      key: "14",
      number: "14",
      collaboration: "Climate Change and Environment Authority",
      entities: "federal",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-28  py-28">
      {partners.map((partner) => {
        return (
          <CardContainer
            key={partner.number}
            className="w-full h-full min-h-[200px] "
          >
            <CardBody className=" relative group/card h-full flex flex-col justify-center items-center">
              <MeteorCard
                number={partner.number}
                collaboration={partner.collaboration}
                entities={partner.entities}
              />
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
}

function MeteorCard({
  number,
  collaboration,
  entities,
}: {
  number: string;
  collaboration: string;
  entities: string;
}) {
  return (
    <div className=" w-full h-full mx-auto  relative max-w-xs flex justify-center items-center">
      <div className="absolute inset-0  h-full w-full bg-gradient-to-r from-AEGold-200 to-AEGold-500 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-AEGold-500 border border-AEGold-600 w-full  px-4 py-8 h-full overflow-hidden rounded-lg flex flex-col justify-end items-start">
        <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center mb-4 border-AEBlack-100 p-2 text-AE-Text-2xl font-semibold">
          {number}
        </div>

        <h1 className="font-bold text-AE-Text-xl text-AEBlack-50 relative z-50">
          {collaboration}
        </h1>

        <p className="font-normal text-AE-Text-sm text-AEBlack-100 relative z-50">
          {entities}
        </p>

        <Meteors number={20} />
      </div>
    </div>
  );
}

export default Partnerships;
