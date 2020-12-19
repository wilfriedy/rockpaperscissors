
// declaring variables
let score0El = document.querySelector('.score--0')
let score1El = document.querySelector('.score--1')
let selectOption = document.querySelector('#select')
let computerInput = document.querySelector('.computerInpt')
let playBox0 = document.querySelector('.playBox--0')
let playBox1 = document.querySelector('.playBox--1')
let playAgain = document.querySelector('.playAgain')
let btnDark = document.querySelector('.darkmode')


// setting props
score0El.textContent = 0
score1El.textContent = 0
let scoreCountForComputer = 0
let scoreCountForHuman = 0
let keepScore = 0
let options = ['Rock', 'Paper', 'Scissors']
let gameContinues = true


// set to darkmode

btnDark.addEventListener('click', ()=>{
    document.body.classList.toggle('darkmodeClass')
})


// playingame
selectOption.addEventListener('change', (e)=>{
    let target = e.target.value;
    let randomSet = Math.trunc(Math.random() * 3) 
    let computerChoice = options[randomSet]
    
    if(gameContinues){
        if(!target){
            computerInput.value = ''
        }
        if(target){
            computerInput.value = computerChoice
            // check if options are same
            if(target === computerInput.value){
                return false
                
            }
            // conditions for player to win
             if(target === 'Rock' && computerChoice === 'Scissors' || target === 'Scissors' && computerChoice === 'Paper' || target === 'Paper' && computerChoice === 'Rock'
            ){ 
                scoreCountForHuman++ 
                keepScore =  scoreCountForHuman
                score0El.textContent = keepScore
            }
    
    
            // conditions for computer to win
            else if (computerChoice === 'Rock' && target === 'Scissors' || computerChoice === 'Scissors' && target === 'Paper' || computerChoice  === 'Paper' && target === 'Rock'){ 
                scoreCountForComputer++
                keepScore = scoreCountForComputer      
                score1El.textContent = keepScore
            }
    
        }
    } 

    if(keepScore == 5){
        gameContinues = false
        if(score0El.textContent == 5){
            playBox0.classList.add('winner')
            playBox1.classList.remove('winner')
        } else if(score1El.textContent == 5){
            playBox1.classList.add('winner')
            playBox0.classList.remove('winner')
        }
    }
   
})

// reset game

playAgain.addEventListener('click', ()=>{
    location.reload()
})


