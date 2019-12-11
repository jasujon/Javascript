
/*-----------return statement---------*/

// function name (firstname,lastname,gender){
// 	if (gender === 'male') {
// 		var output = 'Mr.' + firstname + ' ' + lastname;
// 		return output;
// 	}else if(gender === 'female'){
// 		var output = 'mrs.' + firstname + ' ' + lastname;
// 		return output;
// 	}
// }

// var fullname=name('Jubayed ','Alam','female');
// console.log(fullname);


/*another way */
// function name(firstname,lastname,gender){
// 	var output;

// 	if (gender === 'male') {
// 		output='Mr . ' + ' ' +firstname+ ' '+lastname;
// 	}else{
// 		output='Mrs . ' + ' ' +firstname+ ' '+lastname;
// 	}
// 	return output;
// }

// var fullname=name('Jubayed','Alam','female');
// console.log(fullname);

/*return another function */

function person(){
	return{
		name : 'Jubayed Alam',
		age  :  24,
		print: function(){
			console.log(this.name,this.age);
		}
	}
}

var obj=person();
obj.print();