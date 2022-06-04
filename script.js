"use strict";

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".btn");

const validate = function () {
  inputs.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.classList.remove("hidden");
      input.nextElementSibling.nextElementSibling.classList.remove("hidden");
    }
  });
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});
