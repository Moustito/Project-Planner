let tasksTodo = document.getElementsByClassName('card__todo');
console.log(tasksTodo);
let tasksInProgress = document.getElementsByClassName('card__progress');
console.log(tasksInProgress);
let tasksDone = document.getElementsByClassName('card__done');
console.log(tasksDone);


let filterAll = document.getElementsByClassName('filter__all')[0];
let filterTodo = document.getElementsByClassName('filter__todo')[0];
console.log(filterTodo)
let filterProgress = document.getElementsByClassName('filter__progress')[0];
console.log(filterProgress)
let filterDone = document.getElementsByClassName('filter__done')[0];
console.log(filterDone)



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