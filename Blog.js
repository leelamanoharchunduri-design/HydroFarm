document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const blogCards = document.querySelectorAll(".blog-card");

    if (!filterButtons.length || !blogCards.length) {
        console.warn("Blog filter buttons or blog cards were not found.");
        return;
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter
                .trim()
                .toLowerCase();

            // Update active button
            filterButtons.forEach(function (btn) {
                const isActive = btn === button;

                btn.classList.toggle("active", isActive);
                btn.setAttribute("aria-pressed", String(isActive));
            });

            // Show matching blog cards
            blogCards.forEach(function (card) {
                const category = (
                    card.dataset.category || ""
                ).trim().toLowerCase();

                const showCard =
                    selectedCategory === "all" ||
                    category === selectedCategory;

                card.hidden = !showCard;
            });
        });
    });
});
