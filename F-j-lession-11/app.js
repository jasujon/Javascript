/*---------------------------Javascript Filter Function------------------*/

var arr=[1,2,3,4,5,6,7];

// var newArr=[];

// for(var i= 0; i<arr.length ; i++){
//     if(arr[i]%2 == 1){
//         newArr.push(arr[i]);
//     }
// }
// console.log('New Array = ' + newArr);


// var newArr=arr.filter(function(value){
//     return value%2 ==0;
// });
// console.log(newArr);

function myFilter(arr,callBack){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(callBack(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var result=myFilter(arr, function(value){
    return value % 2 == 1;
})

console.log('My Array = ' + result);

