// Signup form 
document.getElementById("signupForm").addEventListener("submit", function () {
    event.preventDefault();
    var name = document.getElementById("signupName").value;
    var email = document.getElementById("signupEmail").value;
    var contact = document.getElementById("signupContact").value;
    var pass = document.getElementById("signupPassword").value;
    var c_pass = document.getElementById("signupC-pass").value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var phoneRegex = /^\d+$/;
    var emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[AZa-z\d!@#$%&*]+$/;

   
    if (!nameRegex.test(name)) {
        document.getElementById("wrongname").innerHTML = "Only Alphabets are Allowed in Name";
        return;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("wrongemail").innerHTML = "Invalid Email";
        return;
    }

    if (!phoneRegex.test(contact)) {
        document.getElementById("wrongcontact").innerHTML = "Invalid Phone Number";
        return;
    }

    if (!passwordRegex.test(pass)) {
        document.getElementById("wrongpass").innerHTML = "The Password should have a Special Character a Capital Letter and small letter";
        return;
    }

    if (pass !== c_pass) {
        document.getElementById("wrongc-pass").innerHTML = "Passwords do not match";
        return;
    } else {
       alertbox.render({
          alertIcon: 'success',
          title: 'Thank You!',
          message: 'Your Account Has Been Created Successfully',
          btnTitle: 'Ok',
        themeColor: '#6DCDB1',
          border:false
        });
        setTimeout(() => {
            window.location.href = '../index.html'; 
        }, 2500); 
        document.getElementById('authButtons').style.display = 'none';
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', pass);
        localStorage.setItem('isLoggedIn', 'true');
    }
});
