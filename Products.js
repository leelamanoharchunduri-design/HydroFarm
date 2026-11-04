
// HYDROGROW PRODUCT STORE
// Sample catalog for a frontend demonstration.
// Replace sample image URLs, prices and specifications
// with your actual product information before publishing.

const products = [
    {
        id: 1,
        name: "LED Grow Light",
        category: "lights",
        categoryName: "Grow Lights",
        price: 1499,
        images: [
            "https://images.openai.com/static-rsc-4/NwOEn3JC4F_ZXUMXnA3lgWrzr7PfHaO7PMo9_LMTH9DsQnEFSsnv8Z-WRz2yWxHRpbACDbKNUpLP0e2iCxpUAQ9rUcZv5IecS8KzNsFmzKVwfEKP7z7HH9wYrkrNT0jUn2ArEsOW4E55o0WQpkM8ya63kaWk7q9-ogBpkyKHbBEbmMmBubvqiQDhE_eTYjlm?purpose=fullsize",
            "https://images.openai.com/static-rsc-4/Hnf_Q0B7QYvz6JVBY7TvEr69xviSiKULj0aaGEZKwCfE3D6tRcnksB6SEr2dJBJL2Z9AhALXqZaLON3fs4kVVX1tUX1cpM3Kfsyxi9ppTUNJVGq2J_ViEpgMotwRu9nR49rr-tyPZmGPMUvP83rByQ6fwEBKQQvvLp3eg82YiuQmaE4ZQGDuJwfWv5BYNeVA?purpose=fullsize",
            "Images/Lighting.jpg"
        ],
        description:
            "An indoor plant light designed to supplement natural daylight " +
            "for herbs, leafy greens and seedlings in indoor growing spaces.",
        uses: [
            "Indoor herb and leafy-green gardens",
            "Seedling growth and plant propagation",
            "Growing areas with limited natural daylight"
        ],
        specs: {
            "Product type": "LED grow light",
            "Application": "Indoor gardening",
            "Installation": "Follow the supplied product instructions",
            "Power rating": "Check the selected model label",
            "In the box": "Light unit; accessories depend on model"
        },
        short: "Supplemental lighting for indoor plants."
    },
    {
        id: 2,
        name: "Hydroponic Nutrients",
        category: "nutrients",
        categoryName: "Plant Nutrients",
        price: 2499,
        images: [
            "https://images.openai.com/static-rsc-4/DO7L264Uld8Bct7inFWKfqiiglgur8A9wsaHVsiAXN-Oo536V_P4BfWR-Z1kTl2Oe3EfNe9YwpnQ6VrTw0ErOazMfClZLkGJC_8Imdi6KXbgltyBIt8_us-f5yE51mj1r-W1-Rr2epEKYKM_NV0BDCwNKLKEB3-BMMcEAmRM_YjehX1TnfmIm1VIKbIG3r72?purpose=fullsize",
            "https://images.openai.com/static-rsc-4/Q5v8Qj3PFTMX7-MbhR-fooEgtDc5T5iRBFOKZH13v8FVUtCVwYVUWQRs35wOm-ELtCMt5qsGNbmpamZZ50Mr-vS22GxMNsBx-egTvxtN421UuMPrfYhy3IUr1sq_44DC--lydPd1wEaTrzRSbnAlCHdCdajf1S9JK9CqmbJ-Yr2E0MP8fzz94nZZEKKg8lar?purpose=fullsize",
            "https://images.openai.com/static-rsc-4/MP5KNS9NM4pGjmUEXIHIgI6bMrQFno12U5gu8mpf3pArCgtXet_5UoQx4ytkbVFr3HGOFbcUVxsPM2QecmOYDxbcNv6ALNIqMHu1gdDAyEpLi5JOkD9ofVVBA37CHticzcKoDbbSMv9GkxKncj-ELyL_pCZJWlvxC80l33B3PC4WlO8X-DXQoIYi18RT1Bvp?purpose=fullsize"
        ],
        description:
            "A nutrient solution product intended for hydroponic growing. " +
            "Use only with compatible systems and follow the manufacturer's " +
            "mixing, storage and plant-specific instructions.",
        uses: [
            "Supporting plant nutrition in hydroponic systems",
            "Growing leafy greens and herbs when the formula is suitable",
            "Routine nutrient management according to product directions"
        ],
        specs: {
            "Product type": "Hydroponic nutrient solution",
            "Application": "Hydroponic systems",
            "Formula": "Confirm from product label",
            "Compatibility": "Depends on crop and growing system",
            "Usage": "Follow the manufacturer's label"
        },
        short: "Nutrient support for compatible hydroponic systems."
    },
    {
        id: 3,
        name: "Growing Tower",
        category: "towers",
        categoryName: "Growing Towers",
        price: 3999,
        images: [
            "https://images.openai.com/static-rsc-4/POVEtXMqqD1IdbJ9dHaTlqWwkVe5LqlercyXro4yTMZZWDI_iF-CMec50iNy1LlaNYBLFgcqfUCeoWDC-t5SJm8U7GU-X7Bi0IkbIb1wojRkPvX4r6zpjcXABW_lhZdzs6GK5EshvT-7Tzzm_BCLXpH_uS-5B0N4rCJnUaHJ4ucXakdjeO3-Fg6GacEw_34A?purpose=fullsize",
            "Images/Growing Tower.jpeg",
            "Images/Growing Tower.jpeg"
        ],
        description:
            "A vertical growing structure that arranges planting locations " +
            "upwards to make efficient use of floor space in home gardens " +
            "and suitable growing areas.",
        uses: [
            "Small-space gardening",
            "Growing suitable herbs and leafy greens",
            "Organising plants vertically on patios or indoors"
        ],
        specs: {
            "Product type": "Vertical growing tower",
            "Application": "Home and small-space gardening",
            "Plant capacity": "Confirm for the selected model",
            "Reservoir": "Depends on model",
            "Assembly": "Refer to included instructions"
        },
        short: "Vertical gardening for compact growing spaces."
    },
    {
        id: 4,
        name: "Full-Spectrum LED",
        category: "lights",
        categoryName: "Grow Lights",
        price: 2599,
        images: [
            "LED.jpg",
            "https://images.openai.com/static-rsc-4/rg_L5eQTHPK3LWjNOyCJ2ehsesLXzVNe79J8N2JWpG9h_O-E9qB7yLecFWx6baObEqqvaNbi6uKxns-ecRk9jpCzot1zt1VLu5-5umTX_dc9jYByWqQl4uJbaxTwc3RQ9qK097Xz6y7OTGboTbDiobyznc6GaHB1-cT10UXCDwGjTJpRKeWRC81YaQuU9lId?purpose=fullsize",
            "https://images.openai.com/static-rsc-4/NdFGt7EQLD-XcGKmVnZYx3Iy0m2YEIZiC4bM0MVmv3uJCwkcbEH1HS8GTfKPCeOEGDi87Lg5msgCNXX-j6QDtXvC43Fcb3xmAhusD6HaM6GiTj4EWg5T-VP_3rAYAjzTGKePs8ojTGbhNFCqd6N2VfX80kRcevbr3AaR3-_1pEQFY0PMBpS0p1SOT4Exv1s_?purpose=fullsize"
        ],
        description:
            "A supplemental LED lighting option for indoor plant cultivation. " +
            "Check its spectrum, power rating and coverage against the needs " +
            "of your particular plants and growing area.",
        uses: [
            "Indoor growing racks",
            "Supplementing light for leafy plants",
            "Small plant propagation setups"
        ],
        specs: {
            "Product type": "LED plant light",
            "Application": "Indoor cultivation",
            "Spectrum": "Confirm from product specifications",
            "Power rating": "Confirm model label",
            "Coverage area": "Depends on mounting height and model"
        },
        short: "Supplemental LED lighting for indoor gardens."
    },
    {
        id: 5,
        name: "Plant Care Essentials",
        category: "accessories",
        categoryName: "Accessories",
        price: 1599,
        images: [
            "https://images.openai.com/static-rsc-4/517eAiNhz9Fr3I22dDS0tRAN55Dx7sBqXy7__MItW3Mu_l5CHPXSOtuew2W6aJpPaioqDFXuEPGAQ6VMoMg1jzN77Rzcwdp1oALEDbRVRBmi4sh0FKCQxHNIYIYBY_VFP8JuAoIHV_-LKWBLVyDZulYkMK_zA-OIad9FOHovKOMoZJSQJdla0cPL4bFgqW6U?purpose=fullsize",
            "Images/Plant care.jpeg",
            "Images/Plant care.jpeg"
        ],
        description:
            "A sample plant-care collection for organising common gardening " +
            "tasks. Check the package contents before purchase because the " +
            "included accessories depend on the kit you offer.",
        uses: [
            "Routine plant-care tasks",
            "Organising small home gardening supplies",
            "Supporting regular garden maintenance"
        ],
        specs: {
            "Product type": "Plant-care kit",
            "Application": "Home gardening",
            "Contents": "Confirm the actual package",
            "Material": "Depends on included items",
            "Care": "Follow each item's instructions"
        },
        short: "Useful essentials for everyday garden maintenance."
    },
    {
        id: 6,
        name: "Home Garden Kit",
        category: "kits",
        categoryName: "Garden Kits",
        price: 2999,
        images: [
            "https://images.openai.com/static-rsc-4/l5DIGgry7alxw90wB2qupOOmdacd62KUmGshg3Qp_fcHmk4KV_1CB5iK7Rj_A2D87smFhPiueIOiv7YenNto274ZvqkJ8nqYAfm7RAdrsnbN_vjO2i9RymfIvcpwWLwG-eP9_b3D_bhu64uxTBnbTUYCj41_01Nwm-LkbeS8_qyCMuqHdwhGS8xThZlfhx9G?purpose=fullsize",
            "https://images.openai.com/static-rsc-4/jP3F2IW61oZZ-Yciv4vR6uzye2TebGOlxDrsccGaKTmVBRYd_upzh4dTqw6jgjzRYow9inZ4tJ-35RatHHy_7zln_1z8eEj5lc3ES4h5KFOh0F37TVXgdO6LBnNX_T-9hDMN3tR_uAlJpkjM3DiNfFPaBCXYFSK0ShCQ1oiOc7nO5sQNiioI4mCIO9pdhxeq?purpose=fullsize",
            "Images/Home Garden kit.jpeg"
        ],
        description:
            "A starter-kit concept for people interested in growing plants " +
            "at home. Review the actual package contents and check whether " +
            "growing media, nutrients, seeds and a pump are included.",
        uses: [
            "Starting a home gardening project",
            "Learning the basics of plant cultivation",
            "Growing compatible herbs or leafy greens"
        ],
        specs: {
            "Product type": "Home growing kit",
            "Application": "Beginner home gardening",
            "Included items": "Confirm package contents",
            "Growing method": "Depends on selected kit",
            "Setup": "Refer to product manual"
        },
        short: "A starting point for home gardening."
    },
    {
        id: 7,
        name: "Hydroponic Net Pots",
        category: "accessories",
        categoryName: "Accessories",
        price: 499,
        images: [
            "https://images.openai.com/static-rsc-4/NFh5uZB6N0BcaiQWTwmhPHGTbr4RQ6Yc8Jvql4P1onK954reTxjBP256EO-CT3NTv9hZS7H3kavrSURo8IC1iJul5ExA3rRvVdh13X6iVKlV6IqfIx9OcVeSsQem-oxLq1zx0RcOJZd9wKdT45IS4YAcUdvq8EWV1hfamUk8OCcEtEuxT9HH68VGpRbmgWNd?purpose=fullsize",
            "Images/Plant care.jpeg",
            "Images/Growing Tower.jpeg"
        ],
        description:
            "Reusable-style planting pots with openings that can support " +
            "roots and growing media in compatible hydroponic systems. " +
            "Verify the diameter before ordering.",
        uses: [
            "Holding plants in compatible hydroponic channels",
            "Supporting suitable growing media",
            "Replacing worn or missing planting cups"
        ],
        specs: {
            "Product type": "Hydroponic net pot",
            "Material": "Confirm seller specification",
            "Diameter": "Select the required size",
            "Compatibility": "Depends on system opening",
            "Package quantity": "Confirm before purchase"
        },
        short: "Plant holders for compatible hydroponic systems."
    },
    {
        id: 8,
        name: "Hydroponic Growing Media",
        category: "accessories",
        categoryName: "Growing Media",
        price: 699,
        images: [
            "Images/Nutrients.jpg",
            "Images/Plant care.jpeg",
            "Images/Nutrients.jpg"
        ],
        description:
            "A sample growing-media listing for supporting plant roots in " +
            "suitable hydroponic setups. The exact material and properties " +
            "must match the product you actually sell.",
        uses: [
            "Supporting roots in compatible systems",
            "Holding seedlings in suitable growing containers",
            "Providing physical support where the growing method requires it"
        ],
        specs: {
            "Product type": "Growing medium",
            "Material": "Specify the actual material",
            "Application": "Depends on system and crop",
            "Package size": "Confirm package label",
            "Preparation": "Follow supplier directions"
        },
        short: "Root support for suitable soilless growing systems."
    }
];


