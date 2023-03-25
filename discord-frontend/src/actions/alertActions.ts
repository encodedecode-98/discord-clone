import store from "../store/store";

const alertActions = {
  OPEN_ALERT_MESSAGE: "ALERT.OPEN_ALERT_MESSAGE",
  CLOSE_ALERT_MESSAGE: "ALERT.CLOSE_ALERT_MESSAGE",
};

export const getActions = (dispatch: typeof store.dispatch) => {
  return {
    openAlertMessage: (content : string ) => dispatch(openAlertMessage(content)),
    closeAlertMessage: (content : string) => dispatch(closeAlertMessage(content)),
  };
};
export const openAlertMessage = (content: string) => {
  return {
    type: alertActions.OPEN_ALERT_MESSAGE,
    content,
  };
};

export const closeAlertMessage = (content : string) => {
  return {
    type: alertActions.CLOSE_ALERT_MESSAGE,
    content,
  };
};

export default alertActions;
