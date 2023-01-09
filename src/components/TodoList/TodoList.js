import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodos from '../../redux/todos/thunk/fetchTodos';
import Todo from '../Todo/Todo';

const filterByStatus = (todo, status) => {
  switch (status) {
  case 'Complete':
    return todo.completed;
  case 'Incomplete':
    return !todo.completed;
  default:
    return true;
  }
};

const filterByColor = (todo, colors) => {
  if (colors.length > 0) {
    return colors.includes(todo?.color);
  }
  return true;
};

function TodoList() {
  const todos = useSelector(((state) => state.todos));
  const { status, colors } = useSelector(((state) => state.filters));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {
        todos
          .filter((todo) => filterByStatus(todo, status))
          .filter((todo) => filterByColor(todo, colors))
          .map((todo) => <Todo key={todo.id} todo={todo} />)
      }

    </div>
  );
}

export default TodoList;
