
/*----------------------First-Class-Function-----------------------*/

function sayName(name){
	console.log("Hello " + name)
}


// 1. A Function can be stored in a Variable  -------passed---------
	
	var hello=sayName;
	// var fun=sayName('Jubayed Alam');
	// console.log(hello);
	// console.log(fun);

	// console.log(hello('Jubayed Alam'));

	var anotherHello = hello;
	console.log(anotherHello('Jubayed Alam'));
	// var result=anotherHello('Jubayed Alam');
	// console.log(result);



// 2. A Function can be stored in an Array     -------passed---------


		// ----- function store in array ------
	// var array=[1,2,3,4,5];
	// array . push(sayName);
	// console.log(array);
		// ----- function store in array another way------
	 var array=[1,2,3,4,5,sayName];
	 array . push(sayName);
	 console.log(array);


// 3. A Function can be stored as an Object Field or Property    -------passed---------

	var obj = {
		name: 'Jubayed Alam',
		/*function call*/
		sayName:hello,
		/*or*/
		print:function(){
			console.log('hi')
		}

	}
	console.log(obj);
// 4. We can create function as needed     -------passed---------

	var sum= 10 + (function(){return 20})();
	console.log(sum);


// 5. We can pass function as an arguments        -------passed---------

	function wow(name,fun){
		return fun(name);
	}

	var result=wow('Jubayed Alam' , sayName);
	console.log(result);

// 6. We can return function from another function      -------passed---------

	function base(b){
		return function(n){
			var result=1;

			for (var i = 0; i < b; i++) {
				result *=n;
			}
			return result;
		}
	}

	// var power= base(2);
	// var result=power(10);
	// console.log(result);
	/*another way result*/

	var result = base(3)(5);
	console.log(result); 