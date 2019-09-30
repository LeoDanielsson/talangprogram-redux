import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const Page = ({ user }) => (
  <main>
    {user ? <h1>Welcome {user.name}!</h1> : <h1>Yet another to do app 😒</h1>}
    <TodoList />
  </main>
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Page);
