import { FILTER_CHANGE, RESET_FILTERS } from '../actions/action-types';
import initialFilters from '../components/Filters/lib/initialValues';

const filtersReducer = (state = initialFilters, action) => {
  switch (action.type) {
    case FILTER_CHANGE:
    case RESET_FILTERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default filtersReducer;
