const toggleIcon = document.querySelector(".navbar .nav > i");
toggleIcon.addEventListener("click", () => {
  document.querySelector(".navbar .links").classList.toggle("show");
});

const tabActive = document.querySelector(".tab.active");
const infoTabs = Array.from(document.querySelectorAll(".tabs .tab"));
const textPar = document.querySelector(".info-tabs .text > p");
infoTabs.forEach((x) => {
  x.addEventListener("click", () => {
    infoTabs.forEach((y) => {
      y.classList.remove("active");
    });
    x.classList.add("active");
    textPar.textContent = `Tap Number ${x.dataset.info}`;
  });
});

const scrollToTop = document.querySelector("body > i");
scrollToTop.style.display = "none";
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
