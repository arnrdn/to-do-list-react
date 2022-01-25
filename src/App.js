/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).slice(2, 9),
        content: userInput,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      // eslint-disable-next-line max-len
      ...todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })),
    ]);
  };

  let { length } = todos;
  if (length === 0) {
    length = 'no Todos!';
  } else if (length === 1) {
    length = '1 Todo!';
  } else {
    length = `${length} Todo's!`;
  }

  return (
    <div className="todo-app container">
      <h1 className="center purple-text text-darken-4">
        You have
        {' '}
        {length}
      </h1>
      <TodoForm addTask={addTodo} />
      <ul className="todos collection">
        {todos.length ? (todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTodo={handleToggle}
            removeTodo={removeTodo}
          />
        ))) : (
          <p className="center">You have no Todo&apos;s left!</p>
        )}
      </ul>
    </div>
  );
};

export default App;
