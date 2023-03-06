(function () {
  ("use strict");

  const $image = document.querySelectorAll(".image");
  const $aa = document.querySelectorAll(".aa");
  const track = document.querySelector(".image-track");
  const $container = document.querySelectorAll(".container");

  const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -50;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -80);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage-20}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  const handleOnMove2 = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -50;
    const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -200);
    if (window.innerWidth < 836) {
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -400);
    }
    if (window.innerWidth < 414) {
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -800);
      
    }

    track.dataset.percentage = nextPercentage;

    $container.forEach((e) => {
      e.animate(
        {
          transform: `translate(${nextPercentage}%)`,
        },
        { duration: 1200, fill: "forwards" }
      );
    });
  };

  $image.forEach((item, i) => {
    item.addEventListener("click", () => {
      track.style.flexDirection = "column";
      track.style.gap = "20px";
      track.style.left = "3%";
      track.style.top = "55%";
      track.classList.add("image-track2");

      window.onmousemove = (e) => handleOnMove2(e);
      window.ontouchmove = (e) => handleOnMove2(e.touches[0]);

      $image.forEach((item, idx) => {
        item.style.width = "80px";
        item.style.height = "80px";
        item.style.borderRadius = "0";
        item.style.filter = "brightness(0.7)";
        item.classList.toggle("border", idx === i);
      });

      $aa.forEach((item, idx) => {
        item.classList.toggle("hidden", idx !== i);
      });
    });
  });

  /* -- Had to add extra lines for touch events -- */
  window.onmousedown = (e) => handleOnDown(e);
  window.ontouchstart = (e) => handleOnDown(e.touches[0]);
  window.onmouseup = (e) => handleOnUp(e);
  window.ontouchend = (e) => handleOnUp(e.touches[0]);
  window.onmousemove = (e) => handleOnMove(e);
  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  const $box = document.querySelectorAll('.box')

  $box.forEach((e) => {
    e.addEventListener('click', () => {
      location.pathname = '/magazineDetail'
    })
  })
})();
