let names=["anie", "ben", "cis", "dee", "firoz"];

console.log(names.slice(2,4));
console.log(names);

console.log(names.splice(2,2));
console.log(names);

let arr=[1,2,3.5,"def"];

arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr[1]);

let l=[1,2,3.5,"def", (n1)=>n1*5, {a:1, b:2, c:3, say_hello:()=>"hello"}];

console.log(l[4](4));
console.log(l[5].c);
console.log(l[5].say_hello());

let g=[1,2,3.5,"def", [4,5,6], (n1)=>n1*5, {a:1, b:2, c:3, say_hello:()=>"hello"}];

console.log(g[4][2]);

for (const key in g[4]) {
    console.log(key, g[4][key]);
}

let arr2=[1,2,3];

g.push(arr2);
console.log(g);

arr2.push(4,5);
console.log(arr2);
