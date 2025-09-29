// JavaScript source code for Homework 4, Exercise 2

let tableStart = `<table border="1">
    <caption style = "display: none;" > Example of multiplication table</caption >
        <tbody>
        <tr >
            <th scope="row">Number</th>
            <th scope="row">Multiplier</th>
            <th scope="row">Result</th>
        </tr>`;

let tableEnd = `</tbody>
        </table>`;


let START_MULTIPLIER = 5;
let END_MULTIPLIER = 9;
let HTML = "";
/** Outer loop for each table */
for (let multiplier = START_MULTIPLIER; multiplier <= END_MULTIPLIER; multiplier++) {

    HTML += `<h2>Multiplication Table for ${multiplier}</h2>`; 

    HTML += tableStart;

    /** Inner loop for each row in a table */
    for (let multiplicand = 1; multiplicand <= 9; multiplicand++) {

        let tableRow = `<tr>
            <td>${multiplicand}</td>
            <td>${multiplier}</td>
            <td>${multiplicand * multiplier}</td>
            </tr> `;

        HTML += tableRow;
    }

    HTML += tableEnd;

    

}


let output = document.getElementById("homework-002-output");
output.innerHTML = HTML;
