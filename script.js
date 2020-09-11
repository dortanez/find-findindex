// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUsername(arr, value) {
    const result = arr.find(function(el) {
        return el.username === value;
    })
    return result;
}

// const users = [
// {username: 'mlewis'},
// {username: 'akagen'},
// {username: 'msmith'}
// ];

// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// findUserByUsername(users, 'taco') // undefined



// Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined.

function removeUser(arr, value) {
    const result = arr.findIndex(function(el) {
        return el.username === value;
    })
    if(result === -1) return;
    return arr.splice(result,1)[0]
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined