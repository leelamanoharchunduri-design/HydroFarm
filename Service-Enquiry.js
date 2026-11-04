document.addEventListener("DOMContentLoaded", function () {
    const services = {
        setup: {
            title: "Hydroponic System Setup",
            subtitle: "Plan a soil-free growing system that suits your space and goals.",
            heading: "Build Your Hydroponic Growing Setup",
            image: "Images/Hydroponic system setup.png",
            alt: "Hydroponic growing tower",
            description:
                "Learn about hydroponic systems that grow plants using water and dissolved nutrients instead of traditional soil. Explore options for a small home garden or a larger growing area, along with the basic equipment and maintenance involved.",
            benefits: [
                "Compare suitable hydroponic growing systems.",
                "Plan water circulation and nutrient delivery.",
                "Explore plant choices for your environment.",
                "Understand cleaning and routine maintenance."
            ],
            ideal:
                "Suitable for beginners, home gardeners and people planning a new hydroponic setup."
        },

        vertical: {
            title: "Vertical Farming Solutions",
            subtitle: "Make better use of your growing area with vertical systems.",
            heading: "Plan a Space-Smart Growing Area",
            image: "https://images.openai.com/static-rsc-4/qfaqDPsDkkUhx1ptQknh-Jxwc0acqG8YcajVXFDe_kj0CUMw2dusSKAY7Lvj4AaYU7G8iZEPLbEE_n8F5BJE2OQQmEy3PlMf6E0Pptnv3Ki2ldGr6YY7s9i5ORrFTn2EOLnipIotYM6C51rtoPBlH_CcWr2QaUo4O2cORx2jEx_is8ZvmFej-Qrbq_G54-__?purpose=fullsize",
            alt: "Vertical growing tower",
            description:
                "Explore vertical growing towers, racks and stacked growing layouts. The right arrangement depends on your available floor space, access to light, water supply, crop selection and the space needed to maintain the plants.",
            benefits: [
                "Review vertical towers, racks and growing layouts.",
                "Plan plant placement and access for maintenance.",
                "Consider light, airflow and water requirements.",
                "Explore options for balconies, rooftops or commercial spaces."
            ],
            ideal:
                "Suitable for apartment gardeners, schools, rooftop gardens and urban farming projects."
        },

        lighting: {
            title: "Grow Light Solutions",
            subtitle: "Understand indoor plant lighting and choose a suitable setup.",
            heading: "Give Your Plants Suitable Light",
            image: "https://images.openai.com/static-rsc-4/VMNSI1o7vWxQb1GA1KeedyqGNvpZ4_2T6_rX0c5171EeeNUSBhq5Og4Qa4ystl5wEq7h8cdoXwp8DDTO1fH8hWEU6VFRmsegCF_RRKY8zADE2sK6S23IuLSnIoZ2Lu6c-PEPyzpujxkmi9a4VNVUicQDMZFCZO1F0ooq-SIJS9WBMj9AKqjetuZurenJFoNH?purpose=fullsize",
            alt: "LED grow lighting",
            description:
                "Explore lighting options for indoor growing areas, seedlings and plants that receive limited natural sunlight. Light requirements vary by plant species, growth stage, fixture strength and distance from the canopy.",
            benefits: [
                "Compare different types of grow lights.",
                "Plan light placement and growing-area coverage.",
                "Understand daily lighting schedules for different plants.",
                "Consider energy use, heat and fixture maintenance."
            ],
            ideal:
                "Suitable for indoor gardeners, seedling growers and people setting up a grow-light system."
        },

        plantcare: {
            title: "Nutrients and Water Care",
            subtitle: "Learn the basics of balanced nutrients and healthy growing water.",
            heading: "Improve Your Plant-Care Routine",
            image: "https://images.openai.com/static-rsc-4/BhJCafPedMSsAgXI8b2PoDiVcEh97HKwRblGHyiuU2dnnn0tBxFpq7Sj9rjm9Y9EydALhcJOSc7nWig_hmdBUTkYFl4ijL4LgSIJz05ajZiy_1sHV4DSIU2v7ZIP9cM6Nz3pkMuJQVdCrTq2GN2WIY1Vapryb6PZ3_uZnN49X3bI4654XoyP2aOLqwuoHYHz?purpose=fullsize",
            alt: "Hydroponic nutrients",
            description:
                "Hydroponic plants rely on water and a balanced supply of mineral nutrients. Explore how water quality, nutrient concentration, pH and routine monitoring affect plant health. Requirements vary by crop and growing system.",
            benefits: [
                "Explore nutrient products appropriate for your system.",
                "Learn the basics of pH and electrical conductivity.",
                "Understand reservoir cleaning and water monitoring.",
                "Learn about common plant symptoms and possible causes."
            ],
            ideal:
                "Suitable for new hydroponic growers and gardeners looking to improve their maintenance routine."
        },

        consultation: {
            title: "Farm Consultation",
            subtitle: "Organize your farming ideas into a practical project plan.",
            heading: "Explore Your Farming Project",
            image:
                "https://images.openai.com/static-rsc-4/7m9DwDzkQtLkmphw32EOFQDKdWokNnUMcH-NwfcjC55A5AFXOGQOJ_qvTv-1zFcqiDzmKCw8J4zY6bWVzU6jckZjndH4mwBLGqSwfTqBn0RMyLdoFB6mfpX6vcnIL817eHHVpWugPJ51EBm77X_2FXe7Dfi7o60qSqVYTmG7aXGCVZSh4rCxYC0Nwx-mZOj_?purpose=fullsize",
            alt: "Agricultural growing landscape",
            description:
                "Explore the considerations involved in planning a hydroponic or vertical farm. Your project requirements may include the growing area, crop selection, equipment, water and electricity access, staffing and expected operating costs.",
            benefits: [
                "Outline your project goals and growing requirements.",
                "Review suitable systems and equipment categories.",
                "Consider layout, workflow and utility requirements.",
                "Identify initial setup and operating-cost factors."
            ],
            ideal:
                "Suitable for entrepreneurs, educational institutions and people planning a commercial growing project."
        },

        training: {
            title: "Training and Workshops",
            subtitle: "Build practical knowledge of hydroponics and plant care.",
            heading: "Learn the Fundamentals of Hydroponic Growing",
            image:
                "https://images.openai.com/static-rsc-4/q2gSl3RPGki8FRvr19ybJhG5sZYJqa5-qlsmbqtmTE2qmthrpVoGdq2Cyf707oD34Ape2P3TKLyqDgVVisSROgsBUYGJfVGqg7FHzqXVwWHC-lazYSiCqSTarV9V2USRhvYRSbkW3yGt0Englzy8ej-KP7jTs-KAWYgTnrRxOy0-30h3d4GektxkoF9YiTBt?purpose=fullsize",
            alt: "Hands caring for young plants",
            description:
                "Explore learning sessions covering the fundamentals of soil-free growing, growing-system components, plant selection and routine care. Training topics can be adapted to the experience level and learning goals of the participants.",
            benefits: [
                "Explore the basics of hydroponic growing systems.",
                "Learn plant selection and routine maintenance.",
                "Understand the role of water and nutrients.",
                "Plan learning activities for beginners or groups."
            ],
            ideal:
                "Suitable for students, families, beginner gardeners and educational groups."
        }
    };

    const params = new URLSearchParams(window.location.search);
    const serviceKey = params.get("service") || "setup";
    const service = services[serviceKey] || services.setup;

// ===== PASTE THE NEW CODE HERE =====

const extraServiceContent = {
    setup: {
        featuresHeading: "Build Your Hydroponic Growing System",
        featuresDescription: "Explore the essential elements of setting up a practical soil-free growing system.",
        features: [
            {
                icon: "fa-sitemap",
                title: "System Selection",
                text: "Compare suitable growing methods based on space, plants and maintenance needs."
            },
            {
                icon: "fa-droplet",
                title: "Water and Nutrients",
                text: "Understand nutrient solutions and water circulation."
            },
            {
                icon: "fa-toolbox",
                title: "Equipment Planning",
                text: "Learn about pumps, containers and growing channels."
            },
            {
                icon: "fa-seedling",
                title: "Plant Care Basics",
                text: "Understand routine maintenance and healthy plant care."
            }
        ],
        
    },

    // Add vertical, lighting, plantcare, consultation and training
    // below in the same format.
};



    // Update the page title and service information.
    document.title = service.title + " | HydroGrow";

    document.getElementById("serviceTitle").textContent = service.title;
    document.getElementById("serviceSubtitle").textContent = service.subtitle;
    document.getElementById("serviceHeading").textContent = service.heading;
    document.getElementById("serviceDescription").textContent = service.description;
    document.getElementById("serviceIdeal").textContent = service.ideal;
    document.getElementById("formServiceTitle").textContent =
        service.title + " Enquiry";

    document.getElementById("selectedService").value = service.title;

    const serviceImage = document.getElementById("serviceImage");
    serviceImage.src = service.image;
    serviceImage.alt = service.alt;

    // Display the benefits for the selected service.
    const benefitsList = document.getElementById("serviceBenefits");

    service.benefits.forEach(function (benefit) {
        const item = document.createElement("li");
        const icon = document.createElement("i");
        const text = document.createElement("span");

        icon.className = "fa-solid fa-check";
        text.textContent = benefit;

        item.appendChild(icon);
        item.appendChild(text);
        benefitsList.appendChild(item);
    });

    // Update the footer year.
    const yearElement = document.getElementById("servicesYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Update footer year...

// ===== INSERT HERE =====

const extra = extraServiceContent[serviceKey] || extraServiceContent.setup;

document.getElementById("featuresHeading").textContent =
    extra.featuresHeading;

document.getElementById("featuresDescription").textContent =
    extra.featuresDescription;

document.getElementById("applicationsHeading").textContent =
    extra.applicationsHeading;

document.getElementById("applicationsDescription").textContent =
    extra.applicationsDescription;

// Create feature cards
const featureGrid = document.getElementById("serviceFeaturesGrid");

featureGrid.innerHTML = "";

extra.features.forEach(function (item) {
    featureGrid.innerHTML += `
        <article class="service-feature-card">
            <div class="service-feature-icon">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `;
});

// Create application cards
const applicationGrid =
    document.getElementById("serviceApplicationsGrid");

applicationGrid.innerHTML = "";

extra.applications.forEach(function (item, index) {
    applicationGrid.innerHTML += `
        <article class="service-application-card">
            <div class="application-image">
                <img src="${item.image}" alt="${item.alt}">
            </div>

            <div class="application-content">
                <span>0${index + 1} / ${item.label}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>

                <a href="#serviceEnquiryForm">
                    Enquire About This
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `;
});

// ===== END INSERT =====

    // Demonstration form submission.
    const enquiryForm = document.getElementById("serviceEnquiryFormElement");
    const formMessage = document.getElementById("enquiryFormMessage");

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        formMessage.className = "success";
        formMessage.textContent =
            "Demo only: your form is valid, but the enquiry has not been sent. " +
            "Connect this form to a backend or form service to receive submissions.";

        // No customer information is sent or saved by this demo script.
    });
});



    




