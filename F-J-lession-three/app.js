/*Javascript Inner Function*/

function add(a,b){
	function sum(){
		return a+b;
	}

	function sub(){
		return a-b;
	}

	function mul(){
		return a*b;
	}

	function div(){
		return a/b;
	}

	return sum()+sub()+mul()+div();
}

var result= add(10,5);
console.log(result);