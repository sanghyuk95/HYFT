const $checkAll = document.querySelector("#checkAll");
const $check = document.querySelectorAll("#checkbox");

$checkAll.addEventListener("change", ({ target }) => {
  $check.forEach((e) => {
    e.checked = target.checked;
  });
});

const $camera = document.querySelector(".fa-camera-rotate");
const $modal = document.querySelector(".modal");
const $modalX = document.querySelector(".modal .fa-xmark");

$camera.addEventListener("click", () => {
  $modal.classList.remove("hidden");
});
$modalX.addEventListener("click", () => {
  $modal.classList.add("hidden");
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}
