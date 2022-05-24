import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateUser = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data)

        // send data to server
        const url = `http://localhost:5000/info`
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
                alert('Successfully added review')
                // data.target.reset();
            })
    };
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <h2 className='p-4 font-bold'>Update</h2>
                <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Education' {...register("education")} />
                    <input  className='my-3' placeholder='Location' {...register("location")} />
                    <input placeholder='Phone No.' type="number" {...register("phone")} />
                    <input className='btn btn-dark btn-sm ml-5' type="submit" value="Add Info" />
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;