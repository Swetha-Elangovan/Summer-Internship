//De-structuring - Unpacking

//array destructuring
let arrnum=[10,20,30,40,50,60,70];
let [a, b, c, d, e] = arrnum;
console.log(e)

let arrnum1=[10,20,30,40,50,60,70,80];
let [a1, b1, , c1, d1, ...e1] = arrnum1; // , , - skip a element & ...e1-rest operator
console.log(e1)

//object destructuring
const o1={
    nam:"sece",
    year:2021,
    year:2025,
    city:"CBE",
    fees:5000,
    color:"Blue"
};

let {nam: clgname, year, city, ...anything}=o1;
console.log(clgname, year, city, anything);

let {nam: clgname, year, city, color="green", size="829"}=o1;
console.log(clgname, year, city, color, size);
