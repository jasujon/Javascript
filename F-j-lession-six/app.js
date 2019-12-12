/*---------------------Call-Back------------------------------*/

// function myName(name){
//     print(name);
//     print('Something Else');
// }
// function print(any){
//     console.log(any); 
// }
// myName('Jubayed Alam');





// function myName(name,print){
//      print(name);
// }

// myName('Jubayed Alam',print);

// function print(name){
//     console.log(name);
// }





// function myName(name,print){
//     print(name);
// }
// myName('Jubayed Alam', function(name){
//     console.log('Hello ' + name);
// })
// myName('Abdul Alim',function(name){
//     console.log('Hello ' + name);
// })
// myName('Good Morning ', function(name){
//     console.log(name+'Jubayed Alam ' ); 
// })
// myName('Good Afternoon',function(name){
//     console.log('leangth of ' + name + ' is ' + name.length);
// })





// var me={
//     name : 'Jubayed Alam',
//     age  :  18,
//     email: 'jubayedalamsujon@gmial.com',
// }

// function printmyself(person, callBack){
//     console.log('Person ' + person.name + ' Age ' +person.age);

//     if(person.age >=18){
//         callBack(person.email);
//     }else{
//         console.log('You are too small');
        
//     }
// }
// printmyself(me,function(email){
//     console.log('Email Send to ' + email);
    
// })






function print(data,callBack1,callBack2){
    console.log('Original Data' + data);
    callBack1(data);
    callBack2(data);
}

print(' Hello My name is Jubayed alam',function(data){
    var data = data.toUpperCase();
    console.log('UpperCase' + data);
},function(data){
    var data=data.toLowerCase();
    console.log('LowerCase' +data);
});

