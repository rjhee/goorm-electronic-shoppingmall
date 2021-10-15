$(function () {
  // 배너 이미지 슬라이드

  let userWidth = $(window).width();
  if (userWidth <= 1400) {
    userWidth = 1400;
  } else {
    userWidth = $(window).width();
  }

  $('.slide_img span').not(':eq(0)').css('left', `${userWidth}px`);
  let now = 0;
  let slideImg = 3;

  function slide() {
    userWidth = window.innerWidth;
    now = now == slideImg ? 0 : (now += 1);
    $('.slide_img span')
      .eq(now - 1)
      .animate({ left: `${-userWidth}px` }, 1000);
    $('.slide_img span')
      .eq(now)
      .animate({ left: '0' }, 1000, function () {
        $('.slide_img span').not(`:eq(${now})`).css('left', `${userWidth}px`);
      });
    $('.control_line li').removeClass('hover');
    $('.control_line li').eq(now).addClass('hover');
  }

  let slideInterval = setInterval(slide, 3000);

  function slidePrev() {
    let imgs = 0;
    $('.slide_img span')
      .not(':eq(' + now + ')')
      .css('left', -userWidth + 'px');
    now = now == imgs ? 3 : (now -= 1);
    if (now == 3) {
      $('.slide_img span')
        .eq(0)
        .animate({ left: userWidth + 'px' }, 1000);
    } else {
      $('.slide_img span')
        .eq(now + 1)
        .animate({ left: userWidth + 'px' }, 1000);
    }
    $('.slide_img span')
      .eq(now)
      .animate({ left: '0px' }, 1000, function () {
        $('.slide_img span')
          .not(':eq(' + now + ')')
          .css('left', -userWidth + 'px');
      });
    $('.control_line li').removeClass('hover');
    $('.control_line li').eq(now).addClass('hover');
  }

  $('.prev_btn, .next_btn, .control_line').click(function () {
    clearInterval(slideInterval);
  });

  // prev, next 버튼 클릭시 슬라이드 이동
  $('.prev_btn').click(function () {
    slidePrev();
  });

  $('.next_btn').click(function () {
    slide();
  });

  // 슬라이드 이미지의 순서에 따라 밑에 라인에 색 바뀌기
  $('.control_line li').click(function () {
    let controlNumber = $(this).index();
    if (now == controlNumber) return;
    else {
      $('.slide_img span').not(`:eq(${now})`).css('left', `${userWidth}px`);
      $('.slide_img span')
        .eq(now)
        .animate({ left: `${-userWidth}px` }, 1000);
      $('.slide_img span')
        .eq(controlNumber)
        .animate({ left: '0px' }, 1000, function () {
          $('.slide_img span')
            .not(`:eq(${controlNumber})`)
            .css('left', `${userWidth}px`);
        });
      $('.control_line li').removeClass('hover');
      $('.control_line li').eq(controlNumber).addClass('hover');
      now = controlNumber;
    }
  });
});

// json 파일로 store 상품 데이터 불러와서 display
// liveserve 로만 데이터 가져올수 있음.

function loadItems() {
  return fetch('./data/storeData.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  let container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item_cover">
    <strong class="item_category">${item.category}</strong>
    <div class="item_img" style="background-image: url(${item.image});"></div>
    <h2 class="item_title">${item.title}</h2>
    <span class="item_product_name">${item.productName}</span>
    <ul class="item_color">
      ${item.color
        .map((color) =>
          color
            ? '<li style="background-color:' + color + '"></li>'
            : '<li style="box-shadow:none"></li>'
        )
        .join('')}

        </ul>
        <strong class="item_price">${item.price}</strong>
        <div class="btn_cover">
          <a href='./productDetail.html' class="buy_btn">구매하기</a>
          <button class="cart_btn" onclick="putProductInCart()">
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button class="heart_btn">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        </li>
        `;
}

function putProductInCart() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let cartIn = confirm('장바구니로 이동하시겠습니까?');
      cartIn === true ? (window.location.href = 'cart.html') : null;
    } else {
      let onlyUser = confirm('회원만 사용 가능합니다! 회원가입 하시겠습니까?');
      onlyUser === true
        ? (window.location.href = 'join.html')
        : alert('회원가입 해보세요🥳 쿠폰드려요!');
    }
  });
}

function setEventListeners(items) {
  let all = document.querySelector('.store_nav_all');
  let buttons = document.querySelector('.store_nav');
  all.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

// store nav 메뉴 클릭시 카테고리별로 상품 보여주기
function onButtonClick(event, items) {
  let category = event.target.className;

  switch (category) {
    case 'store_nav_phone':
      displayItems(items.filter((item) => item.category == '스마트폰'));
      break;
    case 'store_nav_tablet':
      displayItems(items.filter((item) => item.category == '태블릿'));
      break;
    case 'store_nav_pc':
      displayItems(items.filter((item) => item.category == 'PC'));
      break;
    case 'store_nav_homeapp':
      displayItems(items.filter((item) => item.category == '가전'));
      break;
    case 'store_nav_etc':
      displayItems(items.filter((item) => item.category == '악세서리'));
      break;
  }
}

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
