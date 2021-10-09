$(function () {
  // 고객서비스 배너 밑에 있는 메뉴 클릭시 해당 컨텐츠로 스크롤 이동.
  if (window.innerWidth <= 991) {
    $('.customer_menu').click(function (event) {
      let target = event.target;

      let faq = $('.customer_FAQ').offset().top;
      let qna = $('.customer_QNA').offset().top;
      let onlineService = $('.online').offset().top;
      let callService = $('.call').offset().top;
      let visiteService = $('.visite').offset().top;
      let offlineStore = $('.customer_offline_store').offset().top;
      switch (target.className) {
        case 'menu_FAQ_btn':
          $('html').animate({ scrollTop: faq - 70 }, 400);
          break;
        case 'menu_QNA_btn':
          $('html').animate({ scrollTop: qna - 70 }, 400);
          break;
        case 'menu_online_btn':
          $('html').animate({ scrollTop: onlineService - 70 }, 400);
          break;
        case 'menu_call_btn':
          $('html').animate({ scrollTop: callService - 70 }, 400);
          break;
        case 'menu_offline_btn':
          $('html').animate({ scrollTop: visiteService - 70 }, 400);
          break;
        case 'menu_offline_store_btn':
          $('html').animate({ scrollTop: offlineStore - 70 }, 400);
          break;
      }
    });
  } else {
    $('.customer_menu').click(function (event) {
      let target = event.target;

      let faq = $('.customer_FAQ').offset().top;
      let qna = $('.customer_QNA').offset().top;
      let service = $('.customer_service').offset().top;
      let offlineStore = $('.customer_offline_store').offset().top;
      switch (target.className) {
        case 'menu_FAQ_btn':
          $('html').animate({ scrollTop: faq - 70 }, 400);
          break;
        case 'menu_QNA_btn':
          $('html').animate({ scrollTop: qna - 70 }, 400);
          break;
        case 'menu_online_btn':
        case 'menu_call_btn':
        case 'menu_offline_btn':
          $('html').animate({ scrollTop: service - 70 }, 400);
          break;
        case 'menu_offline_store_btn':
          $('html').animate({ scrollTop: offlineStore - 70 }, 400);
          break;
      }
    });
  }

  // 사용자 스크롤시 현재 컨텐츠위치에 메뉴 배경색 바뀌기
  if (window.innerWidth <= 991) {
    $(window).scroll(function () {
      let userScroll = $(this).scrollTop();

      let customerFAQ = $('.customer_FAQ').offset().top + 500;
      let customerQNA = $('.customer_QNA').offset().top;
      let onlineService = $('.online').offset().top;
      let callService = $('.call').offset().top;
      let visiteService = $('.visite').offset().top;
      let customerOffline = $('.customer_offline_store').offset().top;

      if (500 < userScroll && userScroll < customerFAQ) {
        $('.menu_FAQ_btn').addClass('menu_hover');
        $('.menu_QNA_btn').removeClass('menu_hover');
      } else if (customerFAQ < userScroll && userScroll < customerQNA) {
        $('.menu_QNA_btn').addClass('menu_hover');
        $('.menu_FAQ_btn').removeClass('menu_hover');
        $('.menu_online_btn').removeClass('menu_hover');
      } else if (customerQNA < userScroll && userScroll < onlineService) {
        $('.menu_online_btn').addClass('menu_hover');
        $('.menu_QNA_btn').removeClass('menu_hover');
        $('.menu_call_btn').removeClass('menu_hover');
      } else if (onlineService < userScroll && userScroll < callService) {
        $('.menu_call_btn').addClass('menu_hover');
        $('.menu_online_btn').removeClass('menu_hover');
        $('.menu_offline_btn').removeClass('menu_hover');
      } else if (callService < userScroll && userScroll < visiteService) {
        $('.menu_offline_btn').addClass('menu_hover');
        $('.menu_call_btn').removeClass('menu_hover');
        $('.menu_offline_store_btn').removeClass('menu_hover');
      } else if (
        visiteService < userScroll &&
        userScroll < customerOffline + 200
      ) {
        $('.menu_offline_store_btn').addClass('menu_hover');
        $('.menu_call_btn').removeClass('menu_hover');
        $('.menu_offline_btn').removeClass('menu_hover');
      }
    });
  } else {
    $(window).scroll(function () {
      let userScroll = $(this).scrollTop();

      let customerFAQ = $('.customer_FAQ').offset().top + 500;
      let customerQNA = $('.customer_QNA').offset().top;
      let customerService = $('.customer_service_cover').offset().top;
      let customerOffline = $('.customer_offline_store').offset().top;

      if (500 < userScroll && userScroll < customerFAQ) {
        $('.menu_FAQ_btn').addClass('menu_hover');
        $('.menu_QNA_btn').removeClass('menu_hover');
      } else if (customerFAQ < userScroll && userScroll < customerQNA) {
        $('.menu_QNA_btn').addClass('menu_hover');
        $('.menu_FAQ_btn').removeClass('menu_hover');
        $('.menu_online_btn').removeClass('menu_hover');
      } else if (
        customerQNA < userScroll &&
        userScroll < customerService - 100
      ) {
        $('.menu_online_btn').addClass('menu_hover');
        $('.menu_QNA_btn').removeClass('menu_hover');
        $('.menu_call_btn').removeClass('menu_hover');
      } else if (customerQNA < userScroll && userScroll < customerService) {
        $('.menu_call_btn').addClass('menu_hover');
        $('.menu_online_btn').removeClass('menu_hover');
        $('.menu_offline_btn').removeClass('menu_hover');
      } else if (
        customerQNA < userScroll &&
        userScroll < customerService + 100
      ) {
        $('.menu_offline_btn').addClass('menu_hover');
        $('.menu_call_btn').removeClass('menu_hover');
        $('.menu_offline_store_btn').removeClass('menu_hover');
      } else if (
        customerService + 400 < userScroll &&
        userScroll < customerOffline
      ) {
        $('.menu_offline_store_btn').addClass('menu_hover');
        $('.menu_offline_btn').removeClass('menu_hover');
      }
    });
  }
});

