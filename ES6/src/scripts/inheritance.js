import Person from './person'

class Inheritance extends Person{
    constructor(name,email,id){
        super(name,email)
        this.id =id
    }

    print(){
        super.print();
        console.log(`ID : ${id}`);
    }
}

export default Inheritance