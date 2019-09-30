import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = event => {
    event.preventDefault();
    const newTodo = { text: event.target.todo.value, id: new Date().getTime() };
    setTodos([...todos, newTodo]);
    event.target.todo.value = '';
  };

  const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <div>
      <h2>To do list</h2>
      <form onSubmit={handleAddTodo}>
        <input name='todo' />
        <button>Lägg till</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};
