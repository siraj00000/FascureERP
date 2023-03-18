import React from "react";
import Loader from "./Loader";
import { useStateContext } from "../context/ContextProvider";

const CompanyInformation = () => {
  const { companyData } = useStateContext();
  let isLoading = companyData === null;
  if (isLoading) return <Loader />;
  return (
    <section className="p-1 w-full mb-5">
      <div className="m-3 flex items-center text-darkfs justify-between gap-5">
        <img
          src={companyData?.logo}
          alt="company-logo"
          className="w-[200px] h-[100px]"
        />
        <div className="text-center">
          <h4 className="text-5xl font-bold">{companyData?.name}</h4>
          <h4 className="text-md font-semibold">{companyData?.email}</h4>
        </div>
        <div className="text-md font-semibold">
          <h4>
            Ph No.
            <span className="font-normal">{companyData?.phone_number}</span>
          </h4>
          <h4>
            CR No.<span className="font-normal">{companyData?.cr_number}</span>
          </h4>
          <h4>
            VAT No.
            <span className="font-normal">{companyData?.vat_number}</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CompanyInformation;
