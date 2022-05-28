import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

const UpdateUser = () => {
    const { register, handleSubmit } = useForm();
    // const [user] = useAuthState(auth)


    const onSubmit = (data) => {
        console.log(data)

        // send data to server
        const url = `https://lit-sands-04163.herokuapp.com/info`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Successfully updated Info')
                // data.target.reset();
            })
    };
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl my-5">
                <h2 className='p-4 font-bold'>Update</h2>
                <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Education' {...register("education")} />
                    <input  className='my-3' placeholder='Location' {...register("location")} />
                    <input placeholder='Phone No.' type="number" {...register("phone")} />
                    <input className='btn btn-dark btn-sm ml-5' type="submit" value="Update Info" />
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;