import React from 'react'
import ContextApi from '../ContextApi'
import Menu from './Menu'

const Auth = () => {
  return (
    <ContextApi>
      <Menu />
    </ContextApi>
  );
}

export default Auth
