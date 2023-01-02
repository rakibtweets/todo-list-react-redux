import {
    ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLORSELECTED, DELETED, TOGGLED
} from './actionTypes';
import initialState from './initialState';

const nextTodoId = (todos) => {
  const maxIdNo = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
  return maxIdNo + 1;
};

// eslint-disable-next-line no-unused-vars
const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case ADDED:
    return [
      ...state,
      {
        id: nextTodoId(state)
      }
    ];

  case TOGGLED:
    return state.map((todo) => {
      if (todo.id !== payload) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed

      };
    });

  case COLORSELECTED: {
    const { todoId, color } = payload;
    return state.map((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
      return {
        ...todo,
        color
      };
    }); }

  case DELETED: {
    return state.filter((todo) => todo.id !== payload);
  }

  case ALL_COMPLETED: {
    return state.map((todo) => {
      return {
        ...todo,
        completed: true
      };
    });
  }

  case CLEAR_COMPLETED: {
    return state.filter((todo) => !todo.completed);
  }

  default:
    return state;
  }
};

export default todosReducer;
