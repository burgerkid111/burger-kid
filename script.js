const nav = document.querySelector("nav");

// =========================
// CAMBIO DE COLOR DEL MENÚ
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        if (
            entry.target.id === "events" ||
            entry.target.id === "past-lives"
        ) {

            nav.classList.add("blue");

        } else {

            nav.classList.remove("blue");

        }

    });

}, {
    threshold: 0.5
});

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});


// =========================
// LIGHTBOX FLYERS
// =========================

const flyers = document.querySelectorAll(".flyer");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const close = document.querySelector(".close");

flyers.forEach(flyer => {

    flyer.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = flyer.src;

    });

});

close.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});