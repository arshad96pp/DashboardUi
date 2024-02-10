import React, { useContext, useMemo } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "./reducer";
import { action } from "./action";

const AppContext = createContext();
function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = useMemo(() => [state, dispatch], [state]);
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

const useAppContext = () => {
  const getValue = useContext(AppContext);
  if (!getValue) {
    throw new Error("error");
  }
  const [state, dispatch] = getValue;
  const Actions = action(dispatch);

  return { state, Actions };
};

export { AppContextProvider, useAppContext };
