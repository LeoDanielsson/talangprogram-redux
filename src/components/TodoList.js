import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { addTodo } from '../actions';

const TodoList = ({ dispatch, todos }) => {
  const handleAddTodo = event => {
    event.preventDefault();
    dispatch(addTodo(event.target.todo.value));
    event.target.todo.value = '';
  };

  const deleteTodo = id => dispatch(deleteTodo(id));

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input name='todo' />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps)(TodoList);
