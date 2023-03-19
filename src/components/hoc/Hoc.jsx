import React, { Component } from 'react'

let Hoc = (Wrapper) => {
    return class Hoc extends Component {
      render() {
        return <Wrapper value="hello"></Wrapper>;
      }
    }
}
export default Hoc;
