console.log("HydroFarm JavaScript is running!");


const themeBtn = document.getElementById("themeBtn");
const directionBtn = document.getElementById("directionBtn");
directionBtn.textContent = "RTL";
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Restore saved preferences
function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  themeBtn.textContent = theme === "dark" ? "☾" : "☀";
  themeBtn.title = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  localStorage.setItem("hydrofarm-theme", theme);
}


function setDirection(direction) {
    document.documentElement.dir = direction;

    // Show the opposite direction on the button
    directionBtn.textContent = direction === "ltr" ? "RTL" : "LTR";

    directionBtn.title = direction === "ltr"
        ? "Switch website to LTR"
        : "Switch website to RTL";

    localStorage.setItem("hydrofarm-direction", direction);
}

setTheme(localStorage.getItem("hydrofarm-theme") || "light");
setDirection(localStorage.getItem("hydrofarm-direction") || "ltr");

themeBtn.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";
  setTheme(nextTheme);
});

directionBtn.addEventListener("click", () => {
  const nextDirection = document.documentElement.dir === "ltr"
    ? "rtl"
    : "ltr";
  setDirection(nextDirection);
});

// Mobile navigation
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});




// ===== PRODUCT CATEGORY FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        // Update active filter button
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        // Show matching products
        productCards.forEach((card) => {
            const matches =
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory;

            card.hidden = !matches;
        });
    });
});

// ===== PRODUCT ENQUIRY SHORTCUT =====
const interestSelect = document.getElementById("interest");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");

document.querySelectorAll(".details-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;

        // Select the appropriate enquiry category
        if (productName.includes("Light") ||
            productName.includes("LED")) {
            interestSelect.value = "Grow Lights";
        } else if (productName.includes("Nutrients")) {
            interestSelect.value = "Hydroponic Nutrients";
        } else if (productName.includes("Tower")) {
            interestSelect.value = "Growing Towers";
        } else {
            interestSelect.value = "Other Enquiry";
        }

        // Add the product name to the message
        messageInput.value =
            `I would like to know more about ${productName}.`;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

        // Focus the message field after navigating
        window.setTimeout(() => {
            messageInput.focus({ preventScroll: true });
        }, 400);
    });
});


// Home dropdown
const homeDropdown = document.getElementById("homeDropdown");
const homeDropdownBtn = document.getElementById("homeDropdownBtn");

if (homeDropdown && homeDropdownBtn) {

    homeDropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = homeDropdown.classList.toggle("open");

        homeDropdownBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!homeDropdown.contains(event.target)) {
            homeDropdown.classList.remove("open");
            homeDropdownBtn.setAttribute("aria-expanded", "false");
        }
    });

    // Close dropdown with Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            homeDropdown.classList.remove("open");
            homeDropdownBtn.setAttribute("aria-expanded", "false");
            homeDropdownBtn.focus();
        }
    });
}

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.className = "form-status";
    formStatus.textContent = "";

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const name = nameInput.value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = interestSelect.value;
    const message = messageInput.value.trim();

    if (!name || !email || !interest || !message) {
        formStatus.textContent =
            "Please complete all required fields.";
        formStatus.classList.add("error");
        return;
    }

    // Front-end demonstration only.
    // Connect a backend or form service to deliver real enquiries.
    formStatus.textContent =
        "Demo submitted successfully! No enquiry has been sent. " +
        "Connect a backend to receive real messages.";
    formStatus.classList.add("success");

    contactForm.reset();
});

// ===== AUTOMATIC COPYRIGHT YEAR =====
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



