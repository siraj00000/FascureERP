import API from '../API';

export const authToken = sessionStorage.getItem("token");

export const userLoginAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/login",
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

export const userRegistrationAction = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await API({
                method: "POST",
                url: "api/register",
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