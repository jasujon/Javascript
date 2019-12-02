// var name='Jubayed Alam';
// var age=24;
// var skill=['html','css','bootstrap'];
// // console.log(typeof skill);

// var something;
// var anything=null;

// console.log(something === anything);

// console.log(name,age,skill);
// console.log(name);
// console.log(age);
// console.log(skill);


// var age=13;
// if (age >= 20) {
// 	console.log('You can it');
// }else{
// 	console.log('Sorry,You are under 20');
// }

// var name='sujon';

// for (var i=0; i<20; i++) {
// 	console.log(name);
// }

// function add(a,b){
// 	return a+b;
// 	// var c=a+b;
// 	// return c;
// }

// var add=function(a,b){
// 	return a+b;
// }
// console.log(add(10,20));

/*--------------------CALL BACK-----------------------*/

// var names=['one','two','three','four','five'];

// names.forEach(function(name){
// 	console.log(name);
// })

// names.forEach(print);
// function print(name){
// 	console.log(name)
// }

// names.forEach(function(name){
// 	var n=name.toLocaleUpperCase();
// 	console.log(n);
// })

/*function operation(a,b){
	var c=a+b;
	var d=a-b;
	console.log(c,d);
}

operation(10,5);*/

/*function operation(a,b){
	var c=a+b;
	var d=a-b;

	print(c,d);
}

function print(c,d){
	console.log(c,d);
}

operation(10,5)*/
/*---main callback----*/

// function operation(a,b,callback){
// 	var c=a+b;
// 	var d=a-b;

// 	callback(c,d);
// }
// function print(c,d){
// 	console.log(c,d)
// }
// function multiply(c,d){
// 	console.log(c*d);
// }

// // function devyde(c,d){
// // 	console.log(c/d);
// // }




// operation(10,5 , print);
// operation(10,5,multiply);
// operation(10,5, function(c,d){
// 	console.log('devyde ' + (c/d));
// })
// debyde(50,10,devyde);


// var names=['one','two','three','four','five'];
// function traverse(names , callback){
// 	for (var i = 0; i<names.length; i++) {
// 		callback(names[i]);
// 	}
// }

// traverse(names, function(name){
// 	console.log(name.toUpperCase());
// })


/*------------javascript-object------*/

// var person={};
// person.name='Jubayed Alam';
// person.age=24;
// person.print = function(){
// 	console.log(this.name + ' ' + this.age);
// }

// person.print();


// var person = {
// 	name : 'Jubayed Alam',
// 	age  : 24,
// 	skill: ['html,css,javascript-object,php,laravel'],

// 	print:function(){
// 		console.log(this.name, this.age, this.skill);
// 	}
// }

// person.print();

/*------------object - Array ------*/

var person =[
	{
		 name : 'Jubayed Alam',
		 age  :  24,
	},
	{
		 name : 'Sultan Alam',
		 age  :  9,
	}	
];

person.forEach(function(person){
	console.log(person.name);
});



















