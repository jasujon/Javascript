/*---------------------Javascript Foreach Function Implementation----------------------*/

var arr=[1,2,3,4,5];

// arr.forEach(function(element ,index,arr){
//     console.log('Element is ' + element + ' Index is = ' +index + ' Arr Is' + arr);
// })

function loop(element,callback){
    for(var i=0; i<arr.length ;i++){
        callback(arr[i]);
    }
}

loop(arr,function(element){
    console.log('Element is ' + element)
});