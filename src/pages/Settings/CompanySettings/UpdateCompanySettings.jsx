import React, { useState } from "react";
import FormDropdown from "../../../components/FormDropdown";
import FormInput from "../../../components/FormInput";
import { handleUpdateAction } from "../../../context/actions";
import { COMPANY_SETTINGS_DROPDOWNS } from "../../../utils/formdropdown_grid.data";
import { COMPANY_SETTINGS_FORM } from "../../../utils/form_grid.data";
import { COMPANY_SETTINGS_SCHEMA } from "../../../utils/states.values";
import TransitionModal from "../../../components/TransitionModal";

const UpdateCompanyInfo = React.memo(() => {
  const [status, setStatus] = useState({ msg: null, type: "" });
  const [values, setValues] = useState(COMPANY_SETTINGS_SCHEMA);
  const [logo, setLogo] = useState(null);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleUpdateCompanyInfo = async (e) => {
    e.preventDefault();

    let data = { ...values, logo };
    try {
      const response = await handleUpdateAction(
        data,
        "http://localhost:3000/api/companysetting/1"
      );
      console.log(response.data.Success);
    } catch (error) {
      setStatus({ msg: error.response.data[1], type: "error" });
    }
  };
  return (
    <main className="w-1000">
      <div className="">
        <div className="flex items-center h-12 px-5 bg-gray-200 text-darkfs">
          <h1 className="text-xl font-bold uppercase">Company Settings</h1>
        </div>
        <form onSubmit={handleUpdateCompanyInfo}>
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
            <div className="flex flex-col my-2">
              <label className="text-sm">Logo</label>
              <input
                onChange={handleImageChange}
                type="file"
                accept="images/png, images/svg, images/jpeg, images/jpg, images/gif"
                required
              />
            </div>
          </div>
          <div className="text-right border-t-1 mt-4 p-3">
            <button
              className={`h-10 px-10 rounded-lg text-center bg-darkfs font-semibold text-gray-100`}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </main>
  );
});

const UpdateCompanySetting = () => {
  return (
    <TransitionModal title={"Update"} onPress={() => {}} isLoading={false}>
      <UpdateCompanyInfo />
    </TransitionModal>
  );
};

export default React.memo(UpdateCompanySetting);
