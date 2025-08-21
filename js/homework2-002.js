// JavaScript source code
/**
 * For Part 2:
    Create a webpage with a form that will have:
        three input boxes for the user to type three integers (numbers)
        a button to process the data (numbers) typed by the user
        a button to clear the form
        a textarea to display the results of the process (or it can be a div or paragraph element below the form)
    
    You will write the JavaScript code that will:
    
    receive the data from those three input boxes for the three integers after the user click on the button to process the data
    you will calculate the sum, the average, and the product of the three integers
    you will also calculate the smallest and the largest of the three integers typed
    TIP: For finding the smallest and largest number, use the Math Object Methods of min and max
    you will present the results of these calculations in the text area - DO NOT USE ALERT BOXES!!!
    your script should not present any result if the user does not type NUMBERS in the input boxes and, instead, you should present an error message in the output (result) area.
 */

function showResults(results) {
    document.getElementById("results").innerText = results;
}


function validateInputs(number1, number2, number3) {

    try {
        number1 = Number(number1 == "" ? "x": number1);
        number2 = Number(number2 == "" ? "x" : number2);
        number3 = Number(number3 == "" ? "x" : number3);
    } catch (error) {
        showResults("Please enter valid integer numbers in all input fields.");
    }

    if (Number.isInteger(number1) && Number.isInteger(number2) && Number.isInteger(number3)) {
        return true;
    } else {
        showResults("Please enter valid integer numbers in all input fields.");
        return false;
    }
    
}

function calculateSum(number1, number2, number3) {
    return number1 + number2 + number3;
}

function calculateAverage(number1, number2, number3) {  
    return (number1 + number2 + number3) / 3;
}

function calculateProduct(number1, number2, number3) {
    return number1 * number2 * number3;
}


function formSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showResults("");
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const number3 = document.getElementById("number3").value;

    if (!validateInputs(number1, number2, number3)) {
        return;
    }
    // Convert input values to integers
    const num1 = parseInt(number1, 10);
    const num2 = parseInt(number2, 10);
    const num3 = parseInt(number3, 10);

    const minValue = Math.min(num1, num2, num3);
    const maxValue = Math.max(num1, num2, num3);
    const sum = calculateSum(num1, num2, num3);
    const average = calculateAverage(num1, num2, num3);
    const product = calculateProduct(num1, num2, num3);

    showResults("Sum: " + sum + "\n" +
                "Average: " + average + "\n" +
                "Product: " + product + "\n" +
                "Smallest: " + minValue + "\n" +
                 "Largest: " + maxValue);
    
}