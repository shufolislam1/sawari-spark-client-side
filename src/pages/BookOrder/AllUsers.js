// import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    // const[allUser, setAllUser] = useState([])
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://sawari-spark.up.railway.app/user`
    , 
    {
        method: 'GET'
        // ,
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }
    ).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* <h2>all users: {users.length}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;