import React from "react";

const Ajax = () => {
  // !fetching Api by using Ajax
  let x = new XMLHttpRequest();
  let URL = "https://fakestoreapi.com/products";
  x.open("GET", URL);
  x.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
    data.map(li => console.log(li));
  };
  x.send();

  return <div>Ajax</div>;
};

export default Ajax;
