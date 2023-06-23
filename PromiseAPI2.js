const apiCall = async() => {
    const promisefromapi = fetch ("https://jsonplaceholder.typicode.com/todos/");
    const data = await promisefromapi.json();
    console.log(data);
}
