import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    console.log(myOrders);

    useEffect(() => {
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                myOrders?.map(singelOrder => <MyOrder
                    key={singelOrder._id}
                    singelOrder={singelOrder}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;