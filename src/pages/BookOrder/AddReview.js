import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
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
                data.target.reset();
            })
    };
    return (

        <div class="card w-96 bg-base-100 shadow-xl mt-5">
            <h2 className='p-4 font-bold'>Add Review</h2>
            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Description' {...register("description")} />
                <input placeholder='Ratings out of 5' className='my-3' type="number" {...register("ratings", { min: 1, max: 5 })} />
                <input className='btn btn-dark btn-sm ml-5' type="submit" value="Add Spark" />
            </form>
        </div>
    );
};

export default AddReview;