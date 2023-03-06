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
  mouseX = e.clientX + 50;
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

// fixed 버튼 스크롤 탑으로 이동
const $btnScrollToTop = document.querySelector('#btnScrollToTop');
const $totop = document.querySelector('.detailContainer');
$btnScrollToTop.addEventListener('click', function () {
  // window.scrollTo(0,0);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//감정 feelList clk클릭 이벤트 클릭시 이동하기
//토글 만들기
const $iClk = document.querySelectorAll('.clickE');

const $btnScrollToImotion = document.querySelectorAll('.im');

// const imgs = btnScrollToImotion.querySelectorAll('.btnScrollToImotion>img');

const $cursor1 = document.getElementById('cursor');
// console.log($cursor1);

$btnScrollToImotion.forEach((img, idx) => {
  //   console.log(img.src);
  img.addEventListener('click', e => {
    $cursor1.style.backgroundImage = `url(${e.target.src})`;
  });
});

// console.log(getComputedStyle(mouseCursor).backgroundImage)

//상혁씨 코드
// $imgList.forEach((img) => {
//             img.addEventListener("click", (e) => {
//                 const imgIn = getComputedStyle(img).backgroundImage;
//                 const changeUrl = imgIn.substring(4).replace(")", "").replaceAll('"', "");
//                 $myimage.src = changeUrl;
//                 $imgList.forEach((e) => {
//                     e.classList.toggle("border", $myimage.src === getComputedStyle(e).backgroundImage.substring(4).replace(")", "").replaceAll('"', ""));
//                 });
//             });
//         });

// 반응형 리사이즈 사이즈 변경 태블릿 사이즈
function tabResize() {
  if (matchMedia('screen and (max-width: 834px)').matches) {
    //마우스 커서 삭제
    // const $cursor = document.querySelector(".cursor");
    // $cursor.classList.remove("cursor");

    // 834px 태블릿 사이즈 이하  AOS 애니메이션 삭제
    const $ul = document.querySelectorAll('ul');

    for (let i = 0; i < $ul.length; i++) {
      $ul[i].removeAttribute('data-aos');
    }
  }
  //   window.onresize = function () {
  //     document.location.reload();
  //   };
}
tabResize();

//BEST , LIST 이미지 마우스 호버 이미지 변경
const $bestList = document.querySelector('.bestList');
const $productList = document.querySelector('.productList');
const $thumImg = document.createElement('IMG');

// jason 페치
fetch('./best.json')
  .then(res => res.json())
  .then(result => {
    makeList(result);
  });
fetch('./list.json')
  .then(res => res.json())
  .then(result1 => {
    listList(result1);
  });
fetch('./imotions.json')
  .then(res => res.json())
  .then(resultI => {
    imotionList(resultI);
  });

function imotionList(imotions) {
  //   console.log('되나용');
}

// BEST LIST
function makeList(items) {
  items.forEach((item, idx) => {
    const $li = document.createElement('li');
    $li.innerHTML = `
        <div>
                <div class="best_img">
                    <img src="${item.img_picture}" alt=""  transition: all 0.2s; class="ww" cover ;>
                </div>
            
           
            <div class="best_text">
                    <ul class="imti">
                        <li class="heartBtn"><i class="fi fi-rr-heart"></i></li>
                        <li class="buyBtn"><i class="fi fi-rr-shopping-cart"></i></li>
                    </ul>
                <span>${item.product_number}</span>
                <h4>${item.product_name}</h4>
                <h4>${item.price}</h4>
            </div>
        </div>
      `;
    // const wwhover = document.querySelectorAll('.ww');
    // wwhover.forEach(item => {
    //   item.style.transition = 'all 0.2s ';
    // });
    $bestList.appendChild($li);
  });
  // hoverEvent(items);
  const $ww = document.querySelectorAll('.ww');
  $ww.forEach((item, idx) => {
    // setTimeout($ww, 1300);
    item.addEventListener('mouseover', () => {
      item.src = `${items[idx].img_overEffect}`;
    });
    item.addEventListener('mouseout', () => {
      item.src = `${items[idx].img_picture}`;
    });
  });
}

// LIST LIST
function listList(items) {
  items.forEach((item, idx) => {
    const $li = document.createElement('li');

    $li.innerHTML = `
      <div>
          <div class="list_img">
              <img src="${item.img_picture}" alt="" class="ff" cover;>
          </div>
          <div class="list_text">
                <ul class="imti">
                    <li class="heartBtn"><i class="fi fi-rr-heart"></i></li>
                    <li><i class="fi fi-rr-shopping-cart"></i></li>
                </ul>
              <span>${item.product_number}</span>
              <h4>${item.product_name}</h4>
              <h4>${item.price}</h4>
          </div>
      </div>`;
    // const ffhover = document.querySelectorAll('.ff');
    // ffhover.forEach(item => {
    //   item.style.transition = 'all 0.2s ';
    // });
    $productList.appendChild($li);
  });

  // hoverEvent(items);
  const $ff = document.querySelectorAll('.ff');
  $ff.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      item.src = `${items[idx].img_overEffect}`;
    });
    item.addEventListener('mouseout', () => {
      item.src = `${items[idx].img_picture}`;
    });
  });

  //   function startAnimation() {
  //     window.setTimeout($ww, 1000);
  //   }
  //heart 좋아요 버튼 클릭 토글 이벤트 하트 버튼 색깔
  const $heartBtn = document.querySelectorAll('.heartBtn');
  const $heart = document.querySelectorAll('.heartBtn i');
  const $buyBtn = document.querySelector('.buyBtn');

  $heartBtn.forEach(icon => {
    icon.addEventListener('click', ico => {
      ico.target.classList.toggle('fi-rr-heart');
      ico.target.classList.toggle('fi-ss-heart');
    });
  });
}

