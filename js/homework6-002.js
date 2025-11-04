/** Regexp Form
 * The user will type whatever content he/she wants in the textarea for the long content, 
 * and the user will also type a single character in the input box you provided. 
 * When the user clicks the submit button, you will:
 * 
Search for the character the user typed inside the content in the textarea and you will 
count how many times this character is shown in the big content

If the character is found, you will present a message in the output/result area that says 
how many times the character X shows up in the content where X is the single character typed by the user

If the character is not found, you will present a new window (using the window.open() method you learned), 
the message: "Search character X not found in the content you typed", where X is the single character typed by the user. 

You should also make sure that, in this case, you will clear the input box or textarea that would be presenting the result of a positive search

NOTE: The new window should be 300 pixels by 100 pixels (width by height) and should be presented on a place that 
do not obscure any of the main content on the page the user is working with - you will choose the best place depending on your layout

TIP: when presenting the new window, it will be GREAT, if you present a button that the user can click to CLOSE that new window
*/

class FormData {
    constructor() {
        this.fullText = "";        
        this.charToFind = "";
    }

    validate() {
        let errors = [];

        if (this.charToFind.trim() === "") {
            errors.push("Character to count is required.");
        }

        if (this.fullText.trim() === "") {
            errors.push("Text to search is required.");
        }

        return errors;
    }
            
}


function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showOutput("");

    const formData = new FormData();
    const fullText = document.getElementById("fullText").value;
    formData.fullText = fullText;

    const charToFind = document.getElementById("charToFind").value;
    formData.charToFind = charToFind;


    const errors = formData.validate();
    if (errors.length > 0) {
        showOutput(`<span style="color: red;">${errors.join("<br>")}</span>`);
        return;
    }

    const escapedSearchWord = formData.charToFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchWord, 'gi');
    const matches = formData.fullText.match(regex);
    const count = matches ? matches.length : 0;
    if (count === 0) {
        const newWindow = window.open("", "Search Result", "width=300,height=100,left=200,top=200");
        newWindow.document.write(`<p>Search character "${formData.charToFind}" not found in the content you typed</p>`);
        newWindow.document.write('<button onclick="window.close()">Close</button>');
        newWindow.document.close();
        return;
    }

    showOutput(`<p>Search character ${formData.charToFind} found ${count} times in the content you typed</p>`); 
}

function showOutput(output) {
    document.getElementById("homework6-002-output").innerHTML = output;
}

