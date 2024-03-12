// class Calculator {
//     constructor(value) {
//         this.value = value;
//     }

//     plus(num) {
//         this.value += num;
//         return this;
//     }

//     minus(num) {
//         this.value -= num;
//         return this;
//     }

//     multiply(num) {
//         this.value *= num;
//         return this;
//     }

//     divide(num) {
//         this.value /= num;
//         return this;
//     }
// }

// var result = new Calculator(50).plus(6).minus(30).multiply(3).divide(2);
// console.log(result.value);  

//2 ci tapsiriq
const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let valueOfInput1 = parseFloat(input1.value);
    let valueOfInput2 = parseFloat(input2.value);
    let result = valueOfInput1 / valueOfInput2;
    const resultDiv = document.getElementById("rs");
    resultDiv.innerText = "Result: " + result;
    console.log(result);
});
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let valueOfInput1 = parseFloat(input1.value);
    let valueOfInput2 = parseFloat(input2.value);
    let result = valueOfInput1 + valueOfInput2;
    const resultDiv = document.getElementById("rs");
    resultDiv.innerText = "Result: " + result;
    console.log(result);
});
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let valueOfInput1 = parseFloat(input1.value);
    let valueOfInput2 = parseFloat(input2.value);
    let result = valueOfInput1 - valueOfInput2;
    const resultDiv = document.getElementById("rs");
    resultDiv.innerText = "Result: " + result;
    console.log(result);
});
const multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let valueOfInput1 = parseFloat(input1.value);
    let valueOfInput2 = parseFloat(input2.value);
    let result = valueOfInput1 * valueOfInput2;
    const resultDiv = document.getElementById("rs");
    resultDiv.innerText = "Result: " + result;
    console.log(result);
});
