/*------------------------Javascript Bind Call and Apply Method---------------------*/

// function person() {
//     console.log('Hello ' + this.name);
// }

// var obj1  =  {
//     name  : 'Jubayed Alam',
//     age   :  22,
// }

// var obj2  =  {
//     name  : 'Israk Jahan',
//     email : 'israkjahan@gmail.com', 
// }

// var binded = person.bind(obj1);
// var binded2 = person.bind(obj2);
// binded();
// binded2();
 
//  person.call(obj1);
//  person.call(obj2);


function person(a,b) {
    return (a+b) * this.c;
}

var obj1 = {
    c : 2
}
var obj2 ={
    c :5
}

var result = person.call(obj1 , 2,2);
result;
var apply = person.apply(obj2,[2,3]);
apply;
var binded= person.bind(obj2);
console.log(binded(2,2));

