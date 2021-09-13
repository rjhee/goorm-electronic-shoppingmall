$(function () {
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
    } else if (customerQNA < userScroll && userScroll < customerService - 100) {
      $('.menu_online_btn').addClass('menu_hover');
      $('.menu_QNA_btn').removeClass('menu_hover');
      $('.menu_call_btn').removeClass('menu_hover');
    } else if (customerQNA < userScroll && userScroll < customerService) {
      $('.menu_call_btn').addClass('menu_hover');
      $('.menu_online_btn').removeClass('menu_hover');
      $('.menu_offline_btn').removeClass('menu_hover');
    } else if (customerQNA < userScroll && userScroll < customerService + 100) {
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
});

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
      <span>Q</span>
      <span>[${text.category}]</span>
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
        <span>Q</span>
        <span>[${text.category}]</span>
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
