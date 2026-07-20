import { v4 as uuidv4 } from 'uuid';

let users = []
 export const createUser = (req,res)=>{
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user,id:userId};
    users.push(userWithId);
    res.send(`User with the name ${user.name} added to the database`);
}

export const getUser = (req,res)=>{
    res.json(users);
}

export const getId = (req,res)=>{
    const {id} = req.params;
    const found = users.find((user)=>user.id===id);
    res.send(found);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=>user.id!=id);
    res.send(`User with the id${id} deleted from the database`);
}

export const UserUpdated = (req,res)=>{
    const {id} = req.params;
    const {name,lastname , age} = req.body;
    const userToUpdated = users.find((user)=>user.id === id);
    if(name) userToUpdated.name = name;
    if(lastname) userToUpdated.lastname = lastname;
    if(age) userToUpdated.age = age;
    res.send(`User witht the id${id} has been updated`);

}