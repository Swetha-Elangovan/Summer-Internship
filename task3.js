const USER_DATA = [
    {
        ID: 234,
        NAME: "Paxton",
        AGE: 20,
        EMAIL: "do@so.com"
    }
];

//CRUD OPERATIONS

//new user
const add_new_user = {
    ID: 236,
    NAME: "Fab",
    AGE: 22,
    EMAIL: "fab@so.com"
};

//adding the object
const addUser = (new_user) => {
    USER_DATA.push(new_user);
}

//editing the object
const editUser = (id, key, value ) => {
    const userindex = USER_DATA.findIndex((user) => user.ID === id);
    if(userindex != -1){
        USER_DATA[userindex][key]= value;
    }
}

//delete the object
const deleteUser = (id) => {
        const index = USER_DATA.findIndex((user) => user.ID === id);
        if(index != -1){
            USER_DATA.splice(index, 1);
        }
    }

//function calls
addUser(add_new_user);
editUser(236, "AGE", 18);
deleteUser(234);

console.log(USER_DATA);

