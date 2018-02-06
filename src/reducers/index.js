import { combineReducers } from 'redux';
import { reducer as formReducer }from 'redux-form';
import { filtersReducer } from './filters-reducer';

const rootReducer = combineReducers({
  filters: filtersReducer,
  form: formReducer
});

export default rootReducer;
