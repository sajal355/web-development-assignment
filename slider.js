
const track = document.getElementById("sliderTrack");
const slides = Array.from(document.querySelectorAll(".slide"));

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const dotsContainer = document.getElementById("sliderDots");

let activeIndex = 0;

slides.forEach((slide, index) => {
    const dot = document.createElement("button");

    dot.classList.add("dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show image ${index + 1}`);

    dot.addEventListener("click", () => {
        goToSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = Array.from(
    dotsContainer.querySelectorAll(".dot")
);

function updateSlider() {
    track.style.transform =
        `translateX(-${activeIndex * 100}%)`;

    dots.forEach((dot, index) => {
        const isActive = index === activeIndex;

        dot.classList.toggle("active", isActive);

        dot.setAttribute(
            "aria-current",
            isActive ? "true" : "false"
        );
    });
}

function goToSlide(index) {
    activeIndex = (index + slides.length) % slides.length;
    updateSlider();
}

// Show the next image.
function showNext() {
    goToSlide(activeIndex + 1);
}

// Show the previous image.
function showPrevious() {
    goToSlide(activeIndex - 1);
}

nextButton.addEventListener("click", showNext);
previousButton.addEventListener("click", showPrevious);


window.addEventListener("resize", updateSlider);

updateSlider();
