import { deleteTodo } from '../actions';

const deleteSingleTodo = (todoId) => async (disptach) => {
  await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'DELETE',
  });
  disptach(deleteTodo(todoId));
};
export default deleteSingleTodo;
