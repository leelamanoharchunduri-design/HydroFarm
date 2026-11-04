
// ==============================
// HYDROGROW CONTACT PAGE
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("enquiryForm");
    const messageBox = document.getElementById("contactFormMessage");

    if (!contactForm || !messageBox) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        messageBox.className = "contact-form-message";
        messageBox.textContent = "";

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("contactName")
            .value.trim();

        const email = document.getElementById("contactEmail")
            .value.trim();

        const subject = document.getElementById("contactSubject")
            .value;

        const message = document.getElementById("contactMessage")
            .value.trim();

        if (!name || !email || !subject || message.length < 10) {
            messageBox.textContent =
                "Please complete all required fields correctly.";

            messageBox.classList.add("error");
            return;
        }

        // Demo confirmation only.
        // Connect a backend or form service to deliver this enquiry.

        messageBox.textContent =
            "Thank you, " + name +
            "! Your enquiry has passed validation. " +
            "This demo does not send your message yet.";

        messageBox.classList.add("success");

        // Scroll the confirmation into view.
        messageBox.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });


    // FAQ: Keep one question open at a time.
    const faqItems = document.querySelectorAll(".contact-faq-item");

    faqItems.forEach(function (item) {
        item.addEventListener("toggle", function () {
            if (!item.open) {
                return;
            }

            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        });
    });
});
