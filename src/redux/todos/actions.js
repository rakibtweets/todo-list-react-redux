import {
  ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED
} from './actionTypes';

export const todoLoaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const addedTodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,

  };
};

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
  };
};
