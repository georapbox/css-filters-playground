import { FILTER_CHANGE, RESET_FILTERS } from '../actions/action-types';

export const filtersReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_CHANGE:
    case RESET_FILTERS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