// STATE

let activeCategory = "all";
let currentProductId = null;
let currentGalleryIndex = 0;
let cart = {};
let wishlist = new Set();

const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const productModal = document.getElementById("productModal");
const shoppingDrawer = document.getElementById("shoppingDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const checkoutSection = document.getElementById("checkoutSection");

const money = amount =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);

function getProduct(id) {
    return products.find(product => product.id === Number(id));
}


// PRODUCT CARDS

function renderProducts() {
    const search = productSearch.value.trim().toLowerCase();

    const filtered = products.filter(product => {
        const matchesCategory =
            activeCategory === "all" ||
            product.category === activeCategory;

        const searchableText = [
            product.name,
            product.categoryName,
            product.description,
            product.short,
            ...product.uses
        ].join(" ").toLowerCase();

        return matchesCategory &&
               searchableText.includes(search);
    });

    productGrid.innerHTML = filtered.map(product => `
        <article class="product-card">

            <div class="product-card-image"
                 data-view="${product.id}"
                 tabindex="0"
                 role="button"
                 aria-label="View ${product.name} details">

                <img src="${product.images[0]}"
                     alt="${product.name}"
                     loading="lazy">

                <button class="card-wishlist ${
                    wishlist.has(product.id) ? "selected" : ""
                }"
                    data-wishlist="${product.id}"
                    aria-label="Toggle ${product.name} wishlist"
                    aria-pressed="${wishlist.has(product.id)}"
                    type="button">
                    ${wishlist.has(product.id) ? "♥" : "♡"}
                </button>
            </div>

            <div class="product-card-content">
                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h3>${product.name}</h3>

                <p class="product-short-description">
                    ${product.short}
                </p>

                <div class="product-price">${money(product.price)}</div>

                <div class="product-card-buttons">
                    <button class="view-details-btn"
                            type="button"
                            data-view="${product.id}">
                        View Product Details
                    </button>

                    <button class="shop-btn"
                            type="button"
                            data-add="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `).join("");

    document.getElementById("resultCount").textContent =
        `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;

    document.getElementById("emptyMessage").hidden =
        filtered.length !== 0;
}


// FILTERS AND SEARCH

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.toggle("active", btn === button);
        });

        renderProducts();
    });
});

productSearch.addEventListener("input", renderProducts);


// GALLERY AND PRODUCT DETAILS

function openProductDetails(id) {
    const product = getProduct(id);

    if (!product) return;

    currentProductId = product.id;
    currentGalleryIndex = 0;

    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailCategory").textContent =
        product.categoryName;
    document.getElementById("detailPrice").textContent =
        money(product.price);
    document.getElementById("detailDescription").textContent =
        product.description;

    document.getElementById("detailUses").innerHTML =
        product.uses.map(use => `<li>${use}</li>`).join("");

    document.getElementById("detailSpecs").innerHTML =
        Object.entries(product.specs).map(([key, value]) => `
            <div class="spec-row">
                <span>${key}</span>
                <span>${value}</span>
            </div>
        `).join("");

    document.getElementById("detailQuantity").value = 1;

    renderGallery(product);

    document.getElementById("detailWishlist").textContent =
        wishlist.has(product.id)
            ? "♥ Remove from Wishlist"
            : "♡ Add to Wishlist";

    document.getElementById("detailMessage").textContent = "";

    productModal.hidden = false;
    document.body.style.overflow = "hidden";
}

function renderGallery(product) {
    const images = product.images;

    document.getElementById("detailMainImage").src =
        images[currentGalleryIndex];

    document.getElementById("detailMainImage").alt =
        product.name + " image " + (currentGalleryIndex + 1);

    document.getElementById("detailThumbnails").innerHTML =
        images.map((image, index) => `
            <button type="button"
                    class="thumbnail ${
                        index === currentGalleryIndex ? "active" : ""
                    }"
                    data-thumbnail="${index}"
                    aria-label="View image ${index + 1}">
                <img src="${image}" alt="">
            </button>
        `).join("");
}

document.getElementById("detailThumbnails")
    .addEventListener("click", event => {
        const button = event.target.closest("[data-thumbnail]");

        if (!button) return;

        const product = getProduct(currentProductId);
        if (!product) return;

        currentGalleryIndex = Number(button.dataset.thumbnail);
        renderGallery(product);
    });

document.getElementById("productGrid").addEventListener("click", event => {
    const wishlistButton = event.target.closest("[data-wishlist]");
    if (wishlistButton) {
        event.stopPropagation();
        toggleWishlist(Number(wishlistButton.dataset.wishlist));
        return;
    }

    const addButton = event.target.closest("[data-add]");
    if (addButton) {
        addToCart(Number(addButton.dataset.add), 1);
        return;
    }

    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
        openProductDetails(Number(viewButton.dataset.view));
    }
});

document.getElementById("productGrid").addEventListener("keydown", event => {
    if (
        (event.key === "Enter" || event.key === " ") &&
        event.target.matches("[data-view]")
    ) {
        event.preventDefault();
        openProductDetails(Number(event.target.dataset.view));
    }
});

function closeProductDetails() {
    productModal.hidden = true;
    document.body.style.overflow = "";
}

document.getElementById("closeProductModal")
    .addEventListener("click", closeProductDetails);

productModal.addEventListener("click", event => {
    if (event.target === productModal) closeProductDetails();
});


// QUANTITY SELECTOR

const detailQuantity = document.getElementById("detailQuantity");

function clampDetailQuantity() {
    const value = Number(detailQuantity.value);

    detailQuantity.value = Math.max(
        1,
        Math.min(99, Number.isFinite(value) ? Math.floor(value) : 1)
    );
}

document.getElementById("decreaseQuantity").addEventListener("click", () => {
    detailQuantity.value = Math.max(1, Number(detailQuantity.value) - 1);
});

document.getElementById("increaseQuantity").addEventListener("click", () => {
    detailQuantity.value = Math.min(99, Number(detailQuantity.value) + 1);
});

detailQuantity.addEventListener("change", clampDetailQuantity);

document.getElementById("detailAddToCart").addEventListener("click", () => {
    clampDetailQuantity();

    addToCart(
        currentProductId,
        Number(detailQuantity.value)
    );

    document.getElementById("detailMessage").textContent =
        "Product added to your cart.";
});

document.getElementById("detailWishlist").addEventListener("click", () => {
    if (currentProductId === null) return;
    toggleWishlist(currentProductId);

    document.getElementById("detailWishlist").textContent =
        wishlist.has(currentProductId)
            ? "♥ Remove from Wishlist"
            : "♡ Add to Wishlist";
});


// WISHLIST

function toggleWishlist(id) {
    if (wishlist.has(id)) {
        wishlist.delete(id);
    } else {
        wishlist.add(id);
    }

    document.getElementById("wishlistCount").textContent =
        wishlist.size;

    renderProducts();
}

document.getElementById("wishlistToggle").addEventListener("click", () => {
    renderDrawer("wishlist");
    openDrawer();
});


// CART

function addToCart(id, quantity) {
    const product = getProduct(id);

    if (!product) return;

    cart[id] = Math.min(99, (cart[id] || 0) + quantity);

    updateCartCount();
    renderDrawer("cart");
}

function updateCartCount() {
    const count = Object.values(cart).reduce(
        (total, quantity) => total + quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;
}

function changeCartQuantity(id, quantity) {
    if (!getProduct(id)) return;

    if (quantity <= 0) {
        delete cart[id];
    } else {
        cart[id] = Math.min(99, Math.floor(quantity));
    }

    updateCartCount();
    renderDrawer("cart");
}

function renderDrawer(mode = "cart") {
    const isWishlist = mode === "wishlist";

    document.getElementById("drawerTitle").textContent =
        isWishlist ? "Your Wishlist" : "Your Cart";

    const ids = isWishlist
        ? [...wishlist]
        : Object.keys(cart).map(Number);

    const items = ids.map(id => {
        const product = getProduct(id);
        if (!product) return "";

        const quantity = cart[id] || 1;

        return `
            <div class="drawer-item">
                <img src="${product.images[0]}"
                     alt="${product.name}">

                <div>
                    <h4>${product.name}</h4>
                    <p>${money(product.price)}</p>

                    ${isWishlist ? "" : `
                        <label>
                            Qty:
                            <input class="drawer-quantity"
                                   type="number"
                                   min="1"
                                   max="99"
                                   value="${quantity}"
                                   data-cart-quantity="${id}">
                        </label>
                    `}

                    <button type="button"
                            data-remove="${id}"
                            data-mode="${mode}">
                        ${isWishlist ? "Remove from Wishlist" : "Remove"}
                    </button>

                    ${isWishlist ? `
                        <button type="button" data-add="${id}">
                            Add to Cart
                        </button>
                    ` : ""}
                </div>
            </div>
        `;
    }).join("");

    document.getElementById("drawerItems").innerHTML =
        items || `<p class="empty-drawer">${
            isWishlist
                ? "Your wishlist is empty."
                : "Your cart is empty."
        }</p>`;

    const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = getProduct(id);
        return sum + (product ? product.price * qty : 0);
    }, 0);

    document.getElementById("cartSubtotal").textContent =
        money(subtotal);

    document.getElementById("cartSummary").hidden = isWishlist;
}

document.getElementById("drawerItems").addEventListener("click", event => {
    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
        const id = Number(removeButton.dataset.remove);

        if (removeButton.dataset.mode === "wishlist") {
            wishlist.delete(id);
            document.getElementById("wishlistCount").textContent =
                wishlist.size;
            renderProducts();
            renderDrawer("wishlist");
        } else {
            delete cart[id];
            updateCartCount();
            renderDrawer("cart");
        }
        return;
    }

    const addButton = event.target.closest("[data-add]");

    if (addButton) {
        addToCart(Number(addButton.dataset.add), 1);
        renderDrawer("wishlist");
    }
});

document.getElementById("drawerItems")
    .addEventListener("change", event => {
        const input = event.target.closest("[data-cart-quantity]");

        if (!input) return;

        const quantity = Number(input.value);

        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
            renderDrawer("cart");
            return;
        }

        changeCartQuantity(
            Number(input.dataset.cartQuantity),
            quantity
        );
    });


// DRAWER CONTROLS

function openDrawer() {
    shoppingDrawer.classList.add("open");
    shoppingDrawer.setAttribute("aria-hidden", "false");
    drawerOverlay.hidden = false;
}

function closeDrawer() {
    shoppingDrawer.classList.remove("open");
    shoppingDrawer.setAttribute("aria-hidden", "true");
    drawerOverlay.hidden = true;
}

document.getElementById("cartToggle").addEventListener("click", () => {
    renderDrawer("cart");
    openDrawer();
});

document.getElementById("closeDrawer").addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeDrawer();

        if (!productModal.hidden) {
            closeProductDetails();
        }
    }
});


// CHECKOUT

document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
        document.getElementById("drawerItems").innerHTML =
            '<p class="empty-drawer">Add a product before checkout.</p>';
        return;
    }

    const total = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = getProduct(id);
        return sum + (product ? product.price * qty : 0);
    }, 0);

    document.getElementById("checkoutTotal").textContent = money(total);
    checkoutSection.hidden = false;

    closeDrawer();
    checkoutSection.scrollIntoView({ behavior: "smooth" });
});

// CHECKOUT FORM AND PAYMENT SECTION

document.getElementById("checkoutForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    if (Object.keys(cart).length === 0) {
        document.getElementById("checkoutMessage").textContent =
            "Your cart is empty. Please add products first.";
        return;
    }

    // Calculate the total amount
    const total = Object.entries(cart).reduce((sum, [id, quantity]) => {
        const product = getProduct(id);
        return sum + (product ? product.price * quantity : 0);
    }, 0);

    // Display the total in the payment section
    document.getElementById("gatewayTotal").textContent = money(total);

    document.getElementById("gatewayMessage").textContent = "";

    // Show the payment section
    const paymentSection = document.getElementById("paymentSection");
    paymentSection.hidden = false;

    paymentSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


// PAYMENT BUTTON

document.getElementById("gatewayPayBtn").addEventListener("click", () => {
    const selectedMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
    );

    if (!selectedMethod) {
        document.getElementById("gatewayMessage").textContent =
            "Please select a payment method.";
        return;
    }

    document.getElementById("gatewayMessage").textContent =
        "Selected payment method: " + selectedMethod.value +
        ". A secure payment gateway must be connected to process your payment.";
});


// INITIAL RENDER

renderProducts();
updateCartCount();
renderDrawer("cart");







