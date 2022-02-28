import React, { useReducer } from "react";
import { NEW_SERVICE_ACTIONS } from "./newServiceActions";
import { newServiceInitialState, newServiceReducer } from "./newServiceReducer";

export const NewServiceContext = React.createContext();

export const NewServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer( newServiceReducer , newServiceInitialState);

  const value = {
    service: state,
    cleanType: state.cleanType, //normal o profundo
    serviceType: state.serviceType, // unica vez o frecuente
    serviceDays: state.serviceDays,
    serviceDay: state.serviceDay, // dia del servicio
    serviceBeginAt: state.serviceBeginAt, //inicio del servicio
    serviceAddress: state.serviceAddress, // dirección del servicio
    serviceHours: state.serviceHours, // numero de horas
    setCleanType: (cleanType) => dispatch({type: NEW_SERVICE_ACTIONS.SET_CLEAN_TYPE, payload: cleanType}),
    setServiceType: (serviceType) => dispatch({type: NEW_SERVICE_ACTIONS.SET_SERVICE_TYPE, payload: serviceType}),
    setServiceDay: (serviceDay) => dispatch({type: NEW_SERVICE_ACTIONS.SET_SERVICE_DAY, payload: serviceDay }),
    setServiceBeginAt: (serviceBeginAt) => dispatch({type:NEW_SERVICE_ACTIONS.SET_SERVICE_BEGIN_AT, payload: serviceBeginAt }),
    setServiceAddress: (serviceAddress) => dispatch({type:NEW_SERVICE_ACTIONS.SET_SERVICE_ADDRESS, payload: serviceAddress }),
    setServiceHours: (serviceHours) => dispatch({type: NEW_SERVICE_ACTIONS.SET_SERVICE_HOURS, payload: serviceHours})
  };

  return <NewServiceContext.Provider value={value}>{children}</NewServiceContext.Provider>;
};

