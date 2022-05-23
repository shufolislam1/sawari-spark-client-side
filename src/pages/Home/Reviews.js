import React from 'react';

const Reviews = () => {
    return (
        <div className='grid'>
            <h2 className='text-4xl font-bold justify-self-center mt-4'>Reviews</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4 my-20'>
                <div class="cardb bg-base-100 shadow-xl">
                    <div class="avatar pl-8">
                        <div class="w-32 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Mohammad</h2>
                        <p>Their sevices satisfied me very much.I bought so many things for my bike from this Store.</p>
                    </div>
                    <div class="rating rating-lg">
                        <input type="radio" name="rating-9" class="rating-hidden" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                    </div>
                </div>
                <div class="cardb bg-base-100 shadow-xl">
                    <div class="avatar pl-8">
                        <div class="w-32 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Abdullah</h2>
                        <p>I informed about this store from their head company.This is great to see how caring they are !</p>
                    </div>
                    <div class="rating rating-lg">
                        <input type="radio" name="rating-9" class="rating-hidden" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2"  />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                    </div>
                </div>
                <div class="cardb bg-base-100 shadow-xl">
                    <div class="avatar pl-8">
                        <div class="w-32 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=77703" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">Eshak</h2>
                        <p>I get best oil engine for my bike from this store.And the product is available all time.service is good.</p>
                    </div>
                    <div class="rating rating-lg">
                        <input type="radio" name="rating-9" class="rating-hidden" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                        <input type="radio" name="rating-9" class="mask mask-star-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;