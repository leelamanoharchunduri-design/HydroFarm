document.addEventListener("DOMContentLoaded", function () {

    const products = {
        light: {
            id: "led-grow-light",
            name: "LED Grow Light",
            category: "GROW LIGHTS",
            price: 2499,
            image: "Images/Lighting.jpg",
            description:
                "Explore LED grow lighting for indoor hydroponic gardens and growing areas. Suitable lighting depends on plant type, growth stage, coverage area and distance from the plants.",
            features: [
                "Designed for indoor growing setups.",
                "Consider light coverage before selecting a fixture.",
                "Useful when natural light is limited.",
                "Compare power, heat output and lighting requirements."
            ],
            usage:
                "Position the light according to the manufacturer's instructions. Adjust the lighting schedule to suit the plants, and monitor plant responses as they grow."
        },

        nutrients: {
            id: "hydroponic-nutrients",
            name: "Hydroponic Nutrients",
            category: "NUTRIENTS",
            price: 799,
            image: "Images/Nutrients.jpg",
            description:
                "Hydroponic nutrient products supply essential minerals to plants growing without soil. Choose a formulation compatible with your crops and growing system.",
            features: [
                "Made for nutrient management in growing systems.",
                "Check crop compatibility and product instructions.",
                "Review mixing and storage guidance on the label.",
                "Monitor solution conditions as recommended."
            ],
            usage:
                "Follow the manufacturer's dosage and mixing instructions. Check compatibility with your growing system and monitor pH and nutrient concentration where appropriate."
        },

        tower: {
            id: "growing-tower",
            name: "Growing Tower",
            category: "GROWING TOWERS",
            price: 3499,
            image: "Images/Growing Tower.jpeg",
            description:
                "A growing tower can help you arrange plants vertically when floor space is limited. Consider the number of planting positions, stability, water delivery and ease of cleaning before choosing a system.",
            features: [
                "Uses vertical space for plant placement.",
                "Can suit selected leafy greens and herbs.",
                "Consider water circulation and drainage.",
                "Plan access for harvesting and maintenance."
            ],
            usage:
                "Assemble the tower according to its instructions, place it on a stable surface, and set up its water delivery system as specified by the manufacturer."
        },

        "full-led": {
            id: "full-spectrum-led",
            name: "Full-Spectrum LED",
            category: "GROW LIGHTS",
            price: 1899,
            image: "Images/LED.jpg",
            description:
                "Full-spectrum LED grow lights are designed to provide light wavelengths useful for plant growth. Compare fixture specifications and coverage to determine whether a particular light suits your growing area.",
            features: [
                "Designed for plant-growing applications.",
                "Review spectrum and light-output specifications.",
                "Check coverage and recommended mounting distance.",
                "Consider power consumption and heat management."
            ],
            usage:
                "Install the light as directed by the manufacturer. Follow the recommended distance and daily operating schedule for your plants."
        },

        "plant-care": {
            id: "plant-care-essentials",
            name: "Plant Care Essentials",
            category: "PLANT CARE",
            price: 599,
            image: "Images/Plant care.jpeg",
            description:
                "Plant-care essentials help you maintain your growing area and build a regular care routine. Check the included items and confirm that they suit your plants and system.",
            features: [
                "Supports routine plant-care activities.",
                "Check included tools and product specifications.",
                "Useful for organizing basic maintenance tasks.",
                "Choose items suited to your growing method."
            ],
            usage:
                "Read the instructions supplied with each item. Clean and store tools correctly, and follow appropriate safety instructions for any plant-care products."
        },

        "garden-kit": {
            id: "home-garden-kit",
            name: "Home Garden Kit",
            category: "GARDEN KITS",
            price: 1599,
            image: "Images/Home Garden kit.jpeg",
            description:
                "A home garden kit can help you get started with a small growing project. Before purchasing, check the kit contents, dimensions, supported plants and any additional equipment required.",
            features: [
                "Designed for home growing projects.",
                "Check which components are included.",
                "Plan a suitable location for your setup.",
                "Review assembly and plant-care instructions."
            ],
            usage:
                "Check the kit contents and assemble the components according to the instructions. Select suitable plants and follow the supplied growing and maintenance guidance."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const selectedKey = params.get("product") || "light";
    const product = products[selectedKey] || products.light;

    // Display the selected product.
    document.title = product.name + " | HydroGrow";

    document.getElementById("breadcrumbProduct").textContent = product.name;
    document.getElementById("detailCategory").textContent = product.category;
    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailPrice").textContent =
        "₹" + product.price.toLocaleString("en-IN");

    document.getElementById("detailDescription").textContent =
        product.description;

    document.getElementById("detailUsage").textContent = product.usage;

    const image = document.getElementById("detailImage");
    image.src = product.image;
    image.alt = product.name;

    // Display product features.
    const featuresList = document.getElementById("detailFeatures");

    product.features.forEach(function (feature) {
        const li = document.createElement("li");
        const icon = document.createElement("i");
        const text = document.createElement("span");

        icon.className = "fa-solid fa-check";
        text.textContent = feature;

        li.appendChild(icon);
        li.appendChild(text);
        featuresList.appendChild(li);
    });

    // Update footer year.
    document.getElementById("productDetailsYear").textContent =
        new Date().getFullYear();

    // Add the selected product to the demonstration cart.
    document.getElementById("detailAddToCart").addEventListener("click", function () {
        const message = document.getElementById("detailMessage");

        try {
            const savedCart = localStorage.getItem("hydrofarmCart");
            const cart = savedCart ? JSON.parse(savedCart) : [];

            if (!Array.isArray(cart)) {
                throw new Error("Unexpected cart format");
            }

            const existingItem = cart.find(function (item) {
                return item.id === product.id;
            });

            if (existingItem) {
                existingItem.quantity =
                    (Number(existingItem.quantity) || 1) + 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }

            localStorage.setItem("hydrofarmCart", JSON.stringify(cart));

            message.textContent =
                product.name + " was added to your browser's demo cart.";

            message.className = "success";

        } catch (error) {
            message.textContent =
                "The cart could not be updated. Please return to the Products page.";

            message.className = "error";
        }
    });

});






document.addEventListener("DOMContentLoaded", function () {
    const wishlistButton =
        document.getElementById("detailWishlistBtn");

    const detailName =
        document.getElementById("detailName");

    if (!wishlistButton || !detailName) return;

    function updateWishlistButton() {
        const productName = detailName.textContent.trim();

        let wishlist = [];

        try {
            wishlist = JSON.parse(
                localStorage.getItem("hydrofarm_wishlist") || "[]"
            );

            if (!Array.isArray(wishlist)) {
                wishlist = [];
            }
        } catch {
            wishlist = [];
        }

        const isAdded = wishlist.includes(productName);

        wishlistButton.classList.toggle("active", isAdded);
        wishlistButton.setAttribute("aria-pressed", String(isAdded));

        wishlistButton.innerHTML = isAdded
            ? '<i class="fa-solid fa-heart"></i> Added to Wishlist'
            : '<i class="fa-regular fa-heart"></i> Add to Wishlist';
    }

    wishlistButton.addEventListener("click", function () {
        const productName = detailName.textContent.trim();

        if (!productName) return;

        let wishlist = [];

        try {
            wishlist = JSON.parse(
                localStorage.getItem("hydrofarm_wishlist") || "[]"
            );

            if (!Array.isArray(wishlist)) {
                wishlist = [];
            }
        } catch {
            wishlist = [];
        }

        if (wishlist.includes(productName)) {
            wishlist = wishlist.filter(
                name => name !== productName
            );
        } else {
            wishlist.push(productName);
        }

        localStorage.setItem(
            "hydrofarm_wishlist",
            JSON.stringify(wishlist)
        );

        updateWishlistButton();
    });

    updateWishlistButton();
});

