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
  <p class="FAQ_content_text">
    ${text.contents}
  </p>`;
}

loadfaq()
  .then((faqText) => {
    displayfaq(faqText);
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
    <p class="QNA_content_text">
      ${text.contents}
    </p>`;
}

loadqna()
  .then((qnaText) => {
    displayqna(qnaText);
    console.log(qnaText);
  })
  .catch(console.log);

$(function () {
  $('.customer_menu').click(function () {
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

  // $('.FAQ_toggle_btn');
  $('.FAQ_content_text').hide();

  // $('.answer').hide();
  // $('.fqa_cover h3').click(function () {
  //   if ($(this).next().css('display') == 'none') {
  //     $(this).next().slideDown();
  //     $('span', this).text('⬆️');
  //   } else {
  //     $(this).next().slideUp();
  //     $('span', this).text('⬇️');
  //   }
  // });
});
