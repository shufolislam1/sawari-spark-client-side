import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import UpdateUser from './UpdateUser';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();


    // const educationRef = useRef('')
    // const locationRef = useRef('')
    // const phoneRef = useRef('')

    const onSubmit = (data) => {
        console.log(data)

        // send data to server
        const url = `http://localhost:5000/info`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Successfully added review')
                // data.target.reset();
            })
    };
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{user?.displayName}</h2>
                    <h2 class="card-title">{user?.email}</h2>
                </div>
            </div>
            <div  class="card w-96 bg-base-100 shadow-xl mt-5">
                <h2 className='p-4 font-bold'>Add</h2>
                <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Education' {...register("education")} />
                    <input className='my-3' placeholder='Location' {...register("location")} />
                    <input placeholder='Phone No.' type="number" {...register("phone")} />
                    <input  className='btn btn-dark btn-sm ml-5' type="submit" value="Add Info" />
                </form>
            </div>
            <UpdateUser></UpdateUser>
        </div>
    );
};

export default MyProfile;