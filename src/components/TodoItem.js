import React from 'react';

export default ({ todo, onDelete }) => (
  <li>
    {todo.text} <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);
