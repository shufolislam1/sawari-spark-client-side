import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfileInfo = ({ add }) => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <h2 className='p-4 font-bold'>Save Your Info</h2>
                <div class="card-body">
                    <h2 class="card-title">Name:   {user?.displayName}</h2>
                    <h2 class="card-title">Email:   {user?.email}</h2>
                    <h2 class="card-title">Education:   {add?.education}</h2>
                    <h2 class="card-title">Location:   {add?.location}</h2>
                    <h2 class="card-title">Phone:  {add?.phone}</h2>
                </div>
            </div>
        </div>
    );
};

export default MyProfileInfo;