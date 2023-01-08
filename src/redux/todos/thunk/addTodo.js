import { toggled } from '../actions';

const addTodo = (todoText) => {
  return async (disptach) => {
    const response = await fetch('http://localhost:9000/todos', {
      method: 'POST',
      body: JSON.stringify({
        text: todoText,
        completed: false
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    });
    const todo = await response.json();
    disptach(toggled(todo.id));
  };
};

export default addTodo;
