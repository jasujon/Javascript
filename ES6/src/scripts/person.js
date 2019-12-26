class Person{

    constructor(name,email){
        this.name = name
        this.email=email
    }
    print(){
        console.log(`Name : ${name} , Email : ${email}`);
    }
}

export default Person