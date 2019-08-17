const fs = require('fs');


let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const loadDB = () => {
    try{
        toDoList = require('../db/data.json')
    }
    catch(err){
        toDoList = [];
    }
    return toDoList
}

const deleteDB = (description) =>{
    loadDB();
    let index = toDoList.findIndex(task =>{
        return task.description === description;
    })
    if(index>=0){
        toDoList.splice(index,1);
        saveDB();
        return true;
    }else{
        return false;
    }
}

const updateDB = (description,completed=true) =>{
    loadDB();
    let index = toDoList.findIndex(task =>{
        return task.description === description;
    })
    if(index>=0){
        toDoList[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }

}

const create = (description) => {

    let toDo = {
        description,
        completed: false
    };
    loadDB();
    toDoList.push(toDo);
    saveDB();
    return toDoList;
}



module.exports = {
    create,
    loadDB,
    updateDB,
    deleteDB
}