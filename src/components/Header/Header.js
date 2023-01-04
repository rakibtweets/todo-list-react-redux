import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tickImage from '../../assets/images/double-tick.png';
import notesImage from '../../assets/images/notes.png';
import plusImage from '../../assets/images/plus.png';
import { addedTodo, allCompleted, clearCompleted } from '../../redux/todos/actions';

function Header() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addedTodo(input));
    setInput('');
  };
  const completeAllTodos = () => {
    dispatch(allCompleted());
  };
  const ClearAllCompletedTodos = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8   bg-no-repeat bg-contain"

        >
          <img src={plusImage} alt="" srcSet="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={completeAllTodos}
          className="flex space-x-1 cursor-pointer"
        >
          <img
            className="w-4 h-4"
            src={tickImage}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={ClearAllCompletedTodos} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}

export default Header;
