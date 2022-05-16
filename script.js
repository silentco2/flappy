const height = 50
let isJumping = 0
let score = 0
const main = document.getElementById("game")
main.style.setProperty("--height",`${height}rem` )
const block = document.querySelector('.block')
const hole = document.querySelector('.hole')
const character = document.querySelector('.character')
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 34)+20)
    hole.style.top = `${random}rem`
    score++
})
setInterval(function(){
let char_top = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
if(isJumping == 0)character.style.top = `${char_top +3}px`
let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
let hole_top = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
if (char_top>710 || (block_left<35 && block_left>-48 && (char_top-800<hole_top || char_top-800>hole_top+132))){
    alert(`Game Over ,Score:${score}`)
    character.style.top=125+"px"
    score = 0
}
},10)
window.addEventListener("keydown",function(event){if(event.keyCode == 32) jump()})
function jump(){
    isJumping = 1
    let count = 0
    const jump_interval = setInterval(function(){
        let char_top = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
        if (char_top>35 && count<15) character.style.top = `${char_top -5}px`
        if(count>20){
            clearInterval(jump_interval)
            isJumping = 0
            count = 0
        }
        count++ 
    },10)
}