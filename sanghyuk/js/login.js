(function () {
  "use strict";

  const $eye = document.querySelector(".fa-eye");
  const $eyeSlash = document.querySelector(".fa-eye-slash");
  const $password = document.querySelector(".password");

  $eye.addEventListener("click", () => {
    $eye.classList.toggle("hide");
    $eyeSlash.classList.toggle("hide");
    $password.type = "text";
  });

  $eyeSlash.addEventListener("click", () => {
    $eye.classList.toggle("hide");
    $eyeSlash.classList.toggle("hide");
    $password.type = "password";
  });
})();
