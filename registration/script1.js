function agecheck() {
    var name = document.reg.name.value.trim();
    var age = parseInt(document.reg.age.value, 10);
    var email = document.reg.email.value.trim();
    var pass = document.reg.pass.value;
    var repass = document.reg.repass.value;

    if (name === '') {
        alert('Please fill in your name.');
        return false;
    } else if (age < 18) {
        alert('You must be at least 18 years old to register.');
        return false;
    } else if (email === '') {
        alert('Please provide your email address.');
        return false;
    } else if (pass.length < 8) {
        alert('The password must have at least 8 characters.');
        return false;
    } else if (pass !== repass) {
        alert('Passwords do not match.');
        return false;
    }

    // If all validation checks pass, the form is valid.
    return true;
}
