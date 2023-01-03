import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes';
import initialState from './initialState';

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case STATUS_CHANGED:
    return {
      ...state,
      status: payload
    };

  case COLOR_CHANGED: {
    const { color, changeType } = payload;
    switch (changeType) {
    case 'added':
      return {
        ...state,
        colors: [
          ...state.colors,
          color
        ]

      };
    case 'removed':
      return {
        ...state,
        colors: state.colors.filter((existingColor) => existingColor !== color)
      };

    default:
      return state;
    }
  }

  default:
    return state;
  }
};

export default filterReducer;
