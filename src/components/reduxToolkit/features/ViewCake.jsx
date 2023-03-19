import React from 'react'
import { order,restock } from './CakeSlice';
import { useDispatch, useSelector } from 'react-redux'

const ViewCake = () => {
    let numberOfIce = useSelector(state => state.ice.nomOfIce);
    let dispatch = useDispatch()
    return (
        <div>
            <h1>num of ice-{numberOfIce}</h1>
            <button onClick={() => dispatch(order())}>buy</button>
            <button onClick={() => dispatch(restock(5))}>restock</button>
        </div>
    )
};

export default ViewCake