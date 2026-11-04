const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Show or hide password
togglePassword.addEventListener("click", function () {
    const showPassword = passwordInput.type === "password";

    passwordInput.type = showPassword ? "text" : "password";
    togglePassword.textContent = showPassword ? "Hide" : "Show";

    togglePassword.setAttribute(
        "aria-label",
        showPassword ? "Hide password" : "Show password"
    );
});

// Front-end demonstration only
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
    }

    loginMessage.style.color = "#267447";
    loginMessage.textContent =
        "Your form is ready. Connect an authentication service to sign in.";
});

// Google sign-in needs Google Identity Services or another auth provider.
document.getElementById("googleLogin").addEventListener("click", function () {
    loginMessage.style.color = "#9a6700";
    loginMessage.textContent =
        "Google sign-in has not been connected yet.";
});
