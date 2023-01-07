import { todoLoaded } from '../actions';

const fetchTodos = async (disptach) => {
  const response = await fetch('http://localhost:9000/todos');
  const todos = await response.json();
  disptach(todoLoaded(todos));
};

export default fetchTodos;
