import React from "react";
import Piechart from "./piechart";
function Statistics() {
  return (
    <div className="pt-3">
      <div className="bg-white h-[670px] min-w-[1329px]">
        <div className="flex flex-row-reverse justify-between px-2 pt-3">
          <div className="relative inline-block text-left">
            <select className="block w-full px-3 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500">
              <option value="en">ENG</option>
              <option value="fr">FR</option>
            </select>
          </div>
          <div>
            <p className="font-thin text-gray-500 ml-3">Date joined: February 10, 2023</p>
          </div>
        </div>
        <div className="p-5 w-[850px] mt-10 bg-[#2057A5] bg-opacity-5 m-auto rounded-xl">
          <div className="grid grid-cols-4 gap-11 max-w-screen-md w-full">
            {/* Total Football Clubs */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-48">
              <i class="bx bx-money text-3xl text-[#9747FF] bg-[#2057A5] px-4 py-3 bg-opacity-5 rounded-full"></i>
              <span className="text-xl font-bold mb-2">6</span>
              <span className="text-gray-500 text-center">
                Total Football Clubs
              </span>
            </div>

            {/* Registered Users */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-48">
              <i class="bx bxs-award text-3xl text-[#0FA958] py-3 px-4 rounded-full bg-[#2057A5] bg-opacity-5"></i>

              <span className="text-xl font-bold mb-2">2.2 M</span>
              <span className="text-gray-500 text-center">
                Registered Users
              </span>
            </div>

            {/* Male Members */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-48">
              <i class="bx bx-group text-3xl text-[#F24E1E] py-3 px-4 rounded-full bg-[#2057A5] bg-opacity-5"></i>

              <span className="text-xl font-bold mb-2">75%</span>
              <span className="text-gray-500 text-center">Male Members</span>
            </div>

            {/* Female Members */}
            <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-48">
              <i class="bx bx-user text-xl text-[#D99BFF] py-4 px-5 rounded-full bg-[#2057A5] bg-opacity-5"></i>

              <span className="text-xl font-bold mb-2">25%</span>
              <span className="text-gray-500 text-center">Female Members</span>
            </div>
          </div>
        </div>
        <div className="w-fit ml-60 mt-16 border-2 rounded-2xl py-5 px-4 border-dashed">
        <Piechart/>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
