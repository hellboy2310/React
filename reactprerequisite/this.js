
// console.log(this);

// function abc(){
//     console.log(this);
// }
// abc(); //function invocation


let obj = {
    name:"bhavesh",
    age:20,
    def: function(){
        // console.log(this);
    function klm(){
        console.log(this);
    }
    klm();
    }
}

obj.def();//method invocation

let ghi = obj.def;
ghi();//function invocation