import API from "../../API";

export const fetchSlavesAction = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "GET",
                url: "api/slaves",
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

export const addSlavesAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/slaves",
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

export const updateSlavesAction = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "PUT",
                url: `api/slaves/${id}`,
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

export const deleteSlavesAction = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "DELETE",
                url: `api/slaves/${id}`,
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