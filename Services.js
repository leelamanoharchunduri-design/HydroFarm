
document.addEventListener("DOMContentLoaded", function () {

    // 1. Update footer year
    const yearElement = document.getElementById("servicesYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Home dropdown functionality
    const homeButton = document.getElementById("homeDropdownBtn");
    const homeMenu = document.getElementById("homeDropdownMenu");

    if (homeButton && homeMenu) {

        homeButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const isOpen = homeMenu.classList.toggle("show");

            homeButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            const clickedInsideMenu = homeMenu.contains(event.target);
            const clickedButton = homeButton.contains(event.target);

            if (!clickedInsideMenu && !clickedButton) {
                homeMenu.classList.remove("show");
                homeButton.setAttribute("aria-expanded", "false");
            }
        });

        // Close dropdown with Escape key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                homeMenu.classList.remove("show");
                homeButton.setAttribute("aria-expanded", "false");
            }
        });
    }

});
