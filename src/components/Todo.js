import React from 'react';

/* eslint-disable react/prop-types */
const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <li className="collection-item row valign-wrapper">
    <label className="col s10" htmlFor={todo.id}>
      <input id={todo.id} type="checkbox" className="filled-in" onClick={() => toggleTodo(todo.id)} />
      <span
        className={todo.complete ? 'item-text-strike' : 'item-text'}
      >
        {todo.content}
      </span>
    </label>
    <button
      type="submit"
      className="btn-small right col s2 findbtn"
      onClick={() => removeTodo(todo.id)}
    >
      Delete

    </button>
  </li>
);

export default Todo;
