/*---------------------------Function to Function Return------------------------------*/

// function data(){
//     console.log('I am Parent Data');
//     return function(){
//         console.log('I am Child Data');
//     }
//     // return child();
// }
// var a=data();
// console.log(a());



// function greeting(msg){
//     return function(name){
//         console.log(msg + ' ' + name);
//     }
// }

// var good  = greeting('Good Morning');
// var hello = greeting('Hello');

// good('Jubayed Alam');
// hello('Jubayed Alam');


function greeting(msg){
    function ret(name){
        console.log(msg + ' ' + name);
    }
    return ret;
}

var good=greeting('Good Morning');
var hello=greeting('Hello');

good('Jubayed Alam');
hello('Jubayed Alam');