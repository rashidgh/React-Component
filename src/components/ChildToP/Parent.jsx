// import React from 'react'
// import ChildToP from './ChildToP'

// const Parent = () => {
//   let getData = (data) => {
//     console.log(data)
//   }
//   return (
//     <div><ChildToP value={getData} /></div>
//   )
// }

// export default Parent;

// !
import React, { Component } from "react";
import ChildToP from "./ChildToP";

export default class Parent extends Component {
  state = {
    name: "",
  };
  getData = data => {
    this.setState({ name: data });
    console.log(data);
  };
  render() {
    return (
      <div>
        <ChildToP getData={this.getData} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
