import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState({})
    console.log(myOrders);

    useEffect(() => {
        fetch('http://localhost:5000/spark')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])
    return (
        <div>
            {/* {
                myOrders?.map(singelOrder => <MyOrder
                    key={singelOrder._id}
                    singelOrder={singelOrder}
                ></MyOrder>)
            } */}
            {/* console.log(my); */}
        </div>
    );
};

export default MyOrders;