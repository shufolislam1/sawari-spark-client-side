import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import MyProfileInfo from './MyProfileInfo';
import UpdateUser from './UpdateUser';

const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [addInfo, setAddInfo] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/info`)
        .then(res => res.json())
        .then(data => setAddInfo(data))
    } ,[])

    const onSubmit = (data) => {

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