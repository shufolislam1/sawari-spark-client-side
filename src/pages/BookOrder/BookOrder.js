import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const BookOrder = () => {
    const { sparkId } = useParams()
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
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
                alert('Order Successfully completed')
            })
    };

    const [singelSpark, setSingelSpark] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/spark/${sparkId}`)
            .then(res => res.json())
            .then(data => setSingelSpark(data))
    }, [sparkId])

    return (
        <div className='grid'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl justify-self-center mt-16">
                <figure><img src={singelSpark?.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Product Name: {singelSpark.name}</h2>
                    <h2 class="card-title">Price: {singelSpark.price_per_unit}</h2>
                    <p>Minimum Order: {singelSpark.minimum_order_quantity} pc</p>
                    <p>Available: {singelSpark.available_quantity} pc</p>
                    <p>Short Description : {singelSpark.short_description}</p>
                </div>
            </div>
            <form className='w-50 mx-autocard card-compact w-96 bg-base-100 shadow-xl justify-self-center my-16 p-4' onSubmit={handleSubmit(onSubmit)}>
                <input disabled {...register("name")} defaultValue={user?.displayName} />

                <input disabled className='my-3' {...register("email")} defaultValue={user?.email} />

                <input placeholder='Adress' {...register("address", { required: true })} />

                <input className='my-3' placeholder='Phone' {...register("phone", { required: true })} />

                <input placeholder='Min. Order' {...register("minOrder", { required: { value: true, message: `Please order Minimum ${singelSpark.minimum_order_quantity} pc.` }, min: singelSpark.minimum_order_quantity, max: singelSpark.available_quantity })} />

                {errors?.minOrder?.type === 'min' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                {errors?.minOrder?.type === 'max' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                
                <input className='btn btn-dark btn-sm ml-5' type="submit" value="Book order" />
            </form>
        </div>
    );
};

export default BookOrder;