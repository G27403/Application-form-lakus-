const form = document.getElementById("applicationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault(); // Temporarily pause the default submission to validate data

    // SECURITY VALIDATION
    const firstname = document.getElementById("firstname").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

       
  

    // NAME VALIDATION
    const namePattern = /^[A-Za-z\s]+$/;

    if(!namePattern.test(firstname)){
        alert("First name must contain letters only.");
        return;
    }

    if(!namePattern.test(surname)){
        alert("Surname must contain letters only.");
        return;
    }

    // SEND DATA TO FORMSPREE IN THE BACKGROUND
    const formData = new FormData(form);

    fetch("https://formspree.io/f/mojboyon", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // If Formspree accepts the data, show your success message!
            successMessage.style.display = "block";
            successMessage.textContent = "Application submitted successfully!";
            form.reset(); // Clears the form inputs
        } else {
            alert("Oops! There was a problem submitting your application.");
        }
    })
    .catch(error => {
        alert("Oops! There was a problem submitting your application.");
    });
      .catch(error => {
        alert("Oops! There was a problem submitting your application.");
    });
});