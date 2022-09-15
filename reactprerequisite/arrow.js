// let regfun = function(a,b){
//     console.log(a + b);
// }

// regfun(2,3);


// let add = (a,b) =>{
//     console.log(a + b);
// }

// add(3,3);


// let arrowfunction = () =>{
//     console.log(this);
// }
// arrowfunction();

let obj = {
    name:"Bhavesh",
    age:20,
    showDetails:function(){
        console.log(this.name + " "+this.age);
    },
    showDetailsArrow:()=>{
        console.log(this);
        console.log(this.name + " "+this.age);
    }

}
obj.showDetails();
obj.showDetailsArrow();