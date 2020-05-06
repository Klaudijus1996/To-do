'use strict';
// render TODO list items

function renderList(list) {
    const listPlace = document.querySelector('.container');
    let HTML = '';


    for (let i=0;i<list.length;i++) {
        const todoItem = list[i];
        console.log(todoItem.description);

        HTML += `
                <div class="item">
                    <div class="status ${todoItem.tod}"></div>
                    <p class="description">${todoItem.description}</p>
                    <div class="deadline">${todoItem.deadline}</div>
                </div>
                `;
    }

    return listPlace.innerHTML += HTML;

}

renderList(todo_list)

// for (let i=0;i<todo_list.length;i++){
//     const todo = todo_list[i]
//     const sentence = `darbas kuri reikia padaryti yra "${todo.description}" ir ji reikia atlikti iki "${todo.deadline}" siuo metu yra busenoje ${todo.status}`;
//     console.log(sentence);
    
// }



// console.log(todo_list);


















// const people = [
//     {
//         name: 'Mynde',
//         age: 30,
//     },
//     {
//         name: 'Al Pacino',
//         age: 80,
//     },
//     {
//         name: 'Chuck Norris',
//         age: 75,
//     },
//     {
//         name: 'Bruce Lee',
//         age: 45,
//     }
// ];

// for (let i=0;i<people.length;i++) {
//     const person = people[i]; 
// } if (person.alive) {
//     console.log(`${person.name} prigere ant ${person.age}`);
// } else {
//     console.log(`${person.a}`);
    
// }






// const people = [
//     {
//         name: 'Chuck Norris',
//         age: 75,
//         alive: true
//     },
//     {
//         name: 'Johny Bravo',
//         age: 30,
//         alive: false
//     },
//     {
//         name: 'Al Pachino',
//         age: 80,
//         alive: true
//     },
//     {
//         name: 'Bruce Lee',
//         age: 45,
//         alive: false
//     }
// ];

// for ( let i=0; i<people.length; i++ ) {
//     const person = people[i];

//     if ( person.alive ) {
//         console.log(`${person.name} is ${person.age} age.`);
//     } else {
//         console.log(`${person.name} is dead.`);
//     }

// }