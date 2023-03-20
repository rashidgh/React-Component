// import React from "react";

// const ChildToP = props => {
//   props.value("hii");

//   return <div>ChildToP</div>;
// };

// export default ChildToP;

// !
import React, { Component } from 'react'

export default class ChildToP extends Component {
  constructor(props) {
    super(props)
  
   this.props.getData("hii")
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
