import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/spark')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])
    return (
        <div>
            <h2>my orders: {myOrders.length}</h2>
        </div>
    );
};

export default MyOrders;