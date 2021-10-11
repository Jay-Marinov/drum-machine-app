const reducer = (state, action) => {
  if (action.type === "SET_ISON") {
    return { ...state, isOn: !state.isOn };
  }

  if (action.type === "SET_BANKONE") {
    return { ...state, bank: action.payload };
  }

  if (action.type === "SET_BANKTWO") {
    return { ...state, bank: action.payload };
  }

  if (action.type === "SET_DISPLAY") {
    return { ...state, display: action.payload };
  }

  if (action.type === "SET_VOLUME") {
    return { ...state, volume: action.payload };
  }

  throw new Error("no matcinh action type");
};

export default reducer;
