import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookOrder = () => {
    const {sparkId} = useParams()
    // const {id} = useParams()
    // console.log(id);

    const [singelSpark, setSingelSpark] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/spark/${sparkId}`)
        .then(res => res.json())
        .then(data => setSingelSpark(data))
    }, [])
    return (
        <div>
            <h2>{singelSpark.name}</h2>
        </div>
    );
};

export default BookOrder;