/*------------------------Javascript(class)Constructor Pattern--------------------*/

// function Person(){
//     console.log('I am Constructed');
// }
// Person();
// var p1=new Person();

function Person(name,email){
    this.name = name;
    this.email=email;
    this.print= function(){
        console.log('name = ' + this.name);
    }
}

var p1=new Person('Jubayed Alam','jubayedalamsujon@gmail.com');
var p2=new Person('Jubayed Alam','jubayedalamsujon@gmail.com');
var p3=new Person('Jubayed Alam','jubayedalamsujon@gmail.com');
var result=[p1 , p2 , p3];
// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);
// console.log(p2);
// console.log(result);
result.forEach(function(person){
    console.log('Email : ' + person.email);
    person.print();
})

