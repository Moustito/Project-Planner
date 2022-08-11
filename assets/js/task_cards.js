let cards = document.getElementsByClassName('task__cards')[0];
let todoCard= document.getElementsByClassName('card__todo')[0];
let todoCardClosed = document.getElementsByClassName('card__todo__closed')[0];
let todoCardOpened = document.getElementsByClassName('card__todo__opened')[0];
let progressCardOpened = document.getElementsByClassName('card__progress__opened')[0];
let doneCardOpened = document.getElementsByClassName('card__done__opened')[0];

//FUNCTION TO DISPLAY AND HIDE THE DETAILS OF THE TASKS
function showCardTodo(){
    todoCardOpened.classList.toggle('task__card__opened');
}

cards.addEventListener('click', showCardTodo);

