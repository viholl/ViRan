alert("угадай число от 1 до 10")

let min = 1
let max = 10

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomInRange(min, max)
while (1) {
    if (prompt("введите число") == num) {
        alert("верно")
        break
    } else {
        alert("не верно")
    }
}