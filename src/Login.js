import React, { useState } from 'react';

export default () => {
  const [user, setUser] = useState();

  const handleLogin = event => {
    event.preventDefault();
    setUser({ name: event.target.name.value });
  };

  const handleLogout = () => setUser(null);

  if (!user) {
    return (
      <form onSubmit={handleLogin}>
        <input name='name' />
        <button>Logga in</button>
      </form>
    );
  }

  return (
    <div>
      {user.name} <button onClick={handleLogout}>Logga ut</button>
    </div>
  );
};
