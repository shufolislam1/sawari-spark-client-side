import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ singelOrder }) => {
    // console.log(singelOrder);
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Product Name: {singelOrder.productName}</h2>
                    <h2 class="card-title">Order Quantity: {singelOrder.minOrder} pc</h2>
                    <div class="card-actions">
                        <Link to={`payment/${singelOrder._id}`}> <button class="btn btn-dark mt-3">Pay Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;