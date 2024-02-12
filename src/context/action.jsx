import * as actionType from "./type";

export const action = (dispatch) => {
  return {
    isSideBar: {
      isSideBarOpen: () => {
        dispatch({ type: actionType.OPEN_SIDEBAR });
      },
      isSideBarClose: () => {
        dispatch({ type: actionType.CLOSE_SIDEBAR });
      },
    },

    isPopu:{
      isPopupOn:()=>{
        dispatch({ type: actionType.POPUP_ON });

      },
      isPopupClose:()=>{
        dispatch({ type: actionType.POPUP_CLOSE });
      }
    }
  };
};
