
const itemPrice1 = 20.99;
const itemPrice2 = 12.75;
const itemPrice3 = 9.95;
const itemPrice4 = 35.89;

const commission = 0.09;
const weeklyRate = 250;


function showError(results) {
    document.getElementById("results").innerHTML = results;
}


function displayItem(item, value) {
    document.getElementById(item).value = value;
}

/**
 * Checks for valid input, i.e., that the input is an integer, greater than 0.
 */
function validateInput(itemsSold) {

    const msg = "ERROR. Please enter valid integer number greater than or equal to 0 as quantity";
    let isValid = true;

    let items = 0;

    try {
        items = Number(itemsSold == "" ? "x" : itemsSold);
    } catch {
        isValid = false;
    }

    if (!Number.isInteger(items) || items < 0) {
        isValid = false;

    } 

    if (!isValid) {
        showError(msg);
        return false;
    }

    return isValid;

}

/**
 * sum of all the values for each of the Totalboxes (for item 1, item 2, item 3, item 4)
 * 
 */
function totalAmtSold(item1, item2, item3, item4) {
    const amt = itemPrice1 * item1 + itemPrice2 * item2 + itemPrice3 * item3 + itemPrice4 * item4;
    return amt;
}

/**
 * Calculate the 9% of that Total Amount Sold value and add 250 to that result Total Weekly Earnings
 */
function totalWeeklyEarnings(totalAmtSold) {
    const earnings = totalAmtSold * commission + weeklyRate;
    return earnings;
}

// This function is called when the form is submitted
function formSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showError(""); // reset output area

    let item1 = document.getElementById("item1").value;
    let item2 = document.getElementById("item2").value;
    let item3 = document.getElementById("item3").value;
    let item4 = document.getElementById("item4").value;

    if (validateInput(item1) &&
        validateInput(item2) &&
        validateInput(item3) &&
        validateInput(item4)) {
        /* continue */
    } else {
        return;
    }

    // Convert input values to integers so we can do math with them
    item1 = parseInt(item1);
    item2 = parseInt(item2);
    item3 = parseInt(item3);
    item4 = parseInt(item4);

    // calculate final score and letter grade
    const totalSold = totalAmtSold(item1, item2, item3, item4);
    const totalEarnings = totalWeeklyEarnings(totalSold);

    displayItem("qty1", item1); 
    displayItem("qty2", item2);
    displayItem("qty3", item3);
    displayItem("qty4", item4);

    displayItem("total1", (item1 * itemPrice1).toFixed(2));
    displayItem("total2", (item2 * itemPrice2).toFixed(2));
    displayItem("total3", (item3 * itemPrice3).toFixed(2));
    displayItem("total4", (item4 * itemPrice4).toFixed(2));

    displayItem("totalSold", totalSold.toFixed(2));
    displayItem("totalEarnings", totalEarnings.toFixed(2));
    

}


function testTotalAmtSold() {
    console.assert(totalAmtSold(0, 0, 0, 0) === 0);
    console.assert(totalAmtSold(1, 0, 0, 0) === itemPrice1);
    console.assert(totalAmtSold(0, 1, 0, 0) === itemPrice2);
    console.assert(totalAmtSold(0, 0, 1, 0) === itemPrice3);
    console.assert(totalAmtSold(0, 0, 0, 1) === itemPrice4);
    console.assert(totalAmtSold(1, 1, 1, 1) === itemPrice1 + itemPrice2 + itemPrice3 + itemPrice4);
    console.assert(totalAmtSold(2, 2, 2, 2) === 2 * (itemPrice1 + itemPrice2 + itemPrice3 + itemPrice4));
    console.log("All tests passed!");
}

function testTotalWeeklyEarnings() {
    console.assert(totalWeeklyEarnings(0) === weeklyRate);
    console.assert(totalWeeklyEarnings(100) === 100 * commission + weeklyRate);
    console.assert(totalWeeklyEarnings(250) === 250 * commission + weeklyRate);
    console.assert(totalWeeklyEarnings(500) === 500 * commission + weeklyRate);
    console.assert(totalWeeklyEarnings(1000) === 1000 * commission + weeklyRate);
    console.log("All tests passed!");
}