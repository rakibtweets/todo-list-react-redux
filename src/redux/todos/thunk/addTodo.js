import { addedTodo } from '../actions';

const addTodo = (todoText) => async (disptach) => {
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
  disptach(addedTodo(todo.text));
};
export default addTodo;
