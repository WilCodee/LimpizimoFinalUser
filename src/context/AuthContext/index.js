import React, { useReducer } from "react";
import { AUTH_ACTIONS } from "./authActions";
import { authInitialState, authReducer } from "./authReducer";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const value = {
    user: state.user,
    isLogin: state.isLogin,
    login: (user) => {
      dispatch({ type: AUTH_ACTIONS.LOGIN, payload: user });
    },

    logout: () => {
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

