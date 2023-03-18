import React from "react";

const ViewCompanyInfo = ({ companyInfo }) => {
  return (
    <aside>
      <div className="flex items-end justify-between">
        <h1 className="w-full text-5xl p-3 text-darfs font-bold">
          {companyInfo?.name}
        </h1>
        <img
          src={companyInfo?.logo}
          alt="brand"
          className="w-[200px] h-[150px] mx-auto shadow-xl object-cover"
        />
      </div>

      <section className="my-8 w-full flex items-center justify-between gap-5 flex-wrap">
        <h2 className="text-md text-gray-600 bg-white rounded-md shadow-md p-3 font-semibold w-[48%]">
          {companyInfo?.email}
        </h2>
        <h2 className="text-md text-gray-600 bg-white rounded-md shadow-md p-3 font-semibold w-[48%]">
          {companyInfo?.phone_number}
        </h2>
        <h2 className="text-md text-gray-600 bg-white rounded-md shadow-md p-3 font-semibold w-[48%]">
          {companyInfo?.cr_number}
        </h2>
        <h2 className="text-md text-gray-600 bg-white rounded-md shadow-md p-3 font-semibold w-[48%]">
          {companyInfo?.vat_number}
        </h2>
      </section>
    </aside>
  );
};

export default React.memo(ViewCompanyInfo);
