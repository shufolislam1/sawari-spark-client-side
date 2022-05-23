import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookOrder = () => {
    const { sparkId } = useParams()
    // const {id} = useParams()
    // console.log(id);

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
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookOrder;