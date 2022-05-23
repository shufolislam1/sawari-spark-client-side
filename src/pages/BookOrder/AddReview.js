import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) =>{ 
        console.log(data)

        // send data to server
        const url = `http://localhost:5000/spark`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result => {
            console.log(result);
        })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("description")} />
                <input type="number" {...register("ratings", { min: 1, max: 5 })} />
                <input type="submit" value="Add Spark" />
            </form>
        </div>
    );
};

export default AddReview;