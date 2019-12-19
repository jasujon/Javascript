/*---------------------Javascript Prototype---------------------------*/
function Person(name,age){
     this.name = name;
     this.age  = age;

     
}
Person.prototype.hello = function(){
     console.log('Hello ' + this.name);
}

Person.prototype.email='Jubayedalamsujon@gmail.com';

var p1=new Person('Jubayed Alam',24);
var p2=new Person('Israk Jahan' , 18);

console.log(p1);
console.log(p2);