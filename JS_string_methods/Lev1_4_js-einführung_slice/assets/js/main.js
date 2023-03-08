const A = 'Susi is going to codingschool';

let var1 = A.slice(0,4);
console.log(var1)

let var2 = A.slice(5,7);
console.log(var2);

let var3 = A.slice(5,16)+ " " + A.slice(23);
console.log(var3);

let var4 = A.slice(23);
console.log(var4);

let var5 = A.slice(0,7)+ " " + A.slice(23);
console.log(var5); 

document.write(var1 + "<br>" + var2 + "<br>" + var3 + "<br>" + var4 + "<br>" + var5 + "<br>")