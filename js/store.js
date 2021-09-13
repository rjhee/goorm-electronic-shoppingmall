$(function () {
  // slide image

  let userWidth = window.innerWidth;
  $('.slide_img span').not(':eq(0)').css('left', `${userWidth}px`);
  let now = 0;
  let slideImg = 3;
  function slide() {
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

  // prev, next button

  // 버튼 클릭시 함수호출
  $('.prev').click(function () {
    slidePrev();
  });

  $('.next').click(function () {
    slide();
  });

  //블릿기호

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

  // prev, next button
  $('.prev_btn').click(function () {
    slidePrev();
  });

  $('.next_btn').click(function () {
    slide();
  });
});

function loadItems() {
  return fetch('./data/storeData.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
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
      <li style="background-color:${item.color}"></li>
      <li style="background-color:${item.color}"></li>
      <li style="background-color:${item.color}"></li>
      <li style="background-color:${item.color}"></li>
      <li style="background-color:${item.color}"></li>
    </ul>
    <strong class="item_price">${item.price}</strong>
    <div class="btn_cover">
      <a herf="./productDetail.html" class="buy_btn">구매하기</a>
      <button class="heart_btn">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </li>
`;
}

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
