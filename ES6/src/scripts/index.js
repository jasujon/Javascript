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

const obj = {
    name:'Jubayed Alam',
    print:function(){
        setTimeout(() =>{
            console.log(this)
        },1000);
    }

}
obj.print();