import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class Portal extends Component {
  render() {
      return ReactDOM.createPortal(
          <h1 style={{ height: "100px", width: "100px", backgroundColor: "red" }}></h1>,
          document.getElementById("other_root")
    )
  }
}