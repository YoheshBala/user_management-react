import React, { useState } from 'react';
import './App.css';

function UserTable({ users, deleteUser, editUser }) {
    const [isEditing, setIsEditing] = useState(null);
    const [currentUser, setCurrentUser] = useState({ name: '', email: '' });

    const handleEdit = (user) => {
    setIsEditing(user.id);
    setCurrentUser({ name: user.name, email: user.email });
};

const handleEditSubmit = (e) => {
    e.preventDefault();
    editUser(isEditing, currentUser);
    setIsEditing(null);
};

return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
            <td>
                {isEditing === user.id ? (
                <input
                type="text" value={currentUser.name}
                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                />) : ( user.name)}
            </td>
            <td>
                {isEditing === user.id ? (
                <input
                type="email" value={currentUser.email}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                />) : ( user.email )}
            </td>
            <td>
                {isEditing === user.id ? (
                <button onClick={handleEditSubmit}>Save</button>) : ( <button onClick={() => handleEdit(user)}>Edit</button>)
                }
                <button onClick={() => deleteUser(user.id)} className='delete'>Delete</button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    );
}

export default UserTable;