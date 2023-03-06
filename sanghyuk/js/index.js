const introText = document.querySelectorAll("span");

window.onload = () => {
  let timer = 100;
  introText.forEach((item) => {
    item.style.animation = `fade 1000ms ${(timer += 100)}ms forwards`;
  });
};

const $happy = document.querySelector("#happy");
const $happyS = document.querySelector(".happyS");
const $happyB = document.querySelector(".happyB");
const $happyT = document.querySelector(".happyT");

const $bored = document.querySelector("#bored");
const $boredS = document.querySelector(".boredS");
const $boredB = document.querySelector(".boredB");
const $boredT = document.querySelector(".boredT");

const $sad = document.querySelector("#sad");
const $sadS = document.querySelector(".sadS");
const $sadB = document.querySelector(".sadB");
const $sadT = document.querySelector(".sadT");

const $nervous = document.querySelector("#nervous");
const $nervousS = document.querySelector(".nervousS");
const $nervousB = document.querySelector(".nervousB");
const $nervousT = document.querySelector(".nervousT");

const $angry = document.querySelector("#angry");
const $angryS = document.querySelector(".angryS");
const $angryB = document.querySelector(".angryB");
const $angryT = document.querySelector(".angryT");

const $lonely = document.querySelector("#lonely");
const $lonelyS = document.querySelector(".lonelyS");
const $lonelyB = document.querySelector(".lonelyB");
const $lonelyT = document.querySelector(".lonelyT");

$happy.addEventListener("animationend", () => {
  $happyB.addEventListener("mouseover", () => {
    $happy.style.animationName = "happyHover";
    $happy.style.animationDelay = "0s";
    $happy.style.animationDuration = "0.5s";
    $happy.style.animationIterationCount = "infinite";
    $happyS.style.animationName = "shadowHappyHover";
    $happyS.style.animationDelay = "0s";
    $happyS.style.animationDuration = "0.5s";
    $happyS.style.animationIterationCount = "infinite";
    $happyT.style.display = "block";
    $happyT.style.top = "15px";
    $happyT.style.right = "-15px";
  });
  $happyB.addEventListener("mouseout", () => {
    $happy.style.animationName = "none";
    $happyS.style.animationName = "none";
    $happyT.style.display = "none";
  });
});

$bored.addEventListener("animationend", () => {
  $boredB.addEventListener("mouseover", () => {
    $bored.style.animationName = "boredHover";
    $bored.style.animationDuration = "2s";
    $bored.style.animationIterationCount = "infinite";
    $boredS.style.animationName = "shadowBoredHover";
    $boredS.style.animationDuration = "2s";
    $boredS.style.animationIterationCount = "infinite";
    $boredT.style.display = "block";
    $boredT.style.top = "35px";
    $boredT.style.right = "-10px";
  });
  $boredB.addEventListener("mouseout", () => {
    $bored.style.animationName = "none";
    $boredS.style.animationName = "none";
    $boredT.style.display = "none";
  });
});

$sad.addEventListener("animationend", () => {
  $sadB.addEventListener("mouseover", () => {
    $sad.style.animationName = "sadHover";
    $sad.style.animationDuration = "3s";
    $sad.style.animationIterationCount = "infinite";
    $sadT.style.display = "block";
    $sadT.style.top = "35px";
    $sadT.style.right = "-10px";
  });
  $sadB.addEventListener("mouseout", () => {
    $sad.style.animationName = "none";
    $sadS.style.animationName = "none";
    $sadT.style.display = "none";
  });
});

$nervous.addEventListener("animationend", () => {
  $nervousB.addEventListener("mouseover", () => {
    $nervous.style.animationName = "nervousHover";
    $nervous.style.animationDuration = "0.01s";
    $nervous.style.animationIterationCount = "infinite";
    $nervousS.style.animationName = "shadowNervousHover";
    $nervousS.style.animationDuration = "0.01s";
    $nervousS.style.animationIterationCount = "infinite";
    $nervousT.style.display = "block";
    $nervousT.style.top = "35px";
    $nervousT.style.right = "-10px";
  });
  $nervousB.addEventListener("mouseout", () => {
    $nervous.style.animationName = "none";
    $nervousS.style.animationName = "none";
    $nervousT.style.display = "none";
  });
});

$angry.addEventListener("animationend", () => {
  $angryB.addEventListener("mouseover", () => {
    $angry.style.animationName = "angryHover";
    $angry.style.animationDelay = "0s";
    $angry.style.animationDuration = "0.5s";
    $angry.style.transformOrigin = "50% 100%";
    $angry.style.animationIterationCount = "infinite";
    $angryS.style.animationName = "shadowAngryHover";
    $angryS.style.animationDelay = "0s";
    $angryS.style.animationDuration = "0.5s";
    $angryS.style.animationIterationCount = "infinite";
    $angryT.style.display = "block";
    $angryT.style.top = "35px";
    $angryT.style.right = "-10px";
  });
  $angryB.addEventListener("mouseout", () => {
    $angry.style.animationName = "none";
    $angryS.style.animationName = "none";
    $angryT.style.display = "none";
  });
});

$lonely.addEventListener("animationend", () => {
  $lonelyB.addEventListener("mouseover", () => {
    $lonely.style.animationName = "lonelyHover";
    $lonely.style.animationDuration = "10s";
    $lonely.style.animationIterationCount = "infinite";
    $lonelyS.style.animationName = "shadowLonelyHover";
    $lonelyS.style.animationDuration = "10s";
    $lonelyS.style.animationIterationCount = "infinite";
    $lonelyT.style.display = "block";
    $lonelyT.style.top = "35px";
    $lonelyT.style.right = "-10px";
  });
  $lonelyB.addEventListener("mouseout", () => {
    $lonely.style.animationName = "none";
    $lonelyS.style.animationName = "none";
    $lonelyT.style.display = "none";
  });
});
const $box = document.querySelectorAll(".box");
$box.forEach((e) => {
  e.addEventListener("click", () => {
    location.pathname = "/HYFT/jinwha/index.html";
  });
});
