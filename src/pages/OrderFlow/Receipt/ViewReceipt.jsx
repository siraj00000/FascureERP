import React, { useRef, useState } from "react";
import TransitionModal from "../../../components/TransitionModal";
import { handleFetchAction } from "../../../context/actions";
import ReactToPrint from "react-to-print";
import CompanyInformation from "../../../components/CompanyInfo";

const ViewCashReceipt = ({ id }) => {
  const componentRef = useRef();
  const [CR_Collections, setCRCollections] = useState(null); // CR refers to Cash Receipt
  const sessionUser = sessionStorage.getItem("session");
  let user = JSON.parse(sessionUser);

  const fetchCashReceipt = async () => {
    try {
      const response = await handleFetchAction(
        `/api/get/recept-by-id?id=${id}`
      );
      setCRCollections(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  let isLoading = CR_Collections === null;
  let receipt = CR_Collections?.recept;

  return (
    <main>
      <TransitionModal
        title={"View"}
        onPress={fetchCashReceipt}
        isLoading={isLoading}
      >
        <ReactToPrint
          trigger={() => (
            <button className="bg-greenfs p-2 text-md text-white rounded-md m-5">
              Print
            </button>
          )}
          content={() => componentRef.current}
        />
        <div className="w-[800px] p-5" ref={componentRef}>
          <CompanyInformation />
          <div className="w-full">
            <h1 className="text-xl font-bold uppercase">Cash Receipt</h1>

            <div className="w-full flex justify-between items-end">
              <div className="">
                <h4 className="text-sm font-semibold">Received Form</h4>
                <h5 className="text-sm">
                  {receipt?.customer?.name}({receipt?.customer?.id})
                </h5>
              </div>
              <div className="text-right w-1/3">
                <div className="flex items-center text-right gap-2 justify-between">
                  <h4 className="text-sm font-semibold w-1/2">No.</h4>
                  <h5 className="text-sm w-1/2">{receipt?.receipt_number}</h5>
                </div>
                <div className="flex items-center text-right gap-2 justify-between">
                  <h4 className="text-sm font-semibold w-1/2">Invoice No.</h4>
                  <h5 className="text-sm w-1/2">
                    {CR_Collections?.invoice?.inv_num}
                  </h5>
                </div>
                <div className="flex items-center text-right gap-2 justify-between">
                  <h4 className="text-sm font-semibold w-1/2">Date</h4>
                  <h5 className="text-sm w-1/2">
                    {receipt?.created_at.split("T")[0]}
                  </h5>
                </div>
                <div className="flex items-center text-right gap-2 justify-between">
                  <h4 className="text-sm font-semibold w-1/2">
                    Payment Method
                  </h4>
                  <h5 className="text-sm w-1/2">
                    {receipt?.payment_term?.type}
                  </h5>
                </div>
                <div className="flex items-center text-right gap-2 justify-between">
                  <h4 className="text-sm font-semibold w-1/2">Amount</h4>
                  <h5 className="text-sm w-1/2">{receipt?.amount}</h5>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between my-5">
              <div className="w-3/4">
                <div className="flex items-end gap-3 my-2">
                  <h4 className="w-1/5 text-sm font-semibold">For:</h4>
                  <p className="border-b-1 text-sm w-4/5">{receipt?.note}</p>
                </div>
                <div className="flex items-end gap-3 my-2">
                  <h4 className="w-1/5 text-sm font-semibold">Received by:</h4>
                  <p className="border-b-1 text-sm w-4/5">{user.name}</p>
                </div>
              </div>

              {/* Signature */}
              <div className="w-1/4 text-center">
                <h6>Signature</h6>
              </div>
            </div>
          </div>
        </div>
      </TransitionModal>
    </main>
  );
};

export default React.memo(ViewCashReceipt);
