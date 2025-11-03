/** Number form
 * After the user types the number in the input box and clicks on the button to submit, 
 * you need to make sure that the number has AT LEAST 4 decimal positions (no less than that)
If the user types an invalid number, you will display an error message in the output/result area
If the user types a valid number (with 4 decimals and it is a number), you will use Math.round, Math.sqrt, Math.floor, toFixed() etc. to obtain the following:
TIPS:
when reading the input, make sure you will be using parseFloat() to not lose the decimal numbers before doing the calculations requested
remember to use the toFixed() only at the time you will present the final result
round the floating-point number to the nearest integer
calculate the square root of the floating-point number and round it to an integer
round the floating-point number to the nearest tenths position
round the floating-point number to the nearest hundredths position
round the floating-point number to the nearest thousandths position
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
*/

class FormData {
    constructor() {
        this.number = "";        
    }

    toString() {
        return `Number: ${this.number}`;
    }

    validate() {
        let errors = [];
        if (this.number.trim() === "") {
            errors.push("Number is required.");
        }
        
        return errors;
    }
            
}


function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showOutput("");

    const formData = new FormData();
    const number = document.getElementById("number").value;

    formData.number = number;

    const errors = formData.validate();
    if (errors.length > 0) {
        showOutput(`<span style="color: red;">${errors.join("<br>")}</span>`);
        return;
    }


    showOutput(`You typed number 4.3264 <br>
        Rounded to the nearest integer = 4 <br>
        Square root rounded to integer = 2
        Rounded to the nearest 10th position = 4.3 <br>
        Rounded to the nearest 100th position = 4.33 <br>
        Rounded to the nearest 1000th position = 4.326 <br>`); 
}

function showOutput(output) {
    document.getElementById("homework6-001-output").innerHTML = output;
}

