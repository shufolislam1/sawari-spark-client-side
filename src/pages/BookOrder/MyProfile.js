import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyProfileInfo from './MyProfileInfo';
import UpdateUser from './UpdateUser';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [addInfo, setAddInfo] = useState([])
    // console.log(addInfo);
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://lit-sands-04163.herokuapp.com/info?email=${user?.email}`, {
            method: 'GET'
            // ,
            // headers: {
            //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setAddInfo(data))
    }, [user])

    const onSubmit = (data) => {

        // send data to server
        const url = `https://lit-sands-04163.herokuapp.com/info`
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
                toast.success('Successfully added Info')
            })
    };
    return (
        <div>
            {
                addInfo?.map(add => <MyProfileInfo
                    key={add._id}
                    add={add}
                ></MyProfileInfo>)
            }
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <h2 className='p-4 font-bold'>Add</h2>
                <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-3' {...register("email")} defaultValue={user?.email} />
                    <input placeholder='Education' {...register("education")} />
                    <input className='my-3' placeholder='Location' {...register("location")} />
                    <input placeholder='Phone No.' type="number" {...register("phone")} />
                    <input className='btn btn-dark btn-sm ml-5' type="submit" value="Add Info" />
                </form>
            </div>
            <UpdateUser></UpdateUser>
        </div>
    );
};

export default MyProfile;