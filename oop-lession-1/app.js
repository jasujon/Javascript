/*------------------------------Javascript Basic Object Creation------------------------*/

// var obj={};
// var obj1 =new Object;

// console.log(obj);
// console.log(obj1);


var book = {
    name     : 'Bangla Book',
    author   : 'Jubayed Alam',
    publiser : 'Jubayed Alam',
    page     :  255,

    print    : function(){
        console.log(this.name,this.author);
        
    } 
}

// console.log(book);
// book.print();

book.publishedYear =2002;
// console.log('Published Year = ' + book.publishedYear);

// console.log('Book Name = ' + book.name);      //Dot Notation
// console.log('Author Name = ' + book['author']);    
 //Bracket Notation

 for(var props in book){
     console.log(props);
 }



