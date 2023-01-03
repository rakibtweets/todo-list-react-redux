import { combineReducers } from 'redux';
import filterReducer from './filters/filtersReducer';
import todosReducer from './todos/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer
});
export default rootReducer;
