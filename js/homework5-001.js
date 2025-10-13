/** Personal info form
Will validate whether the user has entered data in the input text box, 
AND has checked one of the radio buttons, 
AND has checked at least one checkbox, 
AND has selected an option from the list of options in the select (or datalist) element.
If one of the data, from the user, is missing, you will show an error message in the output area
TIP: Make sure that if you display an error message because of a single field, you do not clear out the whole entire form unless all the fields would have error messages associated to them! It's horrible to have the user fill out all the form again when there was only one field with error, right? Remember about this type of detail that is related to user experience!
If ALL the requested data was input by the user, you will write a message in the output area such as "Thanks, your data was submitted!"
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
    document.getElementById("homework5-001-output").innerHTML = output;
}

