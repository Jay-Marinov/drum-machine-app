import React, { useState, useContext, useReducer } from "react";
import reducer from "./reducer";
import { bankOne } from "./data";
import { bankTwo } from "./data";

const AppContext = React.createContext();

const initialState = {
  isOn: true,
  bank: bankOne,
  display: "Welcome!",
  volume: 50,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsOn = () => {
    dispatch({ type: "SET_ISON" });
  };

  const switchBanks = () => {
    if (state.bank === bankTwo) {
      dispatch({ type: "SET_BANKONE", payload: bankOne });
    }
    if (state.bank === bankOne) {
      dispatch({ type: "SET_BANKTWO", payload: bankTwo });
    }
  };

  const setDisplay = (value) => {
    console.log(value);
    dispatch({ type: "SET_DISPLAY", payload: value });
  };

  const setVolume = (value) => {
    console.log(value);
    dispatch({ type: "SET_VOLUME", payload: value });
  };

  return (
    <AppContext.Provider
      value={{ ...state, setIsOn, switchBanks, setDisplay, setVolume }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
