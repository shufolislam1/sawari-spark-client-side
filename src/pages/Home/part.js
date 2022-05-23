import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
const handleBookOrder = (sparkId) => {
    navigate(`/spark/${sparkId}`)
}

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={part.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Product Name: {part.name}</h2>
                    <h2 class="card-title">Price: {part.price_per_unit}</h2>
                    <p>Minimum Order: {part.minimum_order_quantity} pc</p>
                    <p>Available: {part.available_quantity} pc</p>
                    <p>Short Description : {part.short_description}</p>
                    <div class="card-actions">
                        <button onClick={() => handleBookOrder((part._id))} class="btn btn-primary">Book Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;