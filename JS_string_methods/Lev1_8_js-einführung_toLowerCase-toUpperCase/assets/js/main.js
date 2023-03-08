const text = "Sam is going to codingschool";

let var1 = text.slice(0,16).toUpperCase().concat(text.slice(22).toUpperCase());
console.log(var1);

// =========sam is going at school==================

// let var2 = text.slice(0,16).toLowerCase().concat(text.slice(22).toLowerCase()).concat(text.replace("to", "at"));
// console.log(var2);

// let var2 = text.replace("to codingschool", "at school").concat(text.toLowerCase());
// console.log(var2);

let var2 = text.slice(0,16).toLowerCase().concat(text.slice(22).toLowerCase())

var2 = var2.replace("to", "at")

console.log(var2);


let var3 = text.slice(0,4).toUpperCase().concat(text.slice(4,16).concat(text.slice(22).toUpperCase()));
console.log(var3);

let var4 = text.slice(0,3).toLowerCase().concat(text.slice(3,16).toUpperCase()).concat(text.slice(22).toLowerCase());
console.log(var4);

let var5 = text.slice(0,4).concat(text.slice(4,5).toUpperCase()).concat(text.slice(5,6)).concat(text.slice(6,8).toUpperCase()).concat(text.slice(8,13)).concat(text.slice(13,14).toUpperCase()).concat(text.slice(14,16)).concat(text.slice(22,23).toUpperCase()).concat(text.slice(23));
console.log(var5);

document.write(var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>" + var5 + "<br>")