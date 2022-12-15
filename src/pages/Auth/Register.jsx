import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { handleInsertAction } from "../../context/actions";
import { REGISTERATION_FORM } from "../../utils/form_grid.data";
import { REGISTRATION_SCHEMA } from "../../utils/states.values";

const Registration = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState(REGISTRATION_SCHEMA);
  const [error, setError] = useState({});

  const onRegisterValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleInsertAction("/api/register", values);
      swal("Registered!", response.data?.message, "success");
      navigate("/login");
    } catch (error) {
      setError(error.response.data[1]);
    }
  };

  return (
    <div className="w-full flex items-center">
      <div className="h-max w-50 bg-yellowfc">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full py-5 px-20"
        >
          <div className="w-max p-5 bg-white rounded-full drop-shadow-md border-yellowfc">
            <h1 className="flex items-center gap-2 text-xl font-bold text-bluefc">
              Register
            </h1>
          </div>
          {REGISTERATION_FORM.map((input, index) => {
            let isMatchField = Object.keys(error).includes(input.name);
            return (
              <div className="w-full my-1" key={index}>
                <label className="text-xs text-bluefc font-bold mb-2">
                  {input.label}
                </label>
                <input
                  value={values[input.name]}
                  {...input}
                  onChange={onRegisterValueChange}
                  className={`w-full h-11 rounded-md px-5 focus:outline-yellowfc`}
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
            Already have an account yet?
            <NavLink to="/login" className={"text-bluefc ml-1 font-semibold"}>
              {" "}
              Login
            </NavLink>
          </p>
        </form>
      </div>
      <div className="w-50 bg-white">
        <img src={require("../../assets/login.jpg")} alt="login" />
      </div>
    </div>
  );
};

export default Registration;