(() => {
    const products = {
        "LED Grow Light": { price: 1499, emoji: "💡" },
        "Hydroponic Nutrients": { price: 2499, emoji: "🧪" },
        "Growing Tower": { price: 3999, emoji: "🌿" },
        "Full-Spectrum LED": { price: 2599, emoji: "☀️" },
        "Plant Care Essentials": { price: 1599, emoji: "🪴" },
        "Home Garden Kit": { price: 2999, emoji: "🌱" }
    };

    const CART_KEY = "hydrofarm_cart";
    const WISHLIST_KEY = "hydrofarm_wishlist";

    function load(key, fallback) {
        try {
            const saved = JSON.parse(localStorage.getItem(key));
            return saved ?? fallback;
        } catch {
            return fallback;
        }
    }

    let cart = load(CART_KEY, {});
    let wishlist = load(WISHLIST_KEY, []);

    if (!cart || Array.isArray(cart) || typeof cart !== "object") {
        cart = {};
    }

    if (!Array.isArray(wishlist)) {
        wishlist = [];
    }

    const money = amount =>
        "₹" + Number(amount).toLocaleString("en-IN");

    function saveData() {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    }

    function updateCounts() {
        const cartCount = document.getElementById("cartCount");
        const wishlistCount = document.getElementById("wishlistCount");

        if (cartCount) {
            cartCount.textContent = Object.values(cart)
                .reduce((total, qty) => total + Number(qty), 0);
        }

        if (wishlistCount) {
            wishlistCount.textContent = wishlist.length;
        }
    }

    function renderCart() {
        const container = document.getElementById("cartItems");
        const totalElement = document.getElementById("cartTotal");

        if (!container || !totalElement) {
            console.error("Cart section missing: check cartItems and cartTotal IDs.");
            return;
        }

        let total = 0;
        container.replaceChildren();

        const names = Object.keys(cart).filter(
            name => products[name] && Number(cart[name]) > 0
        );

        if (names.length === 0) {
            container.innerHTML =
                '<p class="empty-message">Your cart is empty.</p>';
        }

        names.forEach(name => {
            const quantity = Number(cart[name]);
            const subtotal = products[name].price * quantity;
            total += subtotal;

            const item = document.createElement("div");
            item.className = "cart-item";

            const info = document.createElement("div");
            const heading = document.createElement("h3");
            heading.textContent = products[name].emoji + " " + name;

            const price = document.createElement("p");
            price.textContent = money(products[name].price) + " each";

            const controls = document.createElement("div");
            controls.className = "cart-controls";

            const minus = document.createElement("button");
            minus.textContent = "−";
            minus.dataset.cartAction = "decrease";
            minus.dataset.name = name;
            minus.setAttribute("aria-label", "Decrease quantity");

            const quantityText = document.createElement("span");
            quantityText.textContent = quantity;

            const plus = document.createElement("button");
            plus.textContent = "+";
            plus.dataset.cartAction = "increase";
            plus.dataset.name = name;
            plus.setAttribute("aria-label", "Increase quantity");

            const remove = document.createElement("button");
            remove.textContent = "Remove";
            remove.className = "remove-cart-item";
            remove.dataset.cartAction = "remove";
            remove.dataset.name = name;

            controls.append(minus, quantityText, plus, remove);
            info.append(heading, price, controls);

            const subtotalText = document.createElement("span");
            subtotalText.className = "cart-subtotal";
            subtotalText.textContent = money(subtotal);

            item.append(info, subtotalText);
            container.appendChild(item);
        });

        totalElement.textContent = money(total);
        updateCounts();
    }

    function renderWishlist() {
        const container = document.getElementById("wishlistItems");

        if (!container) {
            console.error("Wishlist section missing: check wishlistItems ID.");
            return;
        }

        container.replaceChildren();

        if (wishlist.length === 0) {
            container.innerHTML =
                '<p class="empty-message">Your wishlist is empty.</p>';
        }

        wishlist.forEach(name => {
            if (!products[name]) return;

            const card = document.createElement("article");
            card.className = "wishlist-card";

            const emoji = document.createElement("div");
            emoji.className = "wishlist-emoji";
            emoji.textContent = products[name].emoji;

            const heading = document.createElement("h3");
            heading.textContent = name;

            const price = document.createElement("p");
            price.textContent = money(products[name].price);

            const actions = document.createElement("div");
            actions.className = "wishlist-actions";

            const addButton = document.createElement("button");
            addButton.textContent = "🛒 Add to Cart";
            addButton.dataset.wishlistAction = "add";
            addButton.dataset.name = name;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-wishlist";
            removeButton.dataset.wishlistAction = "remove";
            removeButton.dataset.name = name;

            actions.append(addButton, removeButton);
            card.append(emoji, heading, price, actions);
            container.appendChild(card);
        });

        updateCounts();

        document.querySelectorAll(".wishlist-btn").forEach(button => {
            const name = button.dataset.wishlist;
            const active = wishlist.includes(name);

            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
            button.textContent = active ? "♥" : "♡";
        });
    }

    function addToCart(name) {
        if (!products[name]) {
            console.error("Product name not recognised:", name);
            return;
        }

        cart[name] = (Number(cart[name]) || 0) + 1;
        saveData();
        renderCart();
    }

    function toggleWishlist(name) {
        if (!products[name]) {
            console.error("Product name not recognised:", name);
            return;
        }

        if (wishlist.includes(name)) {
            wishlist = wishlist.filter(item => item !== name);
        } else {
            wishlist.push(name);
        }

        saveData();
        renderWishlist();
    }

    // One click handler supports product buttons and generated cart items.
    document.addEventListener("click", event => {
        const addButton = event.target.closest(".add-cart-btn");

        if (addButton) {
            addToCart(addButton.dataset.cartProduct);
            return;
        }

        const wishButton = event.target.closest(".wishlist-btn");

        if (wishButton) {
            toggleWishlist(wishButton.dataset.wishlist);
            return;
        }

        const cartButton = event.target.closest("[data-cart-action]");

        if (cartButton) {
            const name = cartButton.dataset.name;
            const action = cartButton.dataset.cartAction;

            if (action === "increase") {
                cart[name] = (Number(cart[name]) || 0) + 1;
            } else if (action === "decrease") {
                cart[name] = (Number(cart[name]) || 1) - 1;

                if (cart[name] <= 0) {
                    delete cart[name];
                }
            } else if (action === "remove") {
                delete cart[name];
            }

            saveData();
            renderCart();
            return;
        }

        const wishlistAction = event.target.closest("[data-wishlist-action]");

        if (wishlistAction) {
            const name = wishlistAction.dataset.name;

            if (wishlistAction.dataset.wishlistAction === "add") {
                addToCart(name);
            } else {
                toggleWishlist(name);
            }

            return;
        }

        if (event.target.closest("#clearCartBtn")) {
            cart = {};
            saveData();
            renderCart();
        }
    });

    // Show saved cart and wishlist when the page loads.
    renderCart();
    renderWishlist();
})();


