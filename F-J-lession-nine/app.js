/*--------------------------array sort------------------------------*/
//cuto tkhe boro in accending order
// var array = [3,10,55,34,1,5,76,100];

// array.sort();
// array;



//boro tkhe cuto in accending order
// var array = [3,10,55,34,1,5,76,100];

// array.sort(function(a,b){
//     return b-a;
// });
// array;

//cuto tkhe boro in decending order
// var array = [3,10,55,34,1,5,76,100];

// array.sort(function(a,b){
//     return a-b;
// });
// array;


/*another way sorted by object Array*/


var people = [
    {name  : 'Jubayed Alam', age : 24},
    {name  : 'Sultan Alam', age : 9},
    {name  : 'NM Babor', age : 26},
    {name  : 'Mohiuddin Shaown', age : 28},
    {name  : 'Mokammel Hossen', age : 20}
]

people.sort(function(a,b){
    return a.age - b.age;
});
console.log(people);


