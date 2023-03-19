

import React from 'react'
import ChildToP from './ChildToP'

const Parent = () => {
  let getData = (data) => {
    console.log(data)
  }
  return (
    <div><ChildToP value={getData} /></div>
  )
}

export default Parent

