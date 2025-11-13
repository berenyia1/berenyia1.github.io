/** 
*/

class FormData {
    constructor() {
        this.name = "";
        this.ageGroup = "";
        this.browsers = [];
        this.movie = "";
    }

    toString() {
        return `Name: ${this.name}; Age Group: ${this.ageGroup}; Browsers: ${this.browsers.join(", ")}; Movie: ${this.movie};`;
    }

    validate() {
        let errors = [];
        if (this.name.trim() === "") {
            errors.push("Name is required.");
        }
        if (this.ageGroup === "") {
            errors.push("Age group is required.");
        }
        if (this.browsers.length === 0) {
            errors.push("At least one browser must be selected.");
        }
        if (this.movie === "") {
            errors.push("A movie type must be selected.");
        }
        return errors;
    }
            
}


function onSubmitted(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    showOutput("");

    const formData = new FormData();
    const name = document.getElementById("fullName").value;

    formData.name = name;

    // Get selected radio button
    const radioButtons = document.querySelectorAll('input[name="ageGroup"]');
    radioButtons.forEach(radio => {
        if (radio.checked) {
            formData.ageGroup = radio.value;
        }
    });

    const checkboxes = document.querySelectorAll('input[name="browser"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            formData.browsers.push(checkbox.value);
        }
    });


    const movie = document.getElementById("movie");
    formData.movie = movie.value;

    const errors = formData.validate();
    if (errors.length > 0) {
        showOutput(`<span style="color: red;">${errors.join("<br>")}</span>`);
        return;
    }


    showOutput("Thanks, your data was submitted!<br>" + formData.toString()); // reset output area
}

function showOutput(output) {
    document.getElementById("homework7-001-output").innerHTML = output;
}

