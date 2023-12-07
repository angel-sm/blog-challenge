/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const PageContext = createContext();

const initialState = {
  showModalDetails: false,
  entrances: [],
  entrance: null,
  search: "",
  refresh: false
};

export const usePageContext = () => useContext(PageContext);

export const PageContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <PageContext.Provider value={{ state, setState }}>
      {children}
    </PageContext.Provider>
  );
};
