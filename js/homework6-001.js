/** Number form

After the user types the number in the input box and clicks on the button to submit, 
you need to make sure that the number has AT LEAST 4 decimal positions (no less than that)

If the user types an invalid number, you will display an error message in the output/result area

If the user types a valid number (with 4 decimals and it is a number), you will use 
Math.round, Math.sqrt, Math.floor, toFixed() etc. to obtain the following:

    A. round the floating-point number to the nearest integer
    B. calculate the square root of the floating-point number and round it to an integer
    C. round the floating-point number to the nearest tenths position
    D. round the floating-point number to the nearest hundredths position
    E. round the floating-point number to the nearest thousandths position

You will then present in the output/result area the original number typed by the user and the results you found for each calculation requested above

For example:
If the user types 4.32, you should NOT accept it, and you should write an error message such as: "You need to type a number with at least 4 decimals, please try again" and then you should not present anything in the output/result area.
If the user types 4.3264, you should then do the calculations and the output/result area would have something as:
"You typed number 4.3264
Rounded to the nearest integer = 4
Square root rounded to integer = 2
Rounded to the nearest 10th position = 4.3
Rounded to the nearest 100th position = 4.33
Rounded to the nearest 1000th position = 4.326"


TIPS: 
- when reading the input, make sure you will be using parseFloat() to not lose the decimal numbers before doing the calculations requested
- Remember to use the toFixed() only at the time you will present the final result

*/

class FormData {
    constructor(number) {
        this.strNumber = number;        
        this.floatNumber = parseFloat(number);
    }

    validate() {
        let errors = [];
        if (this.strNumber.trim() === "") {
            errors.push("Number is required.");
        }

        if (isNaN(this.floatNumber)) {
            errors.push("Number must be a valid number.");
        } else {
            const decimalPart = this.strNumber.split(".")[1];
            if (!decimalPart || decimalPart.length < 4) {
                errors.push("Number must have at least 4 decimal places.");
            }
        }
        
        return errors;
    }            
}

// A. round the floating-point number to the nearest integer
function roundToNearestInteger(number) {
    return Math.round(number);
}

// B.calculate the square root of the floating - point number and round it to an integer
function calculateSquareRootRounded(number) {
    return Math.round(Math.sqrt(number));
}

// C.round the floating - point number to the nearest tenths position
// D.round the floating - point number to the nearest hundredths position
// E.round the floating - point number to the nearest thousandths position
function calculateFixed(number, position) {
    return number.toFixed(position);
}



function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showOutput("");

    const number = document.getElementById("number").value;
    const formData = new FormData(number);

    const errors = formData.validate();
    if (errors.length > 0) {
        showOutput(`<span style="color: red;">${errors.join("<br>")}</span>`);
        return;
    }


    showOutput(`You typed number: ${formData.number} <br>
        Rounded to the nearest integer = ${roundToNearestInteger(formData.floatNumber) } <br>
        Square root rounded to integer = ${calculateSquareRootRounded(formData.floatNumber) } <br>
        Rounded to the nearest 10th position = ${calculateFixed(formData.floatNumber, 1)} <br>
        Rounded to the nearest 100th position = ${calculateFixed(formData.floatNumber, 2) } <br>
        Rounded to the nearest 1000th position = ${calculateFixed(formData.floatNumber, 3) } <br>`); 
}

function showOutput(output) {
    document.getElementById("homework6-001-output").innerHTML = output;
}

