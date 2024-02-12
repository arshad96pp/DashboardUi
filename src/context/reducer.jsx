import * as actionType from "./type";
export const initialState = {
  openSideBar: false,
  ipPopupData: false,
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

    case actionType.POPUP_ON:
      return {
        ...state,
        ipPopupData: true,
      };

    case actionType.POPUP_CLOSE:
      return {
        ...state,
        ipPopupData: false,
      };
    default: {
      return state;
    }
  }
};
