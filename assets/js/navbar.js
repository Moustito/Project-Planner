let tasksTodo = document.getElementsByClassName('card__todo');
let tasksInProgress = document.getElementsByClassName('card__progress');
let tasksDone = document.getElementsByClassName('card__done');


let filterAll = document.getElementsByClassName('filter__all')[0];
let filterTodo = document.getElementsByClassName('filter__todo')[0];
let filterProgress = document.getElementsByClassName('filter__progress')[0];
let filterDone = document.getElementsByClassName('filter__done')[0];



//CREATING THE FILTER

//ADD EVENT ON "ALL" BUTTON
filterAll.addEventListener('click', () =>{
    let cardsParents = document.getElementsByClassName('task__cards')[0];
    let allCards = cardsParents.children;
    for (let card of allCards) {
        if(card.classList.contains("task__card")){
            card.style.display="block"
        }
    }
})

//ADD EVENT ON "TO DO" BUTTON
filterTodo.addEventListener('click', () =>{
    let cardsParents = document.getElementsByClassName('task__cards')[0];
    let allCards = cardsParents.children;
    for (let card of allCards) {
        if(card.classList.contains("card__todo")){
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    }
})

//ADD EVENT ON "PROGRESS" BUTTON
filterProgress.addEventListener('click', () =>{
    let cardsParents = document.getElementsByClassName('task__cards')[0];
    let allCards = cardsParents.children;
    for (let card of allCards) {
        if(card.classList.contains("card__progress")){
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    }
})

//ADD EVENT ON "DONE" BUTTON
filterDone.addEventListener('click', () =>{
    let cardsParents = document.getElementsByClassName('task__cards')[0];
    let allCards = cardsParents.children;
    for (let card of allCards) {
        if(card.classList.contains("card__done")){
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    }
})