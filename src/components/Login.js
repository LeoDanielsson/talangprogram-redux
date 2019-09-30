import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from '../actions';

const Login = ({ dispatch, user }) => {
  const handleLogin = event => {
    event.preventDefault();
    dispatch(logIn(event.target.name.value));
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  if (!user) {
    return (
      <form onSubmit={handleLogin}>
        <input name='name' />
        <button>Log in</button>
      </form>
    );
  }

  return (
    <div>
      {user.name} <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Login);
