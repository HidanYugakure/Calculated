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

var result = new Calculator(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result.value);  


//2 ci tapsiriq
const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", function() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    let valueOfInput1 = input1.value;
    let valueOfInput2 = input2.value;
    let result = valueOfInput1/valueOfInput2;
})
console.log(result);