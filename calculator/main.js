document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("display");

    const numbers = {
        one: document.getElementById("one"),
        two: document.getElementById("two"),
        three: document.getElementById("three"),
        four: document.getElementById("four"),
        five: document.getElementById("five"),
        six: document.getElementById("six"),
        seven: document.getElementById("seven"),
        eight: document.getElementById("eight"),
        nine: document.getElementById("nine"),
        zero: document.getElementById("zero")
    }
    
    const operators = {
        plus: document.getElementById("plus"),
        minus: document.getElementById("minus"),
        times: document.getElementById("times"),
        divide: document.getElementById("divide")
    }
    
    const erasers = {
        clearAll: document.getElementById("clearAll"),
        clear: document.getElementById("clear")
    }

    let array = [];

    numbers.one.addEventListener("click", function() {
        console.log("Button one click")
        input.value += 1
    })
})