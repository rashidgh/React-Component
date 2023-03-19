import React, { useContext } from 'react'
import { Provider } from './../ContextApi';

const Logo = () => {
    let data = useContext(Provider);
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Logo
