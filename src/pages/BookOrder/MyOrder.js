import React from 'react';

const MyOrder = ({singelOrder}) => {
    console.log(singelOrder);
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                {/* <figure class="px-10 pt-10">
                    <img src={singelOrder.img} alt="Shoes" class="rounded-xl" />
                </figure> */}
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{singelOrder.productName}</h2>
                    <h2 class="card-title">{singelOrder.minOrder}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;