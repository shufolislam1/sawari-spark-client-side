import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `https://sawari-spark.up.railway.app/order/${id}`

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url).then(res => res.json()))
    console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Hello ,  {order?.email}</h2>
                            <h2 class="card-title">Please Pay for : {order?.productName}</h2>
                            <h2 class="card-title">Shipping to : {order?.address}</h2>
                            <h2 class="card-title">Your Order Quantity is : {order?.minOrder} pc</h2>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;