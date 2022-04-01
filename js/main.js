const header = document.querySelector("#header");
window.addEventListener("scroll", stickyHeader);
function stickyHeader() {
  if (
    document.body.scrollTop > header.offsetHeight ||
    document.documentElement.scrollTop > header.offsetHeight
  ) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
}
