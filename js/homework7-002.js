/** 
 * Shows the cookie form if the cookies are not set.
 */


// Validate the form inputs, input required
function validatateForm(name, userName) {
    let errorMessage = "";
    if (!name || name.trim() === "") {
        errorMessage += "Name is required.<br/>";
    }
    if (!userName || userName.trim() === "") {
        errorMessage += "User Name is required.<br/>";
    }

    if (errorMessage) {
        writeOutput(`<br><p style="color: red;">${errorMessage}</p>`);
        return false;
    }
    return true;
}


// Event handler for form submission
// Sets the cookies and hides the form
function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    writeOutput("");

    const name = document.querySelector('#name').value;
    const userName = document.querySelector('#userName').value;

    if(!validatateForm(name, userName)) {
        return;
    }
    
    setCookie("name", name); // set session cookie
    setCookie("userName", userName); // set session cookie

    showHideFormOnLoad();
    
}

/**
 * Sets a cookie.
 * @param {any} key the name of the cookie
 * @param {any} value the value of the cookie
 * @param {any} days the number of days until the cookie expires (optional)
 */
function setCookie(key, value, days) {
    let cookieString = "";
    cookieString += key + "=" + encodeURIComponent(value) + ";path=/";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        cookieString += ";" + expires;
    }
    document.cookie = cookieString;
}



/**
 * Reads a cookie by name.
 * @param key the name of the cookie to read
 * @returns THe cookie value or null if not found
 */
function getCookie(key) {
    const value = document.cookie;

    const parts = value.split(';');
    for (let i = 0; i < parts.length; i++) {
        const nameValuePair = parts[i].trim();
        if (nameValuePair.startsWith(key)) {
            const cookieValue = decodeURIComponent(nameValuePair.substring(key.length + 1));
            writeOutput(`Welcome back, ${cookieValue}!`);
            return cookieValue;
        }
    }
    return null;
}



// Show or hide the cookie form based on whether the cookies are set
function showHideFormOnLoad() {
    if (getCookie("name")) {
        hideCookieForm();
    } else {
        showCookieForm();
    }
}


// Functions to show/hide the cookie form
function hideCookieForm() {
    document.getElementById("cookieForm").style.display = 'none';
}


function showCookieForm() {
    document.getElementById("cookieForm").style.display = 'block';
}


// Function to write output to the output div
function writeOutput(output) {
    document.getElementById("homework7-002-output").innerHTML = output;
}