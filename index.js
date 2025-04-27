'use strict'
// document.querySelector('#index').textContent = 10

let guesser = document.getElementById("happy")
let vale = Math.floor(Math.random() * 30)
let aw = 8
let body = document.body
let content = document.querySelector('#content')
let title = document.querySelector('#title')
let right = document.querySelector('.right')
let highScore = 0

const happy = function(message){
    document.querySelector('#happy').textContent = message
}

document.getElementById("guessbtn").addEventListener('click', function(){
let guess = document.querySelector('#guess').value

    //if it's correct
    if(guess == vale){
        happy('your guess is right, are you a shaman?')
        document.querySelector('.number').textContent = vale
        document.querySelector('#index').textContent =  aw
        body.style.background = 'green' 
        document.querySelector('#high').textContent = highScore
        if(aw > highScore){
            highScore = aw
            document.querySelector('#high').textContent = highScore
        }
        
        //if it's too high
    } else if(guess > vale){
        happy('damn, too high')      
        document.querySelector('#index').textContent =  aw--
        
        //if it's too low
    } else if(guess < vale){
        happy('too low, man')  
        document.querySelector('#index').textContent =  aw--
    } 
    
    
    //if they manage to fail
    if(aw < 0){
        document.querySelector('#title').textContent = 'Game Over, play again?'
        body.style.background = 'red'
        happy('get lost, useless')

    }

    //if they not answer it
    if(!guess){
        happy('Please answer it bro')
    }


})

document.querySelector('.try').addEventListener('click', function(){
    aw = 8
    vale = Math.floor(Math.random() * 30)
    console.log(vale)
    body.style.background = 'black'
    title.textContent = 'Guess my number game'
    happy('start guessing ...')
    document.querySelector('.number').textContent = '?'
    document.querySelector('#index').textContent = aw

})

console.log(vale)
