import { colorSelected } from '../actions';

const updateColorSelected = (todoId, changedColor) => async (disptach) => {
  const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      color: changedColor
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    }
  });
  const todo = await response.json();
  disptach(colorSelected(todo.id, todo.color));
};
export default updateColorSelected;
