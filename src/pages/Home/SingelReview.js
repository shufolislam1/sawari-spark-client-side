import React from 'react';

const SingelReview = ({ singelReview }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Description: {singelReview.description}</h2>
                    <p>{singelReview.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default SingelReview;