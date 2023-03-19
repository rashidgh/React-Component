import React from 'react'
import Url from './Url'

const CustomHook = () => {
    let value = Url("https://fakestoreapi.com/products");
    console.log(value);
  return (
    <div>CustomHook</div>
  )
}

export default CustomHook