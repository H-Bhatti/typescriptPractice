// let employee : {
//     prop1 : string,
//     prop2 : number
// }
// let var1 = employee = {
//     prop1 : "pakistan",
//     prop2 : 1234
// }
// let var2 = employee = {
//     prop1 : "lou",
//     prop2 : 123
// }
// console.log(var1.prop1)
// let poet : {
//     birthYear : number,
//     name : string
// }
// poet  ={
//     birthYear: 1234,
//     name : "lololol"
// }
// type person  = { 
//     name : string;
//     age : number
// }
// type employee = {
//     name : string,
//     age: number,
//     id: number
// }
// let var1 : employee = {
//     name : "hammad",
//     age : 10,
//     id :12
// }
// console.log(var1)
// let var2 = var1;
// console.log(var2)
var ob = {
    name: "apple",
    age: 09
};
console.log(ob.name);
if (true) {
    ob.name = "apple cahnged";
}
console.log(ob.name);
ob.name = "apple cahnged again";
console.log(ob.name);
var poem1 = Math.random() < 0.5 ? { name: "hammad ", pages: 7 } :
    { name: "jonny bravo ", rhymes: true };
console.log(typeof poem1.rhymes);
