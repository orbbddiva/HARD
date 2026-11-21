
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

const moreToggle = document.getElementById("moreToggle");
const moreDropdown = document.getElementById("moreDropdown");

// Mobile navigation
if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}

// More dropdown
if (moreToggle && moreDropdown) {
    moreToggle.addEventListener("click", function () {
        moreDropdown.classList.toggle("show");
    });
}

console.log("H.A.R.D. — Home successfully loaded.");
