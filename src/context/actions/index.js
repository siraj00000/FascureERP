import API from "../../API";

export const handleFetchAction = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "GET",
                url,
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

export const handleInsertAction = (url, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url,
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

export const handleUpdateAction = (data, url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "PUT",
                url,
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

export const handleDeleteAction = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "DELETE",
                url,
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