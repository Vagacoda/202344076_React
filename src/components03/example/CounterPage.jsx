import React, { useState } from 'react'
import '../Style03.css'

const CounterPage = () => {
    const [number, setNumber] = useState(0);

    const onClickRight = (e) => {
        e.preventDefault();
        setNumber(number - 1);
    }

    return (
        <div className='box'>
            <input
                onChange={(e) => setNumber(parseInt(e.target.value))}
                value={number}
                style={{width:'100px'}}
                type='number'
            />

            <button
                onContextMenu={onClickRight}
                onClick={() => setNumber(number + 1)}
            >
                증감
            </button>
        </div>
    )
}

export default CounterPage