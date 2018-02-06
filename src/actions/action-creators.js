import {
  FILTER_CHANGE,
  RESET_FILTERS
} from './action-types';

export const changeFilter = value => ({
  type: FILTER_CHANGE,
  payload: value
});

export const resetFilters = initialFilters => ({
  type: RESET_FILTERS,
  payload: initialFilters
});
