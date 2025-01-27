// side bar script
document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        arrow.classList.remove("rotate");
      } else {
        dropdownContent.style.display = "block";
        arrow.classList.add("rotate");
      }
    });
  });
});

// header script
document.addEventListener("DOMContentLoaded", function () {
  const notificationBell = document.querySelector(".notification");

  notificationBell.addEventListener("click", function () {
    alert("You have new notifications!");
  });
});
