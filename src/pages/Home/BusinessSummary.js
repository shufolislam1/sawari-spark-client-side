import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='grid my-32'>
            <h2 className='text-4xl font-bold justify-self-center my-4 uppercase'>Happy Clients </h2>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-12'>
                <div className='grid justify-items-center mt-6'>
                    <div class="card bg-base-100 shadow-md">
                        <div class="card-body">
                            <h2 class="card-title">6000 +</h2>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className='grid justify-items-center mt-6'>
                    <div class="card bg-base-100 shadow-md">
                        <div class="card-body">
                            <h2 class="card-title">1600 +</h2>
                            <p>Feedbacks Given</p>
                        </div>
                    </div>
                </div>
                <div className='grid justify-items-center mt-6'>
                    <div class="card bg-base-100 shadow-md">
                        <div class="card-body">
                            <h2 class="card-title">3200 +</h2>
                            <p>Reviews Given</p>
                        </div>
                    </div>
                </div>
                <div className='grid justify-items-center mt-6'>
                    <div class="card bg-base-100 shadow-md">
                        <div class="card-body">
                            <h2 class="card-title">4000 +</h2>
                            <p>Current Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;