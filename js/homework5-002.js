/** 
 The user will type the FULL NAME or ABBREVIATION of the state he/she desires to get information not following any type of pre-determined capitalization. After the user clicks the button to get "State Info", you will verify if the state typed by the user exists in your database - only the states listed in the table above will exist in your database!
INFORMATION: It should not matter if the user typed the state or abbreviation using capital letters or lowercase or a mix of those.
TIP: Transform the input of the user and the data you are comparing either to uppercase or to lowercase so you can compare "banana with banana"! You can do that by using the toLowerCase() or toUpperCase() methods.
If the state does not exist, write a message in the output area saying something as "Sorry, we do not have information about this state! We only have information about....." - remember to be clear in your error message to guide the user!
If the state exists, you should present in the output/result area the information from the state required - think about presenting the information in a nice readable way!
More Tips:
Solving this problem involves a two-dimensional array.
Make sure you validate the input for a correct state abbreviation or state name. If the input is invalid then display an error message. 
If the user enter a state that is not part of the list, show a message to the user but if the user retypes the state and click the Submit button and the state is valid, then the "error" message should not be shown and, instead, you should show the information that is coming from the table below
For example, suppose the user typed "caliFORNIA" (a mix or lower and uppercase), your script will consider this state valid, would find the state in your list and would present an output message looking something as:
Thanks for your inquiry, here is the information you requested:
State abbr = CA
State Name = California
Capital = Sacramento
Population = 39,431,263

Here is the table with the information for this part 2!

Census data
State Abbr	State Name	Capital	Population
AL	Alabama	Montgomery	5,157,699
AK	Alaska	Juneau	740,133
AZ	Arizona	Phoenix	7,582,384
AR	Arkansas	Little Rock	3,088,354
CA	California	Sacramento	39,431,263
CO	Colorado	Denver	5,957,493

 */



const statesData =
    [["AL", "Alabama", "Montgomery", 5157699],
    ["AK", "Alaska", "Juneau", 740133],
    ["AZ", "Arizona", "Phoenix", 7582384],
    ["AR", "Arkansas", "Little Rock", 3088354],
    ["CA", "California", "Sacramento", 39431263],
    ["CO", "Colorado", "Denver", 5957493]];


function availableStates() {
    return statesData.map(state => state[0]).join(", ");

}

function formatStateDataAsTable(state) {
    const [abbr, name, capital, population] = state;
    const table = `
        <table class="state-info">
            <tr><th>State Abbreviation:</th><td>${abbr}</td></tr>
            <tr><th>State Name:</th><td>${name}</td></tr>
            <tr><th>Capital:</th><td>${capital}</td></tr>
            <tr><th>Population:</th><td>${population.toLocaleString()}</td></tr>
        </table>
    `; 
    return table;
}

function findStateInfo(input) { 
    const formattedInput = input.trim().toLowerCase();
    for (let i = 0; i < statesData.length; i++) {
        const [abbr, name, a,s] = statesData[i];
        if (formattedInput === abbr.toLowerCase() || formattedInput === name.toLowerCase()) {
            return formatStateDataAsTable(statesData[i]);
        }
    }
    return null;
}


function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showOutput("");

    
    const stateInput = document.getElementById("stateInput").value;

    const stateInfo = findStateInfo(stateInput);

    if (stateInfo) {
        showOutput(`Thanks for your inquiry, here is the information you requested:<br>${stateInfo}`);
    } else {
        showError(`Sorry, we do not have information about this state! We only have information about: ${availableStates()}`);
    }


}

function showOutput(output) {
    document.getElementById("homework5-002-output").innerHTML = output;
}

function showError(output) {
    document.getElementById("homework5-002-output").innerHTML = `<span style="color: red;">${output}</span>`;
}
