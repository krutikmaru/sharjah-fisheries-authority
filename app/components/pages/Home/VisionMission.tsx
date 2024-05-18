import React from "react";

function VisionMission() {
  return (
    <div className="min-h-screen md:h-screen w-screen bg-white dark:bg-AEBlack-950 flex flex-col justify-center items-center space-x-0 space-y-4 md:space-x-4 md:space-y-0 py-20 px-10 lg:px-20 md:flex-row">
      <div className="w-full h-screen md:w-1/2 md:h-full p-10 rounded-md border-2 border-AEBlack-100 dark:border-AEBlack-800 relative overflow-hidden flex flex-col items-start justify-start space-y-2">
        <h1 className="text-AEGold-500 text-5xl md:text-7xl font-semibold tracking-tighter">
          Our Vision
        </h1>
        <p className="text-AEBlack-700 dark:text-AEBlack-500 text-left font-medium text-sm leading-[150%] sm:text-base">
          Leading in the fields of fisheries locally.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
          className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-[400px] z-10 fill-AEGold-300 dark:fill-AEBlack-800"
        >
          <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 dark:bg-AEBlack-100 bg-AEGold-500 opacity-35 dark:opacity-10 blur-3xl w-full h-40 rounded-full"></div>
      </div>
      <div className="w-full h-screen md:w-1/2 md:h-full  p-10 rounded-md border-2 border-AEBlack-100 dark:border-AEBlack-800 relative overflow-hidden flex flex-col items-start justify-start space-y-2">
        <h1 className="text-AEGold-500 text-5xl md:text-7xl font-semibold tracking-tighter">
          Our Mission
        </h1>
        <p className="text-AEBlack-700 dark:text-AEBlack-500 text-left font-medium text-sm leading-[150%] sm:text-base">
          To develop fisheries, empower fishermen, and enhance partnerships to
          achieve sustainable food security and economic growth.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
          className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-[400px] z-10 fill-AEGold-300 dark:fill-AEBlack-800"
        >
          <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
        </svg>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 dark:bg-AEBlack-100 bg-AEGold-500 opacity-35 dark:opacity-10 blur-3xl w-full h-40 rounded-full"></div>
      </div>
    </div>
  );
}

export default VisionMission;
