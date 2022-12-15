import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";

const ECommerce = () => {
  return (
    <div className="w-full">
      <div className="flex gap-10 flex-wrap">
        <div className="bg-white dark:text-gray-200  dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updated</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={"#404041"}
                  id={"line-sparkline"}
                  type={"Line"}
                  height={"80px"}
                  width={"250px"}
                  data={SparklineAreaData}
                  color={"#404041"}
                />
              </div>
              <div className="mt-10">
                <Button
                  color={"white"}
                  bgColor={"#404041"}
                  text={"Download Report"}
                  borderRadius={"10px"}
                />
              </div>
            </div>
            <div>
              <Stacked width={"320px"} height={"360px"} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex m-3 flex-wrap justify-between items-center gap-2 w-full">
          {earningData.map((item) => (
            <div
              key={item.title}
              className={`bg-greenfs dark:text-gray-200 dark:bg-secondary-dark-bg p-4 pt-9 rounded-2xl flex-1`}
            >
              <button
                type="button"
                className={
                  "bg-[#404041] text-[#f37216] text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                }
              >
                {item.icon}
              </button>
              <div className="mt-3">
                <span className="text-lg text-[#404041] font-semibold">
                  {item.amount}
                </span>
                <span className={`text-sm text-white ml-2`}>
                  {item.percentage}
                </span>
                <p className="text-sm text-gray-100 mt-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
