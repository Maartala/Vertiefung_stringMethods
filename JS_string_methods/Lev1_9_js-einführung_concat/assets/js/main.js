const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and"; 


let var1 = text1.slice(0,16).concat(text1.slice(22)).concat(" ").concat(text3).concat(" to the movie theater");
console.log(var1);

let var2 = text1.slice(0,16).concat("movie theater");
console.log(var2);

let var3 = text2.concat(" ").concat(text3).concat(" ").concat(text1.slice(0,4)).concat("are").concat(text1.slice(6,16)).concat(text1.slice(22));
console.log(var3)

let var4 =  text2.concat(" ").concat(text3).concat(" ").concat(text1.slice(0,4)).concat("are").concat(text1.slice(6,16)).concat("gym ").concat(text3).concat(" the movie theater");
console.log(var4);

let var5 = text2.concat(text1.slice(3,16)).concat(text1.slice(22)).concat(" ").concat(text3).concat(" to the movie theater");
console.log(var5);