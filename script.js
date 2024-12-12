document.getElementById('togglePassword').addEventListener('click', function () {
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  
  // Toggle password visibility
  if (passwordField.type === "password") {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
  }
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Get form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let errorMessage = '';

  // Validate inputs
  if (username == '') {
    errorMessage = 'Username is required.';
  } else if (email == '') {
    errorMessage = 'Email is required.';
  } else if (!validateEmail(email)) {
    errorMessage = 'Please enter a valid email.';
  } else if (password == '') {
    errorMessage = 'Password is required.';
  } else if (password != confirmPassword) {
    errorMessage = 'Passwords do not match.';
  } else if (password.length < 6) {
    errorMessage = 'Password should be at least 6 characters long.';
  }

  // Display error message or success
  const errorElement = document.getElementById('error-message');
  if (errorMessage) {
    errorElement.textContent = errorMessage;
  } else {
    errorElement.textContent = '';
    alert('Registration Successful!');
    // Here you can process the form data further, like sending it to a server
  }
});

// Email validation regex
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
