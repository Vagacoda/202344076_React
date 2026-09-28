import React, { useState, useReducer, useRef } from 'react'
import '../Style05.css'

const ACTION_TYPE = {
    deposit:'입금',
    withdrawal:'출금',
    interest:'이자',
    close:'해지'
}

const initState = 10000; //초기 잔액
const rate = 0.1; //이율

const BankPage = () => {
    const [amount, setAmount] = useState(initState);

    const reducer = (state, action) => {
        const amount = parseInt(action.amount)

        switch (action.type) {
            case ACTION_TYPE.deposit:
                return state + amount;

            case ACTION_TYPE.withdrawal:
                if (state < amount) {
                    alert('There is not enough balance')
                    return state;
                }
                return state - amount;

            case ACTION_TYPE.interest:
                return state + (state * rate);

            case ACTION_TYPE.close:
                if(window.confirm('Are you sure to close?')){
                    return 0;
                }
                return 0;

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className='box'>
            <h1>잔액:{parseInt(state).toLocaleString()}원</h1>
            <div>
                <span>금액:</span>
                <input
                    onChange={(e)=>setAmount(e.target.value)}
                    value={amount}
                    placeholder='금액' type='number' step={1000}/>
            </div>
            <div>
                <button
                    onClick={()=>dispatch({
                        type:ACTION_TYPE.deposit,
                        amount
                    })}
                >입금</button>

                <button
                    onClick={()=>dispatch({
                        type:ACTION_TYPE.withdrawal,
                        amount
                    })}
                >출금</button>

                <button
                    onClick={()=>dispatch({
                        type:ACTION_TYPE.interest
                    })}
                >이자</button>

                <button
                    onClick={()=>dispatch({
                        type:ACTION_TYPE.close
                    })}
                >해지</button>
            </div>
        </div>
    )
}

export default BankPage