import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Stars */}
      <div className="absolute inset-0">
        <div className="star animate-pulse-subtle h-2 w-2 left-50 top-40 opacity-70 duration-3000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 left-120 top-60 opacity-70 duration-3000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 left-10 top-100 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 left-80 bottom-30 opacity-65 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 left-140 bottom-80 opacity-65 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-60 top-20 opacity-55 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-40 top-80 opacity-55 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-140 top-50 opacity-55 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-20 bottom-20 opacity-65 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-180 top-10 opacity-75 duration-2000"></div>
        <div className="star animate-pulse-subtle h-2 w-2 right-160 bottom-40 opacity-85 duration-2000"></div>

        <div className="star animate-pulse-subtle h-1 w-1 left-20 top-20 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-8 top-60 opacity-95 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-70 top-90 opacity-75 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-100 top-20 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-180 top-50 opacity-95 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-10 bottom-20 opacity-95 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-30 bottom-50 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-150 bottom-10 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 left-180 bottom-60 opacity-85 duration-2000"></div>

        <div className="star animate-pulse-subtle h-1 w-1 right-10 top-40 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 right-90 top-60 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 right-70 bottom-60 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 right-10 bottom-60 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 right-100 bottom-20 opacity-85 duration-2000"></div>
        <div className="star animate-pulse-subtle h-1 w-1 right-110 bottom-80 opacity-85 duration-2000"></div>
      </div>

      {/* Meteors */}
      <div className="absolute inset-0">
        <div className="meteor animate-meteor w-50 h-1 left-60 top-10 duration-3000"></div>
        <div className="meteor animate-meteor w-50 h-1 left-110 top-100 duration-10000"></div>
        <div className="meteor animate-meteor w-50 h-1 right-100 top-90 duration-4000"></div>
        <div className="meteor animate-meteor w-50 h-1 right-10 top-20 duration-5000"></div>
        <div className="meteor animate-meteor w-50 h-1 right-10 bottom-50 duration-3000"></div>
        {/* <div className="meteor animate-meteor w-[120px] h-[4px] left-[50%] top-[10%] duration-[5s]"></div>
        <div className="meteor animate-meteor w-[90px] h-[3px] left-[80%] top-[15%] duration-[6s]"></div>
        <div className="meteor animate-meteor w-[110px] h-[3px] right-[20%] top-[12%] duration-[7s]"></div>
        <div className="meteor animate-meteor w-[130px] h-[4px] right-[50%] top-[18%] duration-[8s]"></div> */}
      </div>
    </div>
  );
};

export default Background;
