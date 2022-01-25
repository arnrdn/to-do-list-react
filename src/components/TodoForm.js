/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <label className="input-field">
        Add new todo:
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="What do you want to do?"
        />
        <button type="submit" className="btn right findbtn purple darken-4">Add</button>
      </label>
    </form>
  );
};

export default TodoForm;