(() => {
    const CART_KEY = "hydrofarm_cart";

    const prices = {
        "LED Grow Light": 1499,
        "Hydroponic Nutrients": 2499,
        "Growing Tower": 3999,
        "Full-Spectrum LED": 2599,
        "Plant Care Essentials": 1599,
        "Home Garden Kit": 2999
    };

    const cartItemsElement = document.getElementById("checkoutItems");
    const subtotalElement = document.getElementById("checkoutSubtotal");
    const deliveryElement = document.getElementById("checkoutDelivery");
    const totalElement = document.getElementById("checkoutGrandTotal");
    const form = document.getElementById("checkoutForm");
    const message = document.getElementById("checkoutMessage");
    const payButton = document.getElementById("payNowBtn");
    const checkoutButton = document.getElementById("checkoutBtn");

    const money = amount => new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);

    // Adapt common cart item field names used by existing cart scripts.
    function getCart() {
        try {
            const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

            const items = Array.isArray(saved)
                ? saved
                : Object.entries(saved || {}).map(([name, item]) => ({
                    name,
                    ...(typeof item === "object" && item !== null
                        ? item
                        : { quantity: item })
                }));

            return items.map(item => {
                const name = item.name || item.product ||
                             item.title || item.productName;

                const quantity = Number(
                    item.quantity ?? item.qty ?? item.count ?? 1
                );

                return {
                    name,
                    quantity
                };
            }).filter(item =>
                prices[item.name] &&
                Number.isSafeInteger(item.quantity) &&
                item.quantity > 0
            );
        } catch {
            return [];
        }
    }

    function renderCheckout() {
        const cart = getCart();
        cartItemsElement.replaceChildren();

        let subtotal = 0;

        if (cart.length === 0) {
            const empty = document.createElement("p");
            empty.textContent = "Your cart is empty.";
            cartItemsElement.appendChild(empty);
        } else {
            cart.forEach(item => {
                const lineTotal = prices[item.name] * item.quantity;
                subtotal += lineTotal;

                const row = document.createElement("div");
                row.className = "checkout-item";

                const product = document.createElement("span");
                product.textContent =
                    `${item.name} × ${item.quantity}`;

                const amount = document.createElement("strong");
                amount.textContent = money(lineTotal);

                row.append(product, amount);
                cartItemsElement.appendChild(row);
            });
        }

        // Delivery is free in this example.
        const delivery = 0;
        const total = subtotal + delivery;

        subtotalElement.textContent = money(subtotal);
        deliveryElement.textContent =
            delivery === 0 ? "Free" : money(delivery);
        totalElement.textContent = money(total);

        return { cart, subtotal, delivery, total };
    }

    checkoutButton.addEventListener("click", () => {
        const { cart } = renderCheckout();

        if (cart.length === 0) {
            alert("Please add products to your cart first.");
            return;
        }

        document.getElementById("checkout").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Refresh the displayed summary when this page receives a cart update.
    window.addEventListener("storage", renderCheckout);

    form.addEventListener("submit", async event => {
        event.preventDefault();

        const { cart } = renderCheckout();

        if (cart.length === 0) {
            message.textContent = "Your cart is empty. Add a product first.";
            return;
        }

        const customer = {
            name: document.getElementById("customerName").value.trim(),
            email: document.getElementById("customerEmail").value.trim(),
            phone: document.getElementById("customerPhone").value.trim(),
            address: document.getElementById("customerAddress").value.trim(),
            city: document.getElementById("customerCity").value.trim(),
            pincode: document.getElementById("customerPincode").value.trim()
        };

        if (!form.reportValidity()) return;

        payButton.disabled = true;
        payButton.textContent = "Connecting to payment...";
        message.textContent = "";

        try {
            // The server calculates the authoritative amount from product prices.
            const response = await fetch("/api/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: cart, customer })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to create payment order.");
            }

            if (!window.Razorpay) {
                throw new Error("Payment gateway failed to load. Please try again.");
            }

            const payment = new Razorpay({
                key: data.keyId,
                amount: data.amount,
                currency: data.currency,
                name: "HydroFarm",
                description: "Hydroponic and vertical farming products",
                order_id: data.orderId,

                prefill: {
                    name: customer.name,
                    email: customer.email,
                    contact: customer.phone
                },

                theme: { color: "#287a43" },

                handler: async function (result) {
                    try {
                        const verification = await fetch("/api/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                ...result,
                                customer,
                                items: cart
                            })
                        });

                        const verified = await verification.json();

                        if (!verification.ok || !verified.verified) {
                            throw new Error(
                                verified.error || "Payment verification failed."
                            );
                        }

                        localStorage.removeItem(CART_KEY);
                        message.textContent =
                            "Payment verified successfully! Your order reference is " +
                            data.orderId + ".";

                        renderCheckout();
                        window.location.hash = "checkout";
                    } catch (error) {
                        message.textContent = error.message;
                    } finally {
                        payButton.disabled = false;
                        payButton.textContent = "Pay Securely →";
                    }
                },

                modal: {
                    ondismiss: function () {
                        payButton.disabled = false;
                        payButton.textContent = "Pay Securely →";
                        message.textContent =
                            "Payment window closed. Your cart is still saved.";
                    }
                }
            });

            payment.on("payment.failed", function () {
                message.textContent =
                    "Payment was not completed. Please try again.";
                payButton.disabled = false;
                payButton.textContent = "Pay Securely →";
            });

            payment.open();
        } catch (error) {
            message.textContent = error.message;
            payButton.disabled = false;
            payButton.textContent = "Pay Securely →";
        }
    });

    renderCheckout();
})();




