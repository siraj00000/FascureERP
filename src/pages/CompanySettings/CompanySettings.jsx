import React, { useState } from "react";
import FormDropdown from "../../components/FormDropdown";
import FormInput from "../../components/FormInput";
import { handleUpdateAction } from "../../context/actions";
import { COMPANY_SETTINGS_DROPDOWNS } from "../../utils/formdropdown_grid.data";
import { COMPANY_SETTINGS_FORM } from "../../utils/form_grid.data";
import { COMPANY_SETTINGS_SCHEMA } from "../../utils/states.values";

const CompanySettings = () => {
  const [status, setStatus] = useState({ msg: null, type: "" });
  const [values, setValues] = useState(COMPANY_SETTINGS_SCHEMA);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleUpdateCompanySettings = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", values.logo);

    values["logo"] = undefined;
    let data = { ...values, formData };

    try {
      const response = await handleUpdateAction(data, "/api/companysetting/1");
      console.log(response.data.Success);
    } catch (error) {
      setStatus({ msg: error.response.data[1], type: "error" });
    }
  };
  return (
    <main>
      <div className="m-10">
        <div className="flex items-center h-12 px-5 bg-bluef text-yellowfc">
          <h1 className="text-xl font-bold uppercase">Company Settings</h1>
        </div>
        <form onSubmit={handleUpdateCompanySettings}>
          <div className="flex items-center flex-wrap gap-x-10 m-5">
            {COMPANY_SETTINGS_FORM.map((input, index) => (
              <FormInput
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            {COMPANY_SETTINGS_DROPDOWNS.map((input, index) => (
              <FormDropdown
                key={index}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          
          <div className="text-right border-t-1 mt-4 py-3">
            <button
              className={`h-10 px-10 rounded-lg text-center bg-bluefc font-semibold text-yellowfc`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CompanySettings;
