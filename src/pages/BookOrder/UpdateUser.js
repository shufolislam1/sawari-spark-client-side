import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { register, handleSubmit } = useForm();
    const {userId} = useParams()

    const onSubmit = (data) => {
        console.log(data)

        // send data to server
        const url = `http://localhost:5000/info/${userId}`
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
                <h2>Update</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("education")} />
                    <input {...register("location")} />
                    <input type="number" {...register("phone")} />
                    <input type="submit" value="Add Info" />
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;