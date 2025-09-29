// JavaScript source code for Homework 4, Extra

function formSubmitted(e) {
    e.preventDefault();

    let size = document.getElementById("size").value;

    size = parseInt(size);

    if (isNaN(size) || size < 2 || size > 10) {
        showOutput("Please enter a valid size between 2 and 10.");
        return;
    }
    showOutput("");
    const output = generateSquare(size);
    showOutput(output);

}

function topBottomRow(size) {
    let row = "<div>*";
    for (let j = 1; j < size; j++)
        row += " *";
    row += "</div>";
    return row;
}

function innerRow(size) {
    let row = `<div>*<span class="transparent">`;

    for (let j = 2; j < size; j++)
        row += " *";
    row += " </span>*</div>";
    return row;
}


// generate the square
// <div>* * * * *</div>
// <div>*<span class="transparent"> * * * </span>*</div>
// <div>*<span class="transparent"> * * * </span>*</div>
// <div>*<span class="transparent"> * * * </span>*</div>
// <div>* * * * *</div>
function generateSquare(size) {
    let square = topBottomRow(size);

    // rows except top and bottom
    for (let i = 0; i < size-2; i++) {
        square += innerRow(size);
    }
    square += topBottomRow(size);
    return square;
}

function showOutput(output) {
    document.getElementById("output").innerHTML = output;
}