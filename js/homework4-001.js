// JavaScript source code for Homework 4, Exercise 1


let tmp = 0;
let outputforSum = document.getElementById("homework4-001-forSum");
outputforSum.innerHTML = "The result of ";
for (let i = 5; i <= 25; i += 4) {
    outputforSum.innerHTML += i;
    if (i < 25) {
        outputforSum.innerHTML += " + ";
    }

    tmp += i;
}
outputforSum.innerHTML += " is " + tmp + ".";

tmp = 1;
let outputforProduct = document.getElementById("homework4-001-forProduct");
outputforProduct.innerHTML = "The result of ";
for (let i = 5; i <= 25; i += 4) {
    outputforProduct.innerHTML += i;
    if (i < 25) {
        outputforProduct.innerHTML += " * ";
    }

    tmp *= i;
}
outputforProduct.innerHTML += " is " + tmp + ".";

let outputwhileSum = document.getElementById("homework4-001-whileSum");
tmp = 0;
outputwhileSum.innerHTML = "The result of ";
let i = 5;
while (i <= 25) {
    outputwhileSum.innerHTML += i;
    if (i < 25) {
        outputwhileSum.innerHTML += " + ";
    }    
    tmp += i;
    i += 4;
}
outputwhileSum.innerHTML += " is " + tmp + ".";


tmp = 1;
i = 5;
let outputwhileProduct = document.getElementById("homework4-001-whileProduct");
outputwhileProduct.innerHTML = "The result of ";
while (i <= 25) {
    outputwhileProduct.innerHTML += i;
    if (i < 25) {
        outputwhileProduct.innerHTML += " * ";
    }    
    tmp *= i;
    i += 4;
}
outputwhileProduct.innerHTML += " is " + tmp + ".";

