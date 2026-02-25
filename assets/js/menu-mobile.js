document.addEventListener("DOMContentLoaded", function () {

  fetch("/assets/pages/menu-mobile.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("menu-mobile-container").innerHTML = data;

      const menu = document.querySelector(".menu-mobile");
      const openButton = document.querySelector(".register-menu-icon");
      const closeButton = document.querySelector(".menu-mobile-close");

      openButton.addEventListener("click", function () {
        menu.classList.add("active");
      });

      closeButton.addEventListener("click", function () {
        menu.classList.remove("active");
      });

    });

});