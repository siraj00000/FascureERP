import React, { useState } from "react";
import UserPermissions from "./UserPermissions";
import { FaCriticalRole } from "react-icons/fa";
import { handleInsertAction } from "../../../context/actions";

const Role = () => {
  const [permissions, setPermissions] = useState(null);
  const [name, setName] = useState("");
  const resetState = () => {
    setName("");
    setPermissions(null);
  };
  const handleInsertPermission = async () => {
    try {
      let data = { name, permissions };
      await handleInsertAction(`/api/roles`, data);
      resetState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-white rounded-xl shadow-xl m-5 p-5">
      <section className="w-1/2">
        <h1 className="text-3xl text-darkfs font-bold my-5">User</h1>
        <div className="flex flex-col">
          <label className="text-sm capitalize">name*</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Admin, user..."
            className="border-1 rounded-md p-2 mt-1"
          />
        </div>
      </section>
      <UserPermissions updatePermissions={setPermissions} />
      <section className="my-5 w-full">
        <button
          onClick={handleInsertPermission}
          className="bg-darkfs text-white p-2 text-center w-full rounded-md flex items-center justify-center gap-1"
        >
          <FaCriticalRole /> Role
        </button>
      </section>
    </main>
  );
};

export default Role;
