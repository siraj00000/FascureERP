import React, { useEffect, useState } from "react";
import UpdateCompanySetting from "./UpdateCompanySettings";
import { handleFetchAction } from "../../../context/actions";
import Loader from "../../../components/Loader";
import ViewCompanyInfo from "./ViewCompanyInfo";

const CompanySettings = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  const fetchCompanyData = async () => {
    try {
      const response = await handleFetchAction("/api/companysetting");
      setCompanyInfo(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      fetchCompanyData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const isLoading = companyInfo === null;
  return (
    <main className="m-5 bg-white rounded-xl p-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UpdateCompanySetting />
          <ViewCompanyInfo companyInfo={companyInfo} />
        </>
      )}
    </main>
  );
};

export default React.memo(CompanySettings);
