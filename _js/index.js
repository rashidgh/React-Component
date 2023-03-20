// let arr = [1, 3, 2, 1, 2, 4, 9];
// let empt = [];
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] == arr[i]) {
//       count++;
//     }
//   }
//   if (count == 1) {
//     empt.push(arr[i]);
//   }
// }
// console.log(empt);

// function Parent() {
//   let x = 10;
//   let y = 20;
//   function A() {
//     console.log(x)
//   }
//   function B() {
//     console.log(y)
//   }
// }

// function X(a,b,c,d) {

// }
// console.log(X.length);

// function Y() {
//     let a = 10;
//     let b = 20;
//     function A() {
//         console.log(a)
//     }
//     function B() {
//         console.log(b);
//     }
//     return[A,B]
// }
// let r = Y();
// r[0]();
// r[1]();

// class Car {
//     constructor(owner,color,model){
//         this.owner = owner;
//         this.model = model;
//         this.color = color;
//     }
// }
// class Bike extends Car {
//   constructor(owner, color, model, price) {
//     super(owner, color, model);
//     this.price = price;
//   }
// }
// let a = new Bike("Rashid", "white", "fortuner", "5000000");
// console.log(a);

// let fData = async() => {
//     let data = await window.fetch("https://fakestoreapi.com/products");
//     let fData = await data.json();
//     console.log(fData);
// }
// fData();

// let fData = async () => {
//     let {data} = await axios.get("https://fakestoreapi.com/products");
//     console.log(data)
// }
// fData()

// let arr = { fruit:"apple", fruit2:"mango",fruit3: "banana", fruit4:"cherry"};
// for (let a in arr) {
//     console.log(a)
// }

// !new map():

// let obj ={ename:"Rashid",10:"hello"};
// let a = Object.entries(obj);
// console.log(a[0]);

// let arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "peter" },
//   { id: 3, name: "Hello" },
// ];

// var result = arr.find(li => li.id == 2);
// console.log(result.name);

// let arr = [
//   { id: "1", name: "rashid" },
//   { id: "2", name: "aliston" },
//   { id: "3", name: "das" },
// ];
// let b = arr.find(li => li.id == 3);
// console.log(b.id);

// let json = {
//     "ename": "Rashid",
//     "company": "testyantra"
// };
// let a = Object.entries(json);
// console.log(a[0]);

// let arr = [8, 1, 2, 3, 4, 5];
// let a = arr.sort(function (a, b) {
//   return a < b;
// });
// console.log(a);

// const obj = { ename: "rashid", comp: "testYantra", city: "Banglore" };

// let a = Object.assign({}, obj);
// a.ename = "hello";

// let b = JSON.parse(JSON.stringify(obj));
// b.ename="hii"

// console.log(obj);
// console.log(b);

// let tObj = { en: "Rashid" };
// let kv={company:"TYSS"}
// let x=Object.assign(tObj, kv);
// console.log(tObj)
// x.en="demo "
// console.log(x);

// let emp = {
//     en: "SHiva"
// };
// emp.en = "patil";
// console.log(emp);
// console.log(emp);

// let obj = { ename: "rashid" };

// ! new Map()
// let x = new Map([
//   ["name", "Rashid"],
//   ["id", 123],
// ]);
// console.log(x);//Map(2) {'name' => 'Rashid', 'id' => 123}

// x.set("city", "Pune");
// console.log(x)//Map(3) {'name' => 'Rashid', 'id' => 123, 'city' => 'Pune'}

// console.log(x.get("city"));//Pune

// x.delete("city");
// console.log(x);//Map(2) {'name' => 'Rashid', 'id' => 123}

// x.clear()
// console.log(x);//Map(0) {size: 0}


// ! new Set()

// let emp = {
//   eName: "Rashid",
//   id: 13456,
// };
// console.log(new Map(Object.entries(emp)));

// let y = new Set([10, 20, 20, 30, 30, 40, 50, 50, 60]);
// console.log(y)

// y.add("Rashid");
// console.log(y);

// y.clear();
// console.log(y);
// y.delete(10);
// console.log(y)


