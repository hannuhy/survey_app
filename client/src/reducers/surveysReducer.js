import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    case DELETE_SURVEY:
      const index = state.findIndex(survey => survey._id === action.payload);
      if (index > -1) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      } else {
        return state;
      }
    default:
      return state;
  }
}