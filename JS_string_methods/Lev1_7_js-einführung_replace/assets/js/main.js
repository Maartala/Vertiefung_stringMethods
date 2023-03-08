const text = "Sam is good at codingschool";

let var1 = text.replace("good", "bad").replace("codingschool", "school");
console.log(var1);

let var2 = text.replace("Sam", "Susi").replace("codingschool", "school");
console.log(var2);

let var3 = text.replace("codingschool", "tennis")
console.log(var3);

document.write(var1 + "<br>" + var2 + "<br>" + var2 + "<br>")