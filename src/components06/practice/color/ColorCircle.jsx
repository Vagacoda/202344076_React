import React, {useContext} from 'react'
import {ColorContext} from "./ColorContext";

const ColorCircle = () => {
    const {state} = useContext(ColorContext)
    return (
        <div>
            <div className='big' style={{background:state.big}}/>
            <div className='small'/>
        </div>
    )
}

export default ColorCircle;