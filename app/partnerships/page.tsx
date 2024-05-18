import React from "react";

function Partnerships() {
  const rows = [
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
    <div className="bg-white dark:bg-AEBlack-950 py-10 px-12 md:px-24 overflow-scroll">
      <table className="table w-full  rounded-lg overflow-scroll">
        <thead>
          <tr>
            <th className="text-left p-5 text-AEGold-500">Number</th>
            <th className="text-left p-5 text-AEGold-500">Collaboration</th>
            <th className="text-left p-5 text-AEGold-500">Entities</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <tr
              className="dark:text-AEBlack-200 border-b-1 border-AEBlack-200 dark:border-AEBlack-700 hover:bg-AEBlack-50 dark:hover:bg-AEBlack-900"
              key={item.key}
            >
              <td className="px-5 py-3">{item.number}</td>
              <td className="px-5 py-3">{item.collaboration}</td>
              <td className="px-5 py-3">{item.entities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Partnerships;
