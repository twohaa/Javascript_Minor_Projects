//Guessing Game

let a = Math.random() * 100
a = Number.parseInt(a)
let value
let score = 100

while(value != a){
    score = score - 1
    value = prompt("Enter the number : ")
    value = Number.parseInt(value)

    if(value == a){
        alert("Congrats!You guess the correct number.")
        document.write(`You got the actual number in ${100 - score} chances.`)
    }
    else if(value > a && value < 100){
        alert("your guess is greater than actual number")
    }
    else if(value < a && value > 0){
        alert("your guess is smaller than actual number")
    }
    else{
        alert("Enter guess between 1 to 100: ")
    }
}