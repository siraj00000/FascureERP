import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import Modal from "../../components/Modal";
import TableGrid from "../../components/TableGrid";
import { DeleteAlert } from "../../utils/sweet_alert";
import {
  handleDeleteAction,
  handleFetchAction,
  handleInsertAction,
  handleUpdateAction,
} from "../../context/actions";
import Pagination from "../Pagination";
import Splash from "../Splash";
import ViewTableGrid from "../ViewTableGrid";
import ISPFormLayout from "../Forms/ISPFormLayout";
import { ISP_DYNAMIC_DATA } from "../../utils/ISP.data";
import SOTimeLine from "../SOTimeline";
import { useNavigate } from "react-router-dom";

const ISPLayout = ({ title, URL, dataType, pageGrid, moreDataKey, invpo }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [focusedId, setFocusedId] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [timeLine, setTimeLine] = useState(false);
  const [viewDetail, setViewDetail] = useState({
    visible: false,
    url: "",
    type: "",
    convertHandler: () => {},
  });
  const [collections, setCollections] = useState({
    data: [],
    from: 0,
    to: 0,
    total: 0,
  });
  const [openModal, setOpenModal] = useState({
    enableInsertModal: false,
    enableUpdateModal: false,
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      let fetchURL = URL + `?page=${page}&search=${search}`;
      const response = await handleFetchAction(fetchURL);

      let _data = response?.data;
      if (isMounted) {
        setCollections({
          data: _data.data,
          from: _data.from,
          to: _data.to,
          lastPage: _data.last_page,
          total: _data.total,
        });
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [search, URL, isLoading, page]);

  // COLLECTION
  const dataList = collections.data;
  const insertHandler = async (data) => {
    const response = await handleInsertAction(URL, data);
    return response;
  };

  const updateHandler = async (data) => {
    let ID_URL = URL + "/" + focusedId;
    const response = await handleUpdateAction(data, ID_URL);
    return response;
  };

  // Delete Row
  const deleteHandler = async () => {
    let ID_URL = URL + "/" + focusedId;
    const response = await DeleteAlert(handleDeleteAction, ID_URL, setLoading);
    if (response) setLoading(false);
    setFocusedId(null);
  };

  // View More
  const viewMoreHandler = async () => {
    setViewDetail({ visible: true, url: URL, type: title });
  };

  // Add Form Modal
  const openInsertModal = () => {
    setOpenModal({
      enableInsertModal: !openModal.enableInsertModal,
      enableUpdateModal: false,
    });
  };

  // Edit Form Modal
  const openUpdateModal = () => {
    setOpenModal({
      enableInsertModal: false,
      enableUpdateModal: !openModal.enableUpdateModal,
    });
  };

  // Convert Sales order to Invoice order
  const convertIntoInvoiceOrder = async () => {
    navigate("order-flow", { state: focusedId });
  };

  // Convert Sales order to Purchase order
  const convertIntoPurchaseOrder = () => {
    setViewDetail({
      visible: true,
      url: "/api/purchase_orders",
      type: "Purchase Order",
    });
  };

  const showSalesOrderTimeLine = () => {
    setTimeLine(true);
  };

  if (collections.data.length >= 0) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <React.Fragment>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title={title} />
        {isLoading && <Splash />}
        {!isLoading && (
          <>
            <TableGrid
              dataSource={dataList}
              gridList={pageGrid}
              doSearch={setSearch}
              searching={search}
              onAdd={openInsertModal}
              onEdit={openUpdateModal}
              onDelete={deleteHandler}
              onView={viewMoreHandler}
              focusedId={focusedId}
              setFocusedId={setFocusedId}
              moreDataKey={moreDataKey}
              invpo={invpo}
              convertIntoInvoiceOrder={convertIntoInvoiceOrder}
              convertIntoPurchaseOrder={convertIntoPurchaseOrder}
              showTimeLine={showSalesOrderTimeLine}
            />
            <Pagination {...collections} setPage={setPage} page={page} />
          </>
        )}
      </div>
      {/* INSERT MODAL */}
      {openModal.enableInsertModal && (
        <Modal mxw={true}>
          <ISPFormLayout
            {...ISP_DYNAMIC_DATA[dataType]}
            close={openInsertModal}
            handleAction={insertHandler}
            dataType={dataType}
            refresh={setLoading}
          />
        </Modal>
      )}
      {/* UPDATE MODAL */}
      {openModal.enableUpdateModal && (
        <Modal mxw={true}>
          <ISPFormLayout
            {...ISP_DYNAMIC_DATA[dataType]}
            close={openUpdateModal}
            handleAction={updateHandler}
            dataType={dataType}
            refresh={setLoading}
          />
        </Modal>
      )}
      {/* VIEW MODAL */}
      {viewDetail.visible && (
        <Modal mxw={true}>
          <ViewTableGrid
            URL={viewDetail.url}
            focusedId={focusedId}
            type={viewDetail.type}
            onClose={setViewDetail}
          />
        </Modal>
      )}
      {timeLine && (
        <Modal mxw={true}>
          <SOTimeLine focusedId={focusedId} />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ISPLayout;
