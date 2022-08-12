
let allClosedCards= document.querySelectorAll('.task__card__closed');
let allCards= document.querySelectorAll('.task__card')
let allOpenedCards= document.querySelectorAll('.task__card__opened');


// function showCard (){
//     allClosedCards.forEach(card => {

//         allOpenedCards.forEach(openCard => {
//             openCard.classList.toggle('task__card__opened');
            
//         });

//     });
// }
const clickOnCards = (e) =>{
    var card = e.target.classList;
    console.log(card)
    allClosedCards.forEach(card => {

        allOpenedCards.forEach(openCard => {
            openCard.classList.toggle('task__card__opened');
            console.log('click');
            
        });

    });
}
// allCards.forEach(card => {
//     card.addEventListener('click', showCard)
// });

// clickOnCards();

for (let card of allClosedCards) {
    card.addEventListener('click', clickOnCards)
}

