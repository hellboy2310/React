class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    welcome(){
        console.log("hello"+this.name);
    }
}

class Teacher extends Person{
    constructor(name,age,classStrength){
        super(name,age);
        this.classStrength = classStrength;
    }
}



let person = new Person("Bhavesh",20);
console.log(person);
person.welcome();


let teacher = new Teacher("hellboy",22,50);
console.log(teacher);

teacher.welcome();