/** 
 
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
    document.getElementById("homework7-002-output").innerHTML = output;
}

function showError(output) {
    document.getElementById("homework7-002-output").innerHTML = `<span style="color: red;">${output}</span>`;
}
