import React from "react";

const Promisee = () => {
  let p1 = new Promise((res, rej) => {
    res("resolve1");
  });
  let p2 = new Promise((res, rej) => {
    res("resolve2");
  });
  let p3 = new Promise((res, rej) => {
    rej("rejected3");
  });

  // !Promise.all:
  // Promise.all([p1, p2, p3])
  //   .then(val => console.log(val))
  //   .catch(err => console.log(err));

  // !Promise.allSetteled:
  // Promise.allSettled([p1, p2, p3])
  //   .then(val => console.log(val))
  //   .catch(err => console.log(err));

  // !Promise.race:
  // Promise.race([p1, p2, p3])
  //   .then(val => console.log(val))
  //   .catch(err => console.log(err));

    // !Promise.any:
  // Promise.any([p1, p2, p3])
  //   .then(val => console.log(val))
  //   .catch(err => console.log(err)); 

  // !Promise.reject:
  // Promise.reject([p1, p2, p3])
  //   .then(val => console.log(val))
  //   .catch(err => console.log(err));
  return <div>Promise</div>;
};

export default Promisee;
