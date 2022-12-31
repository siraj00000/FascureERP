import React from "react";
import ReceiveOrder from "./ReceiveOrder";

const DetailTemplate = () => {
  const TIMELINE = [
    {
      title: "Sale Order",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
    {
      title: "Purchase Order",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
    {
      title: "Recieve Order",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
    {
      title: "Delivery Order",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
    {
      title: "Invoice Order",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
    {
      title: "Receipt",
      Template: () => <ReceiveOrder attribute={"receive_order"} />,
    },
  ];

  return (
    <div className="p-5">
      <h3 className="text-2xl text-gray-700 font-bold mb-6 -ml-3">
        Latest News
      </h3>

      <ol className="border-l-2 border-greenfs">
        {TIMELINE.map(({ title, Template }, index) => (
          <li key={index}>
            <div className="md:flex flex-start">
              <div className="bg-greenfs w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-3 h-3"
                  role="img"
                  // xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
              </div>
              <div className="block p-6 rounded-lg shadow-lg bg-gray-100 w-[60%] ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a
                    href="#!"
                    className="font-medium text-greenfs duration-300 transition ease-in-out text-sm"
                  >
                    {title}
                  </a>
                  <a
                    href="#!"
                    className="font-medium text-greenfs duration-300 transition ease-in-out text-sm"
                  >
                    04 / 02 / 2022
                  </a>
                </div>
                <Template />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DetailTemplate;
