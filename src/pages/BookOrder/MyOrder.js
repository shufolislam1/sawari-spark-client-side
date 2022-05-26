import React from 'react';

const MyOrder = ({singelOrder}) => {
    console.log(singelOrder);
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Product Name: {singelOrder.productName}</h2>
                    <h2 class="card-title">Order Quantity: {singelOrder.minOrder} pc</h2>
                    <div class="card-actions">
                        <button class="btn btn-dark mt-3">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;