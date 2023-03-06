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
  
  const $pw = document.querySelector(".pwA");
  const $pwC = document.querySelector(".pwC");
  const $btn = document.querySelector(".login-btn");
  $btn.type = "button";
  $btn.addEventListener("click", () => {
    if ($pw.value !== $pwC.value) {
      alert("확인 비밀번호가 다릅니다");
    } else {
      $btn.type = "submit";
    }
  });
})();
