import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        // send data to server
        const url = `sawari-spark.up.railway.app/review`
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
                toast.success('Successfully added review')
            })
    };
    return (

        <div class="card w-96 bg-base-100 shadow-xl mt-5">
            <h2 className='p-4 font-bold'>Add Review</h2>
            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Description' {...register("description")} />
                <input placeholder='Ratings out of 5' className='my-3' type="number" {...register("ratings", { min: 1, max: 5 })} />
                <input className='btn btn-dark btn-sm ml-5' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;