// FAQ 데이터 json 파일로 불러오고 display
function loadfaq() {
  return fetch('./data/faqData.json')
    .then((response) => response.json())
    .then((json) => json.faqText);
}

function displayfaq(faqText) {
  const container = document.querySelector('.FAQ_contents');
  container.innerHTML = faqText
    .map((text) => createHTMLStringFaq(text))
    .join('');
}

function createHTMLStringFaq(text) {
  return `
  <div class="FAQ_content_title">
    <div>
      <div class="FAQ_category"> 
        <span>Q</span>
        <span>[${text.category}]</span>
      </div>
      <p>${text.title}</p>
    </div>
    <button class="FAQ_toggle_btn">
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>
  <p class="FAQ_content_text" style="display:none">
    ${text.contents}
  </p>`;
}

// FAQ 제목 클릭시 해당컨텐츠 내용 보여주기
let FAQtitle = document.querySelector('.FAQ_contents');
FAQtitle.addEventListener('click', (event) => onFaqTextClick(event));

function onFaqTextClick(event) {
  let title = event.target;
  let text = title.nextElementSibling;
  let toggle = title.lastElementChild;

  if (title.className == 'FAQ_content_title') {
    console.log(text);
    if (text.style.display == 'none') {
      title.nextElementSibling.style.display = 'flex';
      toggle.lastElementChild.setAttribute('class', 'fas fa-chevron-up');
    } else {
      title.nextElementSibling.style.display = 'none';
      toggle.lastElementChild.setAttribute('class', 'fas fa-chevron-down');
    }
  }
}

// FAQ 카테고리 클릭시 해당 데이터만 보여주기
function setEventListeners(faqText) {
  let all = document.querySelector('.FAQ_menu .all');
  let buttons = document.querySelector('.FAQ_menu');
  all.addEventListener('click', () => displayfaq(faqText));
  buttons.addEventListener('click', (event) => onFaqNavClick(event, faqText));
}

function onFaqNavClick(event, faqText) {
  let category = event.target.className;

  switch (category) {
    case 'user':
      displayfaq(faqText.filter((text) => text.category == '회원가입/탈퇴'));
      break;
    case 'product':
      displayfaq(faqText.filter((text) => text.category == '제품상세문의'));
      break;
    case 'pay':
      displayfaq(faqText.filter((text) => text.category == '결제문의'));
      break;
    case 'order':
      displayfaq(faqText.filter((text) => text.category == '주문문의'));
      break;
  }
}

loadfaq()
  .then((faqText) => {
    displayfaq(faqText);
    setEventListeners(faqText);
    console.log(faqText);
  })
  .catch(console.log);

// QNA 데이터 json 파일로 불러오고 display
function loadqna() {
  return fetch('./data/qnaData.json')
    .then((response) => response.json())
    .then((json) => json.qnaText);
}

function displayqna(qnaText) {
  const container = document.querySelector('.QNA_contents');
  container.innerHTML = qnaText.map((text) => createHTMLString(text)).join('');
}

function createHTMLString(text) {
  return `
    <div class="QNA_content_title">
      <div>
        <div class="QNA_category"> 
          <span>Q</span>
          <span>[${text.category}]</span>
        </div>
        <p>${text.title}</p>
      </div>
      <button class="QNA_toggle_btn">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <p class="QNA_content_text" style="display:none">
      ${text.contents}
    </p>`;
}

// FAQ 제목 클릭시 해당컨텐츠 내용 보여주기
let QNAtitle = document.querySelector('.QNA_contents');
QNAtitle.addEventListener('click', (event) => onQnaTextClick(event));

function onQnaTextClick(event) {
  let title = event.target;
  let text = title.nextElementSibling;
  let toggle = title.lastElementChild;

  if (title.className == 'QNA_content_title') {
    if (text.style.display == 'none') {
      title.nextElementSibling.style.display = 'flex';
      toggle.lastElementChild.setAttribute('class', 'fas fa-chevron-up');
    } else {
      title.nextElementSibling.style.display = 'none';
      toggle.lastElementChild.setAttribute('class', 'fas fa-chevron-down');
    }
  }
}

loadqna()
  .then((qnaText) => {
    displayqna(qnaText);
    console.log(qnaText);
  })
  .catch(console.log);
