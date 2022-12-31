import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { ButtonSecondary } from "./Button";
import Searchbar from "./Searchbar";

const TableGrid = (props) => {
  const onFucsed = (id, viewTriggerd) => {
    if (viewTriggerd) return;
    props.focusedId === id ? props.setFocusedId(null) : props.setFocusedId(id);
  };

  return (
    <div>
      <div className="flex items-center gap-3 w-full bg-darkfs h-10 px-3 relative rounded-t-xl">
        <ButtonSecondary
          eventToTrigger={props.onAdd}
          Icon={BiAddToQueue}
          text={"Add"}
        />
        <ButtonSecondary
          eventToTrigger={props.onEdit}
          Icon={FiEdit2}
          text={"Edit"}
          disabled={props.focusedId === null}
        />
        <ButtonSecondary
          eventToTrigger={props.onDelete}
          Icon={AiOutlineDelete}
          text={"Delete"}
          disabled={props.focusedId === null}
        />
        {props.moreDataKey && (
          <ButtonSecondary
            eventToTrigger={props.onView}
            Icon={AiOutlineEye}
            text={"View"}
            disabled={props.focusedId === null}
          />
        )}
        {props.invpo && (
          <div className="flex items-center gap-2">
            <button
              onClick={props.convertIntoInvoiceOrder}
              disabled={props.focusedId === null}
              className={`${
                props.focusedId === null ? "bg-gray-500" : "bg-greenfs"
              } rounded-lg px-2 text-gray-100 text-sm`}
            >
              Timeline
            </button>
            <button
              onClick={props.convertIntoPurchaseOrder}
              disabled={props.focusedId === null}
              className={`${
                props.focusedId === null ? "bg-gray-500" : "bg-greenfs"
              } rounded-lg px-2 text-gray-100 text-sm`}
            >
              Purchase Order
            </button>
            <button
              onClick={props.showTimeLine}
              disabled={props.focusedId === null}
              className={`${
                props.focusedId === null ? "bg-gray-500" : "bg-greenfs"
              } rounded-lg px-2 text-gray-100 text-sm`}
            >
              Detail
            </button>
          </div>
        )}
        <Searchbar func={props.doSearch} value={props.searching} />
      </div>
      <div className="max-h-96	overflow-auto">
        <table className="w-full border-1">
          <thead>
            <tr className="w-auto h-10">
              {props.gridList?.map((item, index) => (
                <th
                  key={index}
                  className="text-sm text-left px-2 font-semibold text-gray-400"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.dataSource?.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: props.focusedId === item.id && "#14a800",
                  color: props.focusedId === item.id && "#fff",
                }}
                className={`w-full border-t-1 cursor-pointer table-grid
                 hover:bg-zinc-300 odd:bg-white even:bg-slate-50`}
                onClick={() => onFucsed(item.id)}
              >
                {Object.entries(item)?.map(([key, value]) => {
                  let date =
                    (key === "updated_at" || key === "created_at") &&
                    value?.split("T")[0];

                  return (
                    props.gridList.includes(key) && (
                      <td key={key} className="text-xs max-h-max px-2 h-8">
                        {date || value}
                      </td>
                    )
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableGrid;
