import React from 'react'
import Hoc from './Hoc';
const Child = (props) => {
    console.log(props)
  return (
    <div>{props.value}</div>
  )
}

export default Hoc(Child);