// const $thumImg = new Image();
// $thumImg.src='./img/cat1-6.jpg'

// $bestList.forEach((item, idx) => {

// item.addEventListener('mouseover', function () {
//      item.style.background = "url('./img/cat1-6.jpg')";
//     item.style.backgroundSize="cover";
//      console.log('되나염?')

//   });
// });

//NEW 상품이미지 스와이프
// const img = document.querySelector(".newArr>a>img");
// let imgArray = new Array();
// imgArray[0] = "./img/cat1-5.jpg";
// imgArray[1] = "./img/cat1-2.jpg";
// imgArray[2] = "./img/cat1-3.jpg";
// imgArray[3] = "./img/cat1-4.jpg";
// imgArray[4] = "./img/cat1-1.jpg";

// var imgCnt = 0;

// function changeImage() {
//   imgCnt++;
//   if (imgCnt < imgArray.length) {
//     img.src = imgArray[imgCnt];
//     setTimeout(changeImage, 800);
//   } else {
//     imgCnt = 0; // loop
//     changeImage();
//   }
// }
// function startAnimation() {
//   window.setTimeout(changeImage, 100);
// }

//BEST 상품이미지 스와이프
// const img1 = document.querySelector(".bestImg1>img");
// let imgArray1 = new Array();
// imgArray1[0] = "./img/bear1-1.jpg";
// imgArray1[1] = "./img/bear1-2.jpg";
// imgArray1[2] = "./img/bear1-3.jpg";
// imgArray1[3] = "./img/bear1-4.jpg";
// imgArray1[4] = "./img/bear1-5.jpg";

// var imgCnt1 = 0;

// function changeImage1() {
//   imgCnt1++;
//   if (imgCnt1 < imgArray1.length) {
//     img1.src = imgArray1[imgCnt1];
//     setTimeout("changeImage1()", 600);
//   } else {
//     imgCnt1 = 0; // loop
//     changeImage1();
//   }
// }
// function startAnimation1() {
//   window.setTimeout(changeImage1, 100);
// }

// window.onload = function () {
//     startAnimation()
//   startAnimation1()
//  };

//리스트 제이슨
// let bestItem = null;
// let listList = null;

//  function getData() {
//   fetch('./best.json')
//   .then(res => res.json())
//   .then(result2 => {
//     bestItem = result2;
//   });
// }

// function makeBest(item) {
//     const div = document.createElement('div');
//     div.innerHTML = `console.log('여긴가')
//       <a href="">
//           <div class="best_img">
//               <img src="${item.img_picture}" alt="">
//           </div></a>
//           <div class="best_text">
//               <p>${item.product_number}</p>
//               <span>${item.product_name}</span>
//               <p>${item.price}</p>
//           </div>
//       `;
//     $thumbnail.appendChild(div);
// }

//
//      function makeBest(item) {
// const div = document.createElement('div');
//       div.classList.add('best')
//       div.innerHTML = `
//           <a href="">
//               <div class="best_img">
//                   <img src="${img_picture}" alt="">
//               </div>
//               <div class="best_text">
//                   <p>${item.product_number}</p>
//                   <span>${best.product_name}</span>
//                   <p>${best.text_3}</p>
//               </div>
//           </a>
//       `;
//       return div;
//     }
// function makeItem(item) {
//       const div = document.createElement('div');
//       div.classList.add('item');

//       let divImageClass = 'image';
//       let divProductClass = 'product';
//       let imgClass = 'img_picture';
//       let imgClassHover = 'img_overEffect';

//       return div;
//     }

//     getData();

//     const $bestContainer = document.querySelector('.bestList');
