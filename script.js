let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dotContainer = document.querySelector(".dot-container");

// Create dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => currentSlide(i + 1);
  dotContainer.appendChild(dot);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Initialize the slider
showSlides(slideIndex);

// dropdown

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownIcon = document.querySelector(".dropdown-icon");
const dropdownText = document.querySelector(".dropdown-text");

dropdownBtn.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
  dropdownIcon.classList.toggle("rotate");
});

dropdownMenu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    const selectedOption = e.target.textContent;
    dropdownText.textContent = selectedOption; // Update button text with selected option
    dropdownMenu.classList.remove("show");
    dropdownIcon.classList.remove("rotate");
  }
});

//dropdown-2

const dropdownBtn2 = document.querySelector(".dropdown-btn-2");
const dropdownMenu2 = document.querySelector(".dropdown-menu-2");
const dropdownIcon2 = document.querySelector(".dropdown-icon-2");
const dropdownText2 = document.querySelector(".dropdown-text-2");

dropdownBtn2.addEventListener("click", function () {
  dropdownMenu2.classList.toggle("show");
  dropdownIcon2.classList.toggle("rotate");
});

dropdownMenu2.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    const selectedOption = e.target.textContent;
    dropdownText2.textContent = selectedOption; // Update button text with selected option
    dropdownMenu2.classList.remove("show");
    dropdownIcon2.classList.remove("rotate");
  }
});
