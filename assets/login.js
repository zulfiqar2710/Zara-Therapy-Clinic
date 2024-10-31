// login form
document.getElementById('login_Form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alertbox.render({
              alertIcon: 'success',
              title: 'Thank You!',
              message: 'Login Successful !',
              btnTitle: 'Ok',
            themeColor: '#6DCDB1',
              border:false
            });
            setTimeout(() => {
                window.location.href = '../index.html'; 
            }, 2500); 
        document.getElementById('authButtons').style.display = 'none';
    } else {
        alertbox.render({
              alertIcon: 'error',
              title: 'Account Not Found!',
              message: 'Please Create a Account First',
              btnTitle: 'Ok',
            themeColor: '#F28C8C',
              border:false
            });
    }
}); 
