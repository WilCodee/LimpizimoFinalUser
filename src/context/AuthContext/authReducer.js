import { AUTH_ACTIONS } from "./authActions";

export const authInitialState = {
  user: {},
  isLogin: false
};

export function authReducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return { ...state, isLogin: true, user: action.payload };

    case AUTH_ACTIONS.LOGOUT:
      return { ...state, isLogin: false };

    default:
      console.log("default action");
  }
}