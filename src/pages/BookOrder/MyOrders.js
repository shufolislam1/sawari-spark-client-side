import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const [user] = useAuthState(auth)
    console.log(myOrders);

    useEffect(() => {
        if(user){
            fetch(`https://lit-sands-04163.herokuapp.com/order?email=${user?.email}`
            // , 
            // {
            //     method:'GET',
            //     headers: {
            //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
            )
            .then(res => res.json())
            .then(data => setMyOrders(data))
        }
    }, [user])
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