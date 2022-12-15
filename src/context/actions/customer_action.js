import API from "../../API";

export const fetchCustomerAction = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "GET",
                url: "api/customers",
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

export const addCustomerAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/customers",
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

export const updateCustomerAction = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "PUT",
                url: `api/customers/${id}`,
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

export const deleteCustomerAction = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "DELETE",
                url: `api/customers/${id}`,
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