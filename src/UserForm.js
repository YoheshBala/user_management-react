import React, { useState } from 'react';
import './App.css';

function UserForm({ addUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });
    setName('');
    setEmail('');
};

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <button type="submit">Add User</button>
    </form>
    );
}

export default UserForm;