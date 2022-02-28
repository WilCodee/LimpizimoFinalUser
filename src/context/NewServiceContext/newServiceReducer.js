import moment from 'moment';
import {NEW_SERVICE_ACTIONS} from './newServiceActions';

const cleanTypes = [
  {
    id: 1,
    title: 'LIMPIEZA NORMAL',
  },
  {
    id: 2,
    title: 'LIMPIEZA PROFUNDA',
  },
];

const serviceTypes = [
  {
    id: 1,
    title: 'Única vez',
  },
  {
    id: 2,
    title: 'Frecuente',
  },
];

export const newServiceInitialState = {
  cleanType: cleanTypes.find(ct => ct.id === 1), //normal o profundo
  serviceType: serviceTypes.find(st => st.id === 1), // unica vez o frecuente
  serviceDays: 1,
  serviceDay: moment(), // dia del servicio
  serviceBeginAt: moment().add(2, 'hours'), //inicio del servicio
  serviceAddress: {}, // dirección del servicio
  serviceHours: 3, // numero de horas
};

export function newServiceReducer(state, action) {
  switch (action.type) {
    case NEW_SERVICE_ACTIONS.SET_CLEAN_TYPE:
        return {
          ...state,
          cleanType: cleanTypes.find(ct => ct.id === action.payload),
        };

    case NEW_SERVICE_ACTIONS.SET_SERVICE_TYPE:
        return {
          ...state,
          serviceType: serviceTypes.find(st => st.id === action.payload),
        };

    case NEW_SERVICE_ACTIONS.SET_SERVICE_DAY:
        return {...state, serviceDay: action.payload};

    case NEW_SERVICE_ACTIONS.SET_SERVICE_BEGIN_AT:
        return {...state, serviceBeginAt: action.payload};

    case NEW_SERVICE_ACTIONS.SET_SERVICE_ADDRESS:
        return {...state, serviceAddress: action.payload};

    case NEW_SERVICE_ACTIONS.SET_SERVICE_HOURS:
        return {...state, serviceHours: action.payload};

    default:
        return prevState;
  }
}
