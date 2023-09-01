const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

function scrollToAboutUs() {
  const aboutUsSection = document.getElementById("about-us");
  aboutUsSection.scrollIntoView({ behavior: "smooth" });
}
