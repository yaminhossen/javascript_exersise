function show() {
  console.log('This is amaging');
}
// setTimeout(show, 1000);
// setInterval(show, 1000);


// 
function greet(name, back) {
  console.log("Hello, " + name + "!");

  // Call the callback function after greeting
  back();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Pass the sayGoodbye function as a callback to the greet function
//   greet("John", sayGoodbye);

function first(n, p) {
  console.log("Hi this is " + n + " whats up!")
  p();
}
function second() {
  console.log("I am fine")
}
first("Yamin", second)

// function name(){
//     console.log("ki obostha")
// }
// setTimeout(() => {
//     console.log("tskfjkdsjfkl")
// }, 3000);

// let name = "KJLJKLJLJL";
// // let newdata = name.toUpperCase();
// console.log(name.toLowerCase())

// var numbers = [1, 2, 3];
// var letters = ['a', 'b', 'c'];
// // var combined = [...numbers, ...letters];
// var combined = numbers.concat(letters);
// console.log(combined);
// var num = [2, 4, 5, 6];
// // num.push(3);
// // num.shift();
// // num.unshift(2)
// const namee = num.filter((n) =>n%2 === 0 );
// console.log(namee)
// var fruits = ['apple', 'banana', 'orange'];
// // for (var i = 0; i < fruits.length; i++) {
// //   // console.log(fruits[i]);
// // }
// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i])
// }
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// fruits.forEach((f) => console.log(f));
// });

// var numbers = [1, 2, 3, 4, 8];
// var sum = numbers.reduce((acc, curr)=> acc + curr);
// // console.log(sum);

// let n = [3, 4, 5];
// let n2 = ['w', 'e', 't'];
// // let n3 = n.concat(n2);
// let n3 = [...n,...n2]
// console.log(n3)
// let nn = n.join('j')
// let nn= n.unshift(1,4)
// console.log(n)


//  object manipulation

// let person = {
//   name:'yamin',
//   age: 25,
//   city:'Dhaka'
// }
// // person['age']= 26
// person.city = 'Mirpur1'
// person.job = 'developer'
// person.job = ''
// delete person.job;
// // console.log(person)
// // for(var key in person){
// //   console.log(key + ':'+person[key])
// // }
// // let keys = Object.values(person)
// Object.freeze(person)
// person.city = 'pagol'
// console.log(person)

// setTimeout(()=>{
//   console.log('this is time out')
// },2000)

// function time(){
//   console.log('thsi si uamin')
// }
// setTimeout(time, 3000)
// if (!window.fetch) {
//   require('whatwg-fetch');
// }
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// function greet(name, callback) {
//   var message = 'Hello, ' + name + '!';
//   console.log('thsis f')
//   callback(message);
// }

// function sayMessage(message) {
//   console.log(message);
// }

// greet('John', sayMessage);

// dom mmmmmmmmmmmmmmm
/* var button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
  // Code to be executed when the button is clicked
  console.log('Button clicked!');
});

var input = document.getElementById('myInput');

input.addEventListener('keydown', function(event) {nside the input
  console.log('Key pressed!');
}); */

// let names = ['a','j','l'];
// let games = ['s','e','t']
// let copy = [...names,...games]
// console.log(copy)
// let a = "d"
// let b = 2
// // if(a === "d" && b==="2"){
// //   console.log("its ok")
// // }else{
// //   console.log("this is false")
// // }
// let c = b === "2"? 'this is string': 'thsi is num';
// // console.log(c)
// fetch('kfdsjdlsfjdlf')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error => console.log(error))

// how to data collect from form
/*
// html file
<form id="myForm" onsubmit="validateForm(event)">
  <input type="text" id="name" placeholder="Name" required>
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Submit</button>
</form>

// js file
function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (email === '') {
    alert('Please enter your email address.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (password === '') {
    alert('Please enter a password.');
    return;
  }

  submitForm(name, email, password);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm(name, email, password) {
  console.log('Form submitted!');
} */

// try {
//   // Code that may throw an error
//   var result = kfjdkf + 3;
//   console.log(result); // This line will not execute
// } catch (error) {
//   // Handling the error
//   console.log("An error occurred: " + error.message);
// }

// try{
//   let nn = djkfjdk/3;
//   console.log(m);
// }catch(error){
//   console.log('Find an error:', error.message)
// }
// var message = "Hello";
//  let m = message.toUpperCase();
// console.log(m)
// function summ(...n){
//   let a = n;
//   return a;
// }
// console.log(summ(3,4,5));

// let age = 33;
// let result = (age >= 33)? "You are adult":"You are kid";
// console.log(result)

// for(let i=0; i<=10; i++){
//   console.log(i)
// }

let array = [3, 4, 5];
let objcc = {
  name: 'uamin',
  age: '24'
};
// for( let a of array){
//   console.log(a)
// }
// for( let a in objcc){
//   console.log(objcc[a])
// }
// array.forEach((a)=>console.log(a))
//  let asa = array.map((a)=> {
//   return a;
// })
// console.log(asa)
let date = new Date();
let yyyy = date.toISOString().slice(0, 10)
let yyyyy = date.toLocaleDateString()
let yyyyyy = date.toTimeString()
let year = date.getFullYear();
let seconds = date.getSeconds();
let day = date.getDate()
let hours = date.getHours()
let mounth = date.getMonth()
// console.log(date.toDateString(),year,seconds, day,hours,mounth)
console.log(yyyyy)

const getFile = (jjj) =>{
  return jjj.slice(jjj.lastIndexOf('.'))
}
console.log(getFile('jjjj.html'));