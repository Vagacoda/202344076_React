import React, { useState } from 'react';
import '../Style02.css';

const CounterPage = () => {

    const [number, setNumber] = useState(1);

    // 1씩 증가
    const onIncrease = () => {
        setNumber(number + 1);
    };

    // 1씩 감소
    const onDecrease = () => {
        setNumber(number - 1);
    };

    return (
        <div className='box'>
            <h1>{number}</h1>

            <button onClick={onDecrease}>감소</button>
            <button onClick={onIncrease}>증가</button>
        </div>
    );
};

export default CounterPage;