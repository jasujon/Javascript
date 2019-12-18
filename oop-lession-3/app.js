/*---------------------------Javascript This Keyword and Bind Method--------------------*/

// var obj = {
//     name  : 'Jubayed Alam',

//     print : function(){
//         // console.log(this.name);
//         console.log(this);
//     }
// }

// obj.print();



// function person(){
//     // console.log(this);
//     function inner(){
//         console.log(this);
//     }
//     inner();
// }



// function person(){
//     // console.log(this);
//     function inner(){
//         console.log(this);
//     }
//     new inner();
// }
// person();



// var person = {
//     'name'  : 'Jubayed Alam',

//     'print' : function(){
//         console.log(this.name);
//     }
// }

// // person.print();
 
// var myPrint = person.print.bind(person);

// console.log(myPrint);


/*-----------------for bind -----------------*/
// function add(num) {
//     return this.value + num
// }
// var obj = {
//     'value' : 30
// }
// var obj1 = {
//     'value' : 20
// }
// var binded= add.bind(obj);
// var result=binded(10);
// result;

/*-----------------for delay some seceand -----------------*/

var person = {
    name : 'Jubayed Alam',

    print : function() {
        setTimeout(function(){
            console.log(this);
            console.log('Hello' + this.name);
        }.bind(this),2000);
    }
}