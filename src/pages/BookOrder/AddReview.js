import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
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
            .then(result => {
                console.log(result);
                alert('Successfully added review')
                data.target.reset();
            })
    };
    return (
        <div className='divide-y-4 divide-slate-400/25'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("description")} />
                    <input type="number" {...register("ratings", { min: 1, max: 5 })} />
                    <input type="submit" value="Add Spark" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;