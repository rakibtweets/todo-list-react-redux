import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../../redux/filters/actions';

const numOfTodos = (todoNum) => {
  switch (todoNum) {
  case 0:
    return 'No task left';

  case 1:
    return '1 task left';

  default:
    return `${todoNum} tasks left`;
  }
};

function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filters);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (filterStatus) => {
    dispatch(statusChanged(filterStatus));
  };

  const handleColorChange = (changedColor) => {
    if (colors.includes(changedColor)) {
      dispatch(colorChanged(changedColor, 'removed'));
    } else {
      dispatch(colorChanged(changedColor, 'added'));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>
        {numOfTodos(todosRemaining)}
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange('All')}
          className={`cursor-pointer ${status === 'All' && 'font-bold'}`}
        >
          All

        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange('Incomplete')}
          className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}

        >
          Incomplete

        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange('Complete')}
          className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}

        >
          Complete

        </li>
        <li />
        <li />
        <li
          onClick={() => handleColorChange('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
        />
        <li
          onClick={() => handleColorChange('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
        />
        <li
          onClick={() => handleColorChange('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
        />
      </ul>
    </div>
  );
}

export default Footer;
