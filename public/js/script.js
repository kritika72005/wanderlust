const { model } = require("mongoose");

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// dark mode

// document.addEventListener("DOMContentLoaded", (event) => {
//   const toggleButton = document.getElementById("dark-mode-toggle");

//   // Check if dark mode is already enabled
//   if (localStorage.getItem("dark-mode") === "enabled") {
//     document.body.classList.add("dark-mode");
//     document.querySelector(".navbar").classList.add("dark-mode");
//   }

//   toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     document.querySelector(".navbar").classList.toggle("dark-mode");

//     // Save dark mode preference
//     if (document.body.classList.contains("dark-mode")) {
//       localStorage.setItem("dark-mode", "enabled");
//     } else {
//       localStorage.removeItem("dark-mode");
//     }
//   });
// });
