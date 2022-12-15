import API from "../../API";

export const fetchLanguageAction = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "GET",
                url: "api/languages",
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

export const addLanguageAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/languages",
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

export const updateLanguageAction = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "PUT",
                url: `api/languages/${id}`,
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

export const deleteLanguageAction = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "DELETE",
                url: `api/languages/${id}`,
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