const ab = fetch ("https://jsonplaceholder.typicode.com/todos/");
ab
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>{console.log('error', error)});
console.log(ab);
