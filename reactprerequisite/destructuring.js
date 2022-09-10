// let arr = [1,2,4];
// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];

// let [a,b=10,c,d=0] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let obj = {
//     name:"bhavesh",
//     state:"Gujarat",
//     pincode:380051
// }
// let {name:firstname,state} = obj;
// console.log(firstname);
// console.log(state);

//nested obj
let obj = {
    name:"Bhavesh",
    address:{
        country:"INDIA",
        state:{
            stateName:"gujarat",
            pincode:380051
        }
    }
}

let {name} = obj;
console.log(name);

let{address:{country:cd}} = obj;
console.log(cd);

let {address:{state:{stateName:sn}}} = obj;
console.log(sn);