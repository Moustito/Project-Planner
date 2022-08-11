let todoCardClosed = document.getElementsByClassName('card__todo__closed')[0];
console.log(todoCardClosed);

let todoCardOpened = document.getElementsByClassName('card__todo__opened')[0];
console.log(todoCardOpened);

// const openCardTodo = todoCardClosed.map(card =>
//     card.addEventListener('click', () =>{
//         card.className.toggle('card__todo_opened')
//     }) )

    todoCardClosed.addEventListener('click', () =>{
        todoCardOpened.style.visibility= 'visible';
    })

    // todoCardOpened.style.visibility = "visible";