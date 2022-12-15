import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { handleInsertAction } from "../../context/actions";
import { LOGIN_FORM } from "../../utils/form_grid.data";
import { LOGIN_SCHEMA } from "../../utils/states.values";

const Login = () => {
  const [values, setValues] = useState(LOGIN_SCHEMA);
  const [error, setError] = useState({});

  const onLoginValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleInsertAction("/api/login", values);
      if (response.data.success) {
        sessionStorage.setItem("_fs.ut", response.data.data.token);
        response.data.data.token = undefined;

        swal("login!", response.data?.message, "success").then(() => {
          sessionStorage.setItem("session", JSON.stringify(response.data.data));
          document.location = "/";
        });
      } else swal("Failed!!", response.data?.message, "error");
    } catch (error) {
      setError(error.response.data[1]);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-50 bg-[#e8f0fe]">
        <img src={require("../../assets/login.jpg")} alt="login" />
      </div>
      <div className="w-50 bg-yellowfc overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full h-full px-20"
        >
          <div className="w-max p-5 bg-white rounded-full drop-shadow-md border-yellowfc">
            <h1 className="flex items-center gap-2 text-xl font-bold text-bluefc">
              Login
            </h1>
          </div>
          {LOGIN_FORM.map((input, index) => {
            let isMatchField = Object.keys(error).includes(input.name);
            return (
              <div className="w-full my-1" key={index}>
                <label className="text-xs text-bluefc font-bold mb-2">
                  {input.label}
                </label>
                <input
                  value={values[input.name]}
                  {...input}
                  onChange={onLoginValueChange}
                  className="w-full h-11 bg-white rounded-md px-5 focus:outline-yellowfc"
                  style={{
                    background: isMatchField ? "#fca5a5" : "white",
                    border: isMatchField && "2px solid #1e4a89",
                  }}
                />
                {isMatchField && (
                  <p className="text-red-900 text-xs mt-1 font-semibold">
                    {error[input.name]}
                  </p>
                )}
              </div>
            );
          })}

          <button className="h-12 w-full bg-bluef rounded-md mt-5 text-white font-bold text-sx uppercase outline-none drop-shadow-md">
            Submit
          </button>
          <p className="flex items-center text-sx my-5 text-white">
            Don't have an account yet?
            <NavLink
              to="/register"
              className={"text-bluefc ml-1 font-semibold"}
            >
              {" "}
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
