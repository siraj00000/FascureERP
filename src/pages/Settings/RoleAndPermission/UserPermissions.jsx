import React, { useReducer } from "react";
import { initialState, roleReducer } from "./RoleReducer";
import { BsJournalPlus } from "react-icons/bs";

const UserPermissions = ({ updatePermissions }) => {
  const [state, dispatch] = useReducer(roleReducer, initialState);
  const { modulesList, permissions } = state;

  const handleCheckboxChange = (moduleName, permissionType, checked) => {
    dispatch({
      type: "UPDATE_MODULE_CHECKBOX",
      payload: {
        moduleName,
        permissionType,
        checked,
      },
    });
  };

  const handleAddPermission = () => {
    updatePermissions(permissions);
  };

  return (
    <main>
      <aside className="">
        <h1 className="text-3xl text-darkfs font-bold my-5">Permissions</h1>
        <section className="w-full">
          <button
            onClick={handleAddPermission}
            className="ml-auto bg-darkfs text-gray-100 gap-2 p-2 rounded-md flex items-center justify-center w-max my-5"
          >
            <BsJournalPlus />
            Update Permissions
          </button>
          <table className="w-full border-collapse border-1 rounded-md text-md font-semibold">
            <thead className="bg-gray-200 py-2">
              <tr className="h-10 my-10">
                <th className="text-left pl-5">Modules</th>
                {["create", "view", "edit", "delete"].map((heading) => (
                  <th key={heading} className="capitalize">
                    <div className="flex items-center justify-center gap-3">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_ALL_CHECKBOX",
                            payload: {
                              permissionType: heading,
                              checked: e.target.checked,
                            },
                          })
                        }
                        className="h-5 w-5 accent-greenfs"
                      />
                      <h6>{heading}</h6>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modulesList.map((module) => (
                <tr
                  key={module.name}
                  className="text-center font-normal even:bg-gray-50 h-10 border-y"
                >
                  <td className="text-left pl-5">{module.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={module.create.checked}
                      onChange={(e) =>
                        handleCheckboxChange(module, "create", e.target.checked)
                      }
                      className="h-5 w-5 accent-white"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={module.view.checked}
                      onChange={(e) =>
                        handleCheckboxChange(module, "view", e.target.checked)
                      }
                      className="h-5 w-5 accent-white"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={module.edit.checked}
                      onChange={(e) =>
                        handleCheckboxChange(module, "edit", e.target.checked)
                      }
                      className="h-5 w-5 accent-white"
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={module.delete.checked}
                      onChange={(e) =>
                        handleCheckboxChange(module, "delete", e.target.checked)
                      }
                      className="h-5 w-5 accent-white"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </aside>
    </main>
  );
};

export default React.memo(UserPermissions);
