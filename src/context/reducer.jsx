import * as actionType from "./type";
export const initialState = {
  openSideBar: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.OPEN_SIDEBAR:
      return {
        ...state,
        openSideBar: true,
      };
    case actionType.CLOSE_SIDEBAR:
      return {
        ...state,
        openSideBar: false,
      };
    default: {
      return state;
    }
  }
};
