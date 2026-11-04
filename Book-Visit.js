
const visitForm = document.getElementById("visitForm");
const visitDate = document.getElementById("visitDate");
const visitStatus = document.getElementById("visitMessageStatus");

// Prevent selecting a past date.
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

visitDate.min = localToday;

visitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!visitForm.checkValidity()) {
        visitForm.reportValidity();
        return;
    }

    if (visitDate.value < localToday) {
        visitStatus.style.color = "#b42318";
        visitStatus.textContent =
            "Please select today or a future date.";
        return;
    }

    const visitorName =
        document.getElementById("visitorName").value.trim();

    const selectedDate = visitDate.value;

    visitStatus.style.color = "#267447";
    visitStatus.textContent =
        `Thank you, ${visitorName}! Your visit request for ` +
        `${selectedDate} has been prepared. Please contact HydroGrow ` +
        `to confirm availability. No booking has been submitted yet.`;
});
