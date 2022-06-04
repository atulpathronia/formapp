"use strict";

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".btn");

console.log(inputs);

const validate = function () {
  inputs.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.nextElementSibling.classList.remove("hidden");
    }
    if (input.name === "email") {
      if (!input.value.includes("@")) {
        input.nextElementSibling.classList.remove("hidden");
        document.querySelector(
          ".email"
        ).textContent = `Provide proper email ID`;
      }
    }
  });
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});
