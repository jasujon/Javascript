 /*higher-order-function*/



// function base(b){
//  	return function(n){
//  		var result = 1;

//  		for (var i = 0; i < b; i++) {
//  			result *=n;
//  		}
//  		return result;
//  	}
//  }

// var result= base(3)(5);
// console.log(result); 



var arr=[4,5,2,5,7,0];
arr.forEach(function(a){
	console.log(a);
});

/*arother way*/
// var arr=[4,5,2,5,7,0];
// function callback(a){
// 	console.log(a);
// }
// arr.forEach(callback);


function name(){
	return function(caller){
		console.log('Coller Calling You' + caller);
	}
}

var i = name();

var result = i(Jubayed Alam);
console.log(result);


