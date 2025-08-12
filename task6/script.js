document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    let valid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (message === "") {
        messageError.textContent = "Message is required";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    if (valid) {
        successMessage.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    } else {
        successMessage.textContent = "";
    }
});
