class Calculator {
    constructor(value) {
        this.value = value;
    }

    plus(num) {
        this.value += num;
        return this;
    }

    minus(num) {
        this.value -= num;
        return this;
    }

    multiply(num) {
        this.value *= num;
        return this;
    }

    divide(num) {
        this.value /= num;
        return this;
    }
}

var result = new Calculator(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result.value);  


//2 ci tapsiriq
const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function() {
    <input type="number" id="input1" placeholder="Enter a number">
  <input type="number" id="input2" placeholder="Enter a number">

  <button onclick="calculate('+')">Add</button>
  <button onclick="calculate('-')">Subtract</button>
  <button onclick="calculate('*')">Multiply</button>
  <button onclick="calculate('/')">Divide</button>

})