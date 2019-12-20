/*--------------------------Javascript Inheritance with Prototype-------------------------*/

// function Person() {
//     this.name = 'Jubayed Alam'
// }

// function Subject() {
//     Person.call(this);
//     this.subject ='JavaScript';
// }

// var subject = new Subject();

// var name = subject.name;
// console.log(name);

function Person(name) {
    this.name = name;
}

Person.prototype.printName = function(){
    console.log('name ' + this.name);
}

Person.prototype.another = function(){
    console.log('This is another Prototype');
}

function Student(name,id) {
    Person.call(this, name);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor =Student;
var student =new Student(' Jubayed Alam',1245);


