import React, { useEffect, useState } from 'react';
import Part from './part'

const Parts = () => {
    const [parts, setParts] = useState()

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold ml-auto'>Tools</h2>
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