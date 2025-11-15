/** 
 
 */

function showHideFormOnLoad() {
    showCookieForm();
    if (readCookie("name")) {
        hideCookieForm();        
    } else {
        showCookieForm();
    }
}

/**
 * Reads a cookie by name.
 * @param key the name of the cookie to read
 * @returns THe cookie value or null if not found
 */
function readCookie(key) {
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

function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    writeOutput("");

    const name = document.querySelector('#name').value;
    const userName = document.querySelector('#userName').value;

    document.cookie = "name=" + encodeURIComponent(name) + ";path=/";
    document.cookie = "userName=" + encodeURIComponent(userName) + ";path=/";

    showHideFormOnLoad();
    

}

function writeOutput(output) {
    document.getElementById("homework7-002-output").innerHTML = output;
}

function hideCookieForm() {
    console.log("Showing form");
    document.getElementById("cookieForm").style.display = 'none';
}
function showCookieForm() {
    console.log("Showing form");
    document.getElementById("cookieForm").style.display = 'block';
}

