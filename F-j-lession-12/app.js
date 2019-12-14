/*-----------------------Javascript Map Function-------------------------*/

var arr=[1,2,3,4,5,6,7];

// var newArr=[];
// for(var i = 0; i<arr.length ; i++){
//     newArr.push(arr[i] + 2);
// }

// console.log('Total Arr = ' + newArr);



// var newArr=arr.map(function(value){
//     return value + 2;
// })
// console.log(newArr);


function map (arr,callBack){
    var newArr= [];
    for(var i=0 ; i<arr.length ; i++){
        newArr.push(callBack(arr[i]));
    }
    return newArr;
}

var result=map(arr,function(value){
    return value+2;
})

console.log('Last Result = ' + result);