function car(Name,Model,Color){
    this.name = Name;
    this.model = Model;
    this.color = Color;


this.test = function(){
    console.log(` I am driving ${this.model}`);
}

}

let car1 = new car('BMW','X6',"white");
console.log(car1);
car1.test();


let car2 = new car('mercedes','s class','red');
console.log(car2);