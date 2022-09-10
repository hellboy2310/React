// let arr = [1,2,3,4,5];

// let arr2 = [...arr];
// arr2[2] = 7;
// console.log(arr);
// console.log(arr2);



let obj = {
    name:"Bhavesh",
    address:{
        country:"USA",
        state:{
            stateName:"gujarat",
            pincode:380051
        }
    }
}

//shallow copy

let obj2 = {...obj};
// obj2.address.state.stateName = "hellboy";

// console.log(obj.name);
// console.log(obj2.name);

//deep copy
let obj3  = JSON.parse(JSON.stringify(obj));
obj3.address.country = "japan";

console.log(obj.address.country);
console.log(obj3.address.country);

