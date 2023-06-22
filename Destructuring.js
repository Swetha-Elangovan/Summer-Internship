//De-structuring - Unpacking
let arrnum=[10,20,30,40,50,60,70];
let [a, b, c, d, e] = arrnum;
console.log(e)

let arrnum1=[10,20,30,40,50,60,70,80];
let [a1, b1, , c1, d1, ...e1] = arrnum1; // , , - skip a element & ...e1-rest operator
console.log(e1)
