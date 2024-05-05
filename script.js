const choices = {
    rock: 'Rock',
    paper: 'Paper',
    scissors: 'Scissors'
};

let scores = {
    player: 0,
    bot: 0
};

function updateScores() {
    document.getElementById('botScore').textContent = scores.bot;
    document.getElementById('playerScore').textContent = scores.player;
}

function determineWinner(playerChoice, botChoice) {
    if (playerChoice === botChoice) {
        return 'tie';
    }
    if ((playerChoice === 'Rock' && botChoice === 'Scissors') ||
        (playerChoice === 'Paper' && botChoice === 'Rock') ||
        (playerChoice === 'Scissors' && botChoice === 'Paper')) {
        scores.player++;
        updateScores();
        return 'You win';
    } else {
        scores.bot++;
        updateScores();
        return 'Bot wins';
    }
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.textContent;
        const botChoice = choices[Object.keys(choices)[Math.floor(Math.random() * 3)]];
        document.getElementById('botChoice').textContent = botChoice;
        document.getElementById('winner').textContent = determineWinner(playerChoice, botChoice);
    });
});
