import React, { useEffect, useState } from 'react';
import SingelReview from './SingelReview';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='grid'>
            <h2 className='text-4xl font-bold justify-self-center mt-4'>Reviews</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 my-8'>
                {
                    reviews?.map(singelReview => <SingelReview
                        key={singelReview._id}
                        singelReview={singelReview}
                    ></SingelReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;