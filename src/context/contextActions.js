/**
    Fetches company info data from the server
    @async
    @function
    @returns {Promise<Object>} - The company info data as an object, or null if there was an error.
    @throws {Error} - If there is an error during the fetch process.
*/
import { handleFetchAction } from "./actions";

export const fetchCompanyInfo = async (setCompanyData) => {
    try {
        const response = await handleFetchAction(`/api/companysetting`);
        setCompanyData(response.data.data);
    } catch (error) {
        console.log(error);
    }
};

export const fetchLanguage = async (language, setLang) => {
    try {
        if (!language) return;
        const response = await handleFetchAction(
            `/api/multi-language/${language}`
        );
        setLang(response?.data?.data);
    } catch (error) {
        console.error(error);
    }
};