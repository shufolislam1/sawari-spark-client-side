import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`, {
            method: 'PUT'
            // ,
            // headers: {
            //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Successfully Made An Admin')
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{user?.email}</td>
            <td>{user?.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;