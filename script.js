function validateForm() {
    var name = document.getElementById('name').value;
    console.log(name)
    var email = document.getElementById('email').value;
    console.log(email)

    var message = document.getElementById('message').value;
    console.log(message)


    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return false;
    }


    return true;
}
