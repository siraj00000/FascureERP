import React, { useContext, createContext, useMemo } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    let token = useMemo(() => sessionStorage.getItem("_fs.ut"), []);
    let sessionInfo = useMemo(() => sessionStorage.getItem("session"), []);
    return (
        <StateContext.Provider value={{ token, sessionInfo }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);