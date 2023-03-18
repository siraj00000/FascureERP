import API from "../../API";

/**
 * A function to handle GET API requests.
 * @param {string} url - The endpoint URL.
 * @returns {Promise} - A promise that resolves with the response data on success, and rejects with an error on failure.
*/
export const handleFetchAction = (url) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const request = API({
        method: "GET",
        url,
        headers: {
            "Content-Type": "application/json"
        },
        signal
    });

    const promise = new Promise(async (resolve, reject) => {
        try {
            const response = await request;
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

    // Attach the abort function to the promise, so that it can be called from outside the function
    promise.abort = () => {
        abortController.abort();
        request.abort();
    };

    return promise;
};


/**
 * A function to handle POST API requests.
 * @param {string} url - The endpoint URL.
 * @param {Object} data - The data to be sent in the request body.
 * @returns {Promise} - A promise that resolves with the response data on success, and rejects with an error on failure.
*/
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


/**
 * A function to handle PUT API requests.
 * @param {Object} data - The data to be sent in the request body.
 * @param {string} url - The endpoint URL.
 * @returns {Promise} - A promise that resolves with the response data on success, and rejects with an error on failure.
*/ 
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


/**
 * A function to handle DELETE API requests.
 * @param {string} url - The endpoint URL.
 * @returns {Promise} - A promise that resolves with the response data on success, and rejects with an error on failure.
*/ 
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