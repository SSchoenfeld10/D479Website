document.getElementById('emailForm').addEventListener('submit', function(e) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('emailConfirm').value;
    // alert(email,confirmEmail)
    if (email != confirmEmail) {
        alert('Email Not Matching!');
        e.preventDefault();} //prevents the form from submitting   
});
