const add= (n1,n2)=> n1+n2;
const sub= (n1,n2)=> n1-n2;
const mul= (n1,n2)=> n1*n2;
const div= (n1,n2)=> n1/n2;
const calc = (n1, n2, ope)=>{
    return ope(n1,n2)
}
console.log(calc(20,2,add));
console.log(calc(20,2,sub));
console.log(calc(10,20,mul));
console.log(calc(10,20,div));
