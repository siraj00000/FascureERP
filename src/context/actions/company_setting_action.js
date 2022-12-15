import API from "../../API";

export const fetchCompanySettingAction = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "GET",
                url: "api/companysettings",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const addCompanySettingAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/companysettings",
                data,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const updateCompanySettingAction = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "PUT",
                url: `api/companysettings/${id}`,
                data: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

export const deleteCompanySettingAction = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "DELETE",
                url: `api/companysettings/${id}`,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};