const info = require('./info.json');

console.log(info);
console.log(info.Name);
console.log(info.Address);
console.log(info.Address.District);

const k = Object.keys(info);
for(let i=0;i<k.length;i++){
    const val = k[i];
    if (typeof info[val] === 'object')
    {
        console.log(val, info[val]);
    } 
}
