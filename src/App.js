import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;