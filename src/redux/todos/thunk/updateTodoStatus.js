import { toggled } from '../actions';

const updateTodoStatus = (todoId, currentStatus) => {
  return async (disptach) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !currentStatus
      }),
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    });
    const todo = await response.json();
    disptach(toggled(todo.id));
  };
};
export default updateTodoStatus;
