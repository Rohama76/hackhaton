function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Basic validation
    if (name === '' || email === '') {
      alert('Name and email are required');
    } else {
      // Display a pop-up or do further processing
      alert('Form submitted successfully!');
      // You can replace the alert with a more sophisticated popup/modal
    }
  }