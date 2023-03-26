const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    // Add matched class to both cards
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    // Play sound
    const matchSound = document.getElementById('match-sound');
    matchSound.currentTime = 0; // Reset audio to start if already playing
    matchSound.play();

    resetBoard();

    // Check if all cards are matched
    const allMatched = document.querySelectorAll('.memory-card.matched').length === 12;

    if (allMatched) {
        // Show reset pop-up
        alert('Congratulations! You have matched all the cards. Click OK to play again.');
        
        // Reset game
        cards.forEach(card => {
            card.classList.remove('flip', 'matched');
            card.addEventListener('click', flipCard);
        });

        shuffle();
    }
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));