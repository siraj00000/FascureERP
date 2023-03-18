import React, { useState } from "react";
import UserPermissions from "./UserPermissions";
import DropDownMUI from "../../../components/MuiDropdown";

const Role = () => {
  const [permissions, setPermissions] = useState(null);
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <main className="bg-white rounded-xl shadow-xl m-5 p-5">
      <section className="w-1/2">
        <h1 className="text-3xl text-darkfs font-bold my-5">User</h1>
        <DropDownMUI
          lable={"select user"}
          endPoint={`/api/users`}
          setRecord={setUser}
        />
      </section>
      <UserPermissions updatePermissions={setPermissions} />
    </main>
  );
};

export default Role;
