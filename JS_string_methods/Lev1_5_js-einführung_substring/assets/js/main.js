const text = 'Susi is back from codingschool';

let var1 = text.substring(0,5);
console.log(var1);

let var2 = text.substring(5,7);
console.log(var2);

let var3 = text.substring(24);
console.log(var3);

let var4 = text.substring(0,7) + " " + text.substring(24);
console.log(var4);

document.write(var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>")