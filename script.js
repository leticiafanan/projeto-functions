const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const humanChoice = document.querySelector('.choice-human')
const machineChoice = document.querySelector('.choice-machine')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())



}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log(human + 'maquina' + machine)

    if (human === machine) {
        result.innerHTML = 'Deu empate! &#x1F610;'
        result.style.color = 'rgb(0,0,0)';
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou! &#128515;'
        result.style.color = 'rgb(28, 184, 28)';
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu! &#128532;'
        result.style.color = 'rgb(255, 0, 0)';
    }

    if (human === 'paper') {
        humanChoice.innerHTML = ('Você escolheu: &#9995;')
    }
    if(human === 'rock') {
        humanChoice.innerHTML = ('Você escolheu: &#9994;')
    }
    if(human === 'scissors') {
        humanChoice.innerHTML = ('Você escolheu: &#9996;')
    }

    if(machine === 'paper') {
        machineChoice.innerHTML = ('O adversário escolheu: &#9995;')
    }
    if(machine === 'rock') {
        machineChoice.innerHTML = ('O adversário escolheu: &#9994;')
    }
    if(machine === 'scissors') {
        machineChoice.innerHTML = ('O adversário escolheu: &#9996;')
    }
}


/*

    papel -> pedra -> tesoura

*/