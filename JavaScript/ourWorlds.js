let prevScrollPos = window.scrollY || window.pageYOffset;

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY || window.pageYOffset;
  const header = document.getElementById("header");

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});
