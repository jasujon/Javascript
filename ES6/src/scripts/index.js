import '../style/index.scss';

/*-----------------------------Let vs Const vs Var Keyword----------------*/
// const x=10;
// // x=25;
// console.log(x);

// const arr=[];
// arr.push(10);
// arr.push(20);
// console.log(arr);

/*---------------------------------ES6 - Template String And Multi line String---------------------*/

// const name ='Jubayed Alam';
// const age = 25
// const email = 'jubayedalamsujon@gmail.com';

// // const details = 'Name: ' +name + ' Age: ' +age + ' Email: ' +email;
// const details = `name: ${name} ; age : ${age} ; email : ${email}`
// console.log(details);

/*----------------------------ES6 - Arrow Function---------------*/

// function print(){

// }

// var print=function(){

// }

// const print=()=>{
//     console.log('Hello Jubayed Alam');
// }

// print();

// const addMe=(a,b)=>{
//     return a+b;
// }

// const result= addMe(10,10);
// console.log(result)

/*-------------------------------ES6 - Lexical This -----------------------*/
// const obj = {
//     name:'Jubayed Alam',
//     print:function(){
//         setTimeout(function(){
//             console.log(this)
//         }.bind(this),1000);
//     }

// }
// obj.print();

// const obj = {
//     name:'Jubayed Alam',
//     print:function(){
//         setTimeout(() =>{
//             console.log(this)
//         },1000);
//     }

// }
// obj.print();


/*-------------------------------ES6 - Enhance Object | New Object Syntax -------------------*/
// let name = ' Jubayed Alam';
// let email = 'jubayedalamsujon@gmail.com';

// // var Person = {
// //     name : name,
// //     email: email

// // }

// const Person = {
//     name,
//     email,
//     print(){
//         console.log('Hello',this.name, this.email);
//     }
// }
// Person.print();

/*------------------------- ES6 - Destructuring Array And Object Details---------------------*/

// const arr=[1,2,3];
// // var a = arr[0]
// // var b = arr[2]

// // let[a, ,c]=arr;
// // console.log(a);
// // console.log(c);

// const Obj = {
//     name : 'Jubayed Alam',
//     email: 'jubayedalamsujon@gmail.com',
// }

// // let name = Obj.name;
// // let email= Obj.email;

// // console.log(name);
// // console.log(email);
// let {name,email} = Obj;
// console.log(name,email)

/*------------------------- ES6 - Module---------------------*/
// import * as module from './module';
// console.log(module.add(10,20));
// console.log(module.sub(20,10));

// import {add,mul} from './module';
// console.log(add(10,10));
// console.log(mul(10,10))




/*------------------------- ES6 - Class---------------------*/
// import Person from './person';
// let person=new Person('Jubayed Alam','jubayedalamsujon@gmail.com');
// console.log(person);


/*--------------------------ES6 - Classes And Inheritance----------------------*/
// import Inheritance from './Inheritance';

// let result = new Inheritance('Jubayed Alam','jubayedalamsujon@gmail.com' , 2020);
// console.log(result);

/*--------------------------ES6 - Promise----------------------*/

let myFirstPromise = new Promise((resolve,reject)=>{
    let name = 'Jubayed Alam'
    // resolve(name)
    setTimeout(()=> resolve(name) , 3000);
})
// console.log(myFirstPromise);

myFirstPromise .then((name)=>{
    console.log('My Name is ' + name)
})