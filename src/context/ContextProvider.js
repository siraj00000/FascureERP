import { useContext, createContext, useMemo, useCallback, useState, useEffect } from "react";
import { handleFetchAction } from "./actions";
import { fetchLanguage } from "./contextActions";
import Cookies from "universal-cookie";

/**
 * @typedef {Object} ContextValues
 * @property {string} token - The token obtained from session storage.
 * @property {string} sessionInfo - The session information obtained from session storage.
 * @property {Object} companyData - The company data obtained from the API.
 * @property {Function} setCompanyData - A function that updates the company data in state.
 * @property {boolean} settingBarWidth - The width of the settings bar.
 * @property {Function} setSettingBarWidth - A function that updates the width of the settings bar.
 * @property {string} lang - The current language.
 * @property {Function} setLang - A function that updates the current language.
 */

/**
 * The state context object.
 * @type {React.Context<ContextValues>}
 */
const StateContext = createContext();

/**
 * The context provider component.
 * @function
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The context provider component.
 */
export const ContextProvider = ({ children }) => {
    const [permissions, setPermissions] = useState([]);
    const [companyData, setCompanyData] = useState(null);
    const [settingBarWidth, setSettingBarWidth] = useState(false);
    const [lang, setLang] = useState(null);

    const cookies = useMemo(() => new Cookies(), []);

    const cookiesLang = cookies.get("lang");

    /**
     * Fetches the company data from the API.
     * @function
     * @async
     * @returns {void}
     */
    const fetchData = useCallback(async () => {
        try {
            const response = await handleFetchAction(`/api/companysetting`);
            setCompanyData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        let defaultLang = cookiesLang || `english/en`;

        // If cookie is empty then set default
        if (!cookiesLang) {
            cookies.set("lang", defaultLang);
        }
        fetchLanguage(defaultLang, setLang);
    }, []);

    const token = useMemo(() => sessionStorage.getItem("_fs.ut"), []);
    const sessionInfo = useMemo(() => sessionStorage.getItem("session"), []);

    const values = {
        token,
        sessionInfo,
        companyData,
        setCompanyData,
        settingBarWidth,
        setSettingBarWidth,
        lang,
        setLang,
        permissions,
        setPermissions
    };

    return (
        <StateContext.Provider value={values}>
            {children}
        </StateContext.Provider>
    );
};

/**
 * A custom hook that provides access to the context values.
 * @function
 * @returns {ContextValues} The context values.
 */
export const useStateContext = () => useContext(StateContext);
