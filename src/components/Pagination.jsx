import React from "react";

const Pagination = (props) => {
  const prevPage = () => {
    if (props.page > 0) {
      props.setPage(props.page - 1);
    }
  };

  const nextPage = () => {
    if (props.lastPage > props.page) {
      props.setPage(props.page + 1);
    }
  };

  return (
    <div className="flex items-center justify-between my-2">
      <div>
        <h6 className="text-sm">
          Showing {props.from} to {props.to} of {props.total} results
        </h6>
      </div>
      <div className="flex gap-2 mr-2">
        <button
          className="text-sm cursor-pointer rounded-lg border-1 p-3"
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="text-sm cursor-pointer rounded-lg border-1 p-3"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
