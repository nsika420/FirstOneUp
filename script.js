// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Find the login button by its id
    var loginButton = document.getElementById("loginButton");

    // Add a click event listener to the login button
    loginButton.addEventListener("click", function() {
        // Redirect to the homepage
        window.location.href = "Home.html";
    });
});

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your validation logic here.
    // For a simple example, let's check if both fields are filled.
    if (username === "" || password === "") {
        alert("Both fields must be filled out");
        return false;
    }
    return true;
};

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can add your validation logic here.
    // For a simple example, let's check if all fields are filled.
    if (name === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
};

function sendPasswordReset() {
    var email = document.getElementById("email").value;

    // You would typically send a password reset email to the user's email address here.
    // This is a simplified example; in reality, you'd call a server-side script to handle the email sending.

    // Display a message to the user (you can replace this with your own logic).
    alert("A password reset email has been sent to " + email);

    // Prevent the form from actually submitting.
    return false;
};