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
import FormLayout from "../Forms/FormLayout";
import Pagination from "../Pagination";
import Splash from "../Splash";
import ViewTableGrid from "../ViewTableGrid";
import { useStateContext } from "../../context/ContextProvider";

const PageLayout = ({
  title,
  URL,
  pageGrid,
  formGrid,
  valuesGroup,
  formDropdownGrid,
  moreDataKey,
  createKey,
  viewKey,
  editKey,
  deleteKey,
}) => {
  const { permissions } = useStateContext();
  const [isLoading, setLoading] = useState(false);
  const [focusedId, setFocusedId] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [viewDetail, setViewDetail] = useState([]);
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
    // Fetching data throw axios
    let fetchURL = URL + `?page=${page}&search=${search}`;
    handleFetchAction(fetchURL).then((res) =>
      setCollections({
        data: res.data.data,
        from: res.data.from,
        to: res.data.to,
        lastPage: res.data.last_page,
        total: res.data.total,
      })
    );
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
    dataList.forEach((element) => {
      element.id === focusedId && setViewDetail(element[moreDataKey]);
    });
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

  let isCreationAllowed = permissions.includes(createKey);
  let isViewAllowed = permissions.includes(viewKey);
  let isEditAllowed = permissions.includes(editKey);
  let isDeleteAllowed = permissions.includes(deleteKey);

  return (
    <React.Fragment>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title={title} />
        {isLoading && <Splash />}
        {!isLoading && isViewAllowed && (
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
              isCreationAllowed={isCreationAllowed}
              isEditAllowed={isEditAllowed}
              isDeleteAllowed={isDeleteAllowed}
            />
            <Pagination {...collections} setPage={setPage} page={page} />
          </>
        )}
      </div>
      {/* INSERT MODAL */}
      {openModal.enableInsertModal && (
        <Modal mxw={false}>
          <FormLayout
            type={`Add ${title}`}
            close={openInsertModal}
            formSource={formGrid}
            handleAction={insertHandler}
            refresh={setLoading}
            valuesGroup={valuesGroup}
            formDropdownGrid={formDropdownGrid}
          />
        </Modal>
      )}
      {/* UPDATE MODAL */}
      {openModal.enableUpdateModal && (
        <Modal mxw={false}>
          <FormLayout
            type={`Edit ${title}`}
            close={openUpdateModal}
            formSource={formGrid}
            handleAction={updateHandler}
            refresh={setLoading}
            valuesGroup={valuesGroup}
            formDropdownGrid={formDropdownGrid}
          />
        </Modal>
      )}
      {/* VIEW MODAL */}
      {viewDetail.length !== 0 && (
        <Modal mxw={false}>
          <ViewTableGrid
            type={title}
            gridData={viewDetail}
            onClose={setViewDetail}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default PageLayout;
