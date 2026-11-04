
// Password visibility toggle
document.querySelectorAll("[data-toggle-password]").forEach(button => {

    button.addEventListener("click", function () {

        const inputId = this.dataset.togglePassword;
        const passwordInput = document.getElementById(inputId);

        const show = passwordInput.type === "password";

        passwordInput.type = show ? "text" : "password";

        this.innerHTML = show
            ? '<i class="fas fa-eye-slash"></i>'
            : '<i class="fas fa-eye"></i>';

        this.setAttribute(
            "aria-label",
            show ? "Hide password" : "Show password"
        );
    });

});

// Registration form validation
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message = document.getElementById("registerMessage");

    if (password.length < 8) {
        message.textContent =
            "Password must contain at least 8 characters.";
        message.style.color = "#b3261e";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "#b3261e";
        return;
    }

    message.textContent =
        "Your details are valid. Connect this form to your registration system to create your account.";
    message.style.color = "#267447";

});

// Current year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
