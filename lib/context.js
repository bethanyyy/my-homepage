import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const StateContext = ({ children }) => {
  const [activeTab, setActiveTab] = useState("/");
  return (
    <GlobalContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useStateContext = () => useContext(GlobalContext);
