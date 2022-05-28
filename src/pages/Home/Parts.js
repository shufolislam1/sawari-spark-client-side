import React, { useEffect, useState } from 'react';
import Part from './Part'

const Parts = () => {
    const [parts, setParts] = useState()

    useEffect(() => {
        fetch('https://lit-sands-04163.herokuapp.com/spark')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='grid'>
            <h2 className='text-4xl font-bold justify-self-center mt-4'>Tools</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;