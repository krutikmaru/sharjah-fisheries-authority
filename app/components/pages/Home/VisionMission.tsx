import React from "react";

function VisionMission() {
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center space-x-4 p-20">
      <div className="w-1/2 h-full  p-10 rounded-md border-2 border-AEBlack-100 relative overflow-hidden flex flex-col items-start justify-start space-y-2">
        <h1 className="text-AEGold-500 text-7xl font-semibold tracking-tighter">
          Our Vision
        </h1>
        <p className="text-AEBlack-700 text-left font-medium text-sm leading-[150%] sm:text-base">
          Leading in the fields of fisheries locally.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
          className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-[400px] z-10 fill-AEGold-400"
        >
          <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-AEGold-500 opacity-25 blur-3xl w-full h-40"></div>
      </div>
      <div className="w-1/2 h-full  p-10 rounded-md border-2 border-AEBlack-100 relative overflow-hidden flex flex-col items-start justify-start space-y-2">
        <h1 className="text-AEGold-500 text-7xl font-semibold tracking-tighter">
          Our Mission
        </h1>
        <p className="text-AEBlack-700 text-left font-medium text-sm leading-[150%] sm:text-base">
          To develop fisheries, empower fishermen, and enhance partnerships to
          achieve sustainable food security and economic growth.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
          className="absolute left-1/2 -translate-x-1/2 -bottom-32 w-[400px] z-10 fill-AEGold-400"
        >
          <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-AEGold-500 opacity-25 blur-3xl w-full h-40"></div>
      </div>
    </div>
  );
}

export default VisionMission;
