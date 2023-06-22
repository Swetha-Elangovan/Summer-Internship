const array=[1,2,3,4,5];
const array2 = array;
array2[3]=500;
console.log(array);
console.log(array2);

const array3 =[...array]; //shallow copy
array3[3]=4;
console.log(array);
console.log(array3);
