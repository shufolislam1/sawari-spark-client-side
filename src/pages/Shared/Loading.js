import React from 'react';
import './Loading.css'

const Loading = () => {

    return (
        <div className="flex items-center justify-center my-40">
            <div className="half-circle-spinner">
                <div className='circle circle-1'></div>
                <div className='circle circle-2'></div>
            </div>
        </div>
    );
};

export default Loading;