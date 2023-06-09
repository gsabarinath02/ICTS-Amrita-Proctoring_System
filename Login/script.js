const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameEmail = loginForm['username-email'].value.trim();
        const password = loginForm['password'].value.trim();

        if (usernameEmail === '') {
            setErrorFor(loginForm['username-email'], 'Username/Email cannot be blank');
        } else {
            setSuccessFor(loginForm['username-email']);
        }

        if (password === '') {
            setErrorFor(loginForm['password'], 'Password cannot be blank');
        } else {
            setSuccessFor(loginForm['password']);
        }

        if (usernameEmail !== '' && password !== '') {
            loginForm.submit();
        }
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = registerForm['email'].value.trim();
        const username = registerForm['username'].value.trim();
        const password = registerForm['password'].value.trim();
        const repeatPassword = registerForm['repeat-password'].value.trim();

        if (email === '') {
            setErrorFor(registerForm['email'], 'Email cannot be blank');
        } else if (!isValidEmail(email)) {
            setErrorFor(registerForm['email'], 'Email is not valid');
        } else {
            setSuccessFor(registerForm['email']);
        }

        if (username === '') {
            setErrorFor(registerForm['username'], 'Username cannot be blank');
        } else {
            setSuccessFor(registerForm['username']);
        }

        if (password === '') {
            setErrorFor(registerForm['password'], 'Password cannot be blank');
        } else if (password.length < 8) {
            setErrorFor(registerForm['password'], 'Password must be at least 8 characters');
        } else {
            setSuccessFor(registerForm['password']);
        }

        if (repeatPassword === '') {
            setErrorFor(registerForm['repeat-password'], 'Repeat Password cannot be blank');
        } else if (password !== repeatPassword) {
            setErrorFor(registerForm['repeat-password'], 'Passwords do not match');
        }
        else {
            setSuccessFor(registerForm['repeat-password']);
        }
        if (email !== '' && username !== '' && password !== '' && repeatPassword !== '' && isValidEmail(email) && password.length >= 8 && password === repeatPassword) {
            const userId = Date.now().toString();
            const userData = {
                id: userId,
                email,
                username,
                password,
                isVerified: false,
            };
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const existingUser = users.find(user => user.email === email || user.username === username);
            if (existingUser) {
                setErrorFor(registerForm['email'], 'User with same Email/Username already exists');
                setErrorFor(registerForm['username'], 'User with same Email/Username already exists');
            } else {
                users.push(userData);
                localStorage.setItem('users', JSON.stringify(users));
                sendVerificationEmail(email);
                registerForm.reset();
                setSuccessFor(registerForm['email']);
                setSuccessFor(registerForm['username']);
                setSuccessFor(registerForm['password']);
                setSuccessFor(registerForm['repeat-password']);
                alert('Registration Successful! Verification email sent to your email address');
            }
        }
    });
}

function setErrorFor(control, message) {
    const formControl = control.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');
}

function setSuccessFor(control) {
    const formControl = control.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isValidEmail(email) {
    return /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email);
}

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendVerificationEmail(email, verificationCode) {
    const message = {
        to: email,
        from: 'noreply@example.com',
        subject: 'Verify your email address',
        text: `Dear user,\n\nPlease use the following verification code to complete your registration:\n\nVerification Code: ${verificationCode}\n\nBest regards,\nThe Registration Team`,
    };
    await sgMail.send(message);
}