document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const loginPassword = document.getElementById("loginPassword");
    const togglePassword = document.getElementById("togglePassword");
    const loginMessage = document.getElementById("loginMessage");
    const forgotPassword = document.getElementById("forgotPassword");
    const createAccount = document.getElementById("createAccount");

    // Display login messages
    function showLoginMessage(message) {
        if (!loginMessage) {
            console.error("Element with ID 'loginMessage' was not found.");
            return;
        }

        loginMessage.textContent = message;
        loginMessage.style.color = "#b45309";
        loginMessage.style.display = "block";
    }

    // Show or hide password
    if (togglePassword && loginPassword) {
        togglePassword.addEventListener("click", function () {
            const hidden = loginPassword.type === "password";

            loginPassword.type = hidden ? "text" : "password";
            togglePassword.textContent = hidden ? "Hide" : "Show";
        });
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!loginForm.checkValidity()) {
                loginForm.reportValidity();
                return;
            }

            showLoginMessage(
                "This is a frontend demo. Connect secure backend authentication to log in."
            );
        });
    }

    // Forgot password
    if (forgotPassword) {
        forgotPassword.addEventListener("click", function (event) {
            event.preventDefault();

            showLoginMessage(
                "Password recovery is not configured yet."
            );
        });
    }

    // Create account
    if (createAccount) {
        createAccount.addEventListener("click", function (event) {
            event.preventDefault();

            showLoginMessage(
                "Account registration is not configured yet."
            );
        });
    } else {
        console.error("Element with ID 'createAccount' was not found.");
    }

});





















