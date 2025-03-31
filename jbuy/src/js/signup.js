function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Reset error message
    document.getElementById('errorMessage').innerHTML = '';

    if (!username || !email || !password || !confirmPassword) {
        displayError('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        displayError('Passwords do not match.');
        return;
    }

    // Additional validation logic can be added here

    // If all validations pass, you can submit the form or perform other actions
    alert('Signup successful!');
}

function displayError(message) {
    document.getElementById('errorMessage').innerHTML = message;
}
