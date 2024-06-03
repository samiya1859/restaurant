const toggler = document.getElementById("toggler-item");
const navItem = document.getElementById("nav-items");

toggler.addEventListener("click", () => {
  navItem.classList.toggle("hidden");
});