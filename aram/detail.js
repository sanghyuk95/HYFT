'use strict';
// 헤더전체 시작
const $up = document.querySelector('.header-up');
const $upX = document.querySelector('.header-up .fa-xmark');
const $barIcon = document.querySelector('.fa-bars');
const $barMenu = document.querySelector('.bar-menu');
const $cartIcon = document.querySelector('.fa-cart-shopping');
const $cartMenu = document.querySelector('.cart-menu');
const $cartX = document.querySelector('.cart-right-title .fa-xmark');

// $upX.addEventListener('click', () => {
//   $up.style.display = 'none';
// });
$barIcon.addEventListener('click', () => {
  if ($barMenu.classList.contains('hidden')) {
    $barMenu.classList.toggle('hidden');
    $cartMenu.classList.toggle('hidden', true);
    $barMenu.classList.remove('menu-off');
    $barMenu.classList.add('menu-on');
  } else {
    $barMenu.classList.remove('menu-on');
    $barMenu.classList.add('menu-off');
    setTimeout(() => {
      $barMenu.classList.toggle('hidden');
      $cartMenu.classList.toggle('hidden', true);
    }, 1400);
  }
});
$cartIcon.addEventListener('click', () => {
  if ($cartMenu.classList.contains('hidden')) {
    $cartMenu.classList.toggle('hidden');
    $barMenu.classList.toggle('hidden', true);
    $cartMenu.classList.remove('cart-off');
    $cartMenu.classList.add('cart-on');
  }
});
$cartX.addEventListener('click', () => {
  if (!$cartMenu.classList.contains('hidden')) {
    $cartMenu.classList.remove('cart-on');
    $cartMenu.classList.add('cart-off');
    setTimeout(() => {
      $cartMenu.classList.toggle('hidden');
      $barMenu.classList.toggle('hidden', true);
    }, 900);
  }
});
//헤더끝

// 마우스 커서 이모티콘 캐릭터로 변경
const mouseCursor = document.querySelector('.cursor');
const $btnScrollToImotion = document.querySelectorAll('#btnScrollToImotion');
const $imotion = document.querySelectorAll('#imotion');
$btnScrollToImotion.forEach((curs, idx) => {
  curs.addEventListener('click', e => {
    // console.log("이건마우스클릭1")
    e.target = '$imotion';
  });
});

window.addEventListener('scroll', getMousePositionScroll);
window.addEventListener('mousemove', getMousePosition);

let mouseX = 0;
let mouseY = 0;
let mouseClientY = 0;
let mousePageY = 0;
function getMousePositionScroll() {
  mouseY = document.documentElement.scrollTop + mouseClientY;
}

function getMousePosition(e) {
  mouseX = e.clientX + 90;
  mouseClientY = e.clientY + 50;
  mousePageY = e.pageY;

  getMousePositionScroll();
  // console.log('move : ' + mouseY);
}

function moveCursor() {
  const cursorStyle = getComputedStyle(mouseCursor);
  let m_x = parseInt(cursorStyle.left.replace('px', ''));
  let m_y = parseInt(cursorStyle.top.replace('px', ''));

  mouseCursor.style.left = Math.round(m_x + (mouseX - m_x) / 5) + 'px';
  mouseCursor.style.top = Math.round(m_y + (mouseY - m_y) / 5) + 'px';
}
setInterval('moveCursor()', 30);

// 반응형 리사이즈 사이즈 변경 태블릿 사이즈

window.addEventListener('resize', e => {
  if (window.innerWidth < 834) {
    //움직이는 텍스트 삭제
    const ariaTXT = document.querySelector('.detail_ariaText');
    const $cover = document.querySelectorAll('.cover');
    const $parall = document.querySelectorAll('.parall');

    ariaTXT.innerHTML = '';
    $cover.innerHTML = '';
    $parall.innerHTML = '';
  }
});

// 작은 이미지 클릭시 썸네일 이미지 변경

const $cnt1Img = document.querySelector('#cnt1_1img');
const $mImg = document.querySelectorAll('.mImg');
const $detail1 = document.querySelector('.detail1_1');
const $miniImg = document.querySelectorAll('.miniImg');

$mImg.forEach((img, idx) => {
  img.addEventListener('mouseover', e => {
    $cnt1Img.src = e.target.src;
  });
});
$mImg.forEach((img, idx) => {
  img.addEventListener('mouseout', e => {
    // console.log('마우스아웃');
    $cnt1Img.src = './img/dog1-7.jpg';
  });
});

// fixed 버튼 스크롤 탑으로 이동
const $btnScrollToTop = document.querySelector('#btnScrollToTop');
$btnScrollToTop.addEventListener('click', function () {
  // window.scrollTo(0,0);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

//리본 텍스트 스크롤 애니메이션

const pTag1 = document.querySelector('.first-parallel');
const pTag2 = document.querySelector('.second-parallel');

const textArr1 = 'HYFT HOW YOU FEEL TODAY HYFT HOW YOU FEEL TODAY '.split(' ');
const textArr2 = 'CIRCUS BOY BAND HUG FIGURE CIRCUS BOY BAND HUG FIGURE'.split(' ');

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0`;
  }
}
initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

let count1 = 0;
let count2 = 0;

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translateX(0)`;
    count = 0;
  }
  element.style.transform = `translateX(${count * direction}px)`;
  return count;
}
function animate() {
  count1++;
  count2++;

  count1 = marqueeText(count1, pTag1, -1);
  count2 = marqueeText(count2, pTag2, 1);

  window.requestAnimationFrame(animate);
}

animate();

window.addEventListener('scroll', () => {
  count1 += 25;
  count2 += 25;
});
