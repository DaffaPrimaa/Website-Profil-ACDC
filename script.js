// Toggle menu mobile
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("open");
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Tutup menu mobile jika terbuka
      if (mobileMenu.classList.contains("open")) {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("open");
      }
    }
  });
});

// Perubahan background navbar saat di-scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("nav-shadow");
  } else {
    nav.classList.remove("nav-shadow");
  }
});

// Slider Foto Klinik dengan efek fade
const photos = ["/images/foto-dalam.png", "/images/foto-luar.png"];
let currentPhoto = 0;
const photoElement = document.getElementById("clinic-photo");

function changePhoto(direction) {
  photoElement.classList.add("opacity-0");

  setTimeout(() => {
    currentPhoto = (currentPhoto + direction + photos.length) % photos.length;
    photoElement.src = photos[currentPhoto];
    photoElement.classList.remove("opacity-0");
  }, 700);
}
