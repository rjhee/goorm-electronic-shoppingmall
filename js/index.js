$(function () {
  // 버튼 클릭시 스크롤 맨위
  $('.page_up').click(function () {
    $(window).scrollTop(0);
  });

  // 네비게이션 PC버전에서만 보이기
  $('.nav_sub').hide();
  $('.sub_cover').hide();

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth > 992) {
      $('.nav_main').show();
      $('.only_pc').show();
    }
  });

  // 메인네비에 마우스 오버시 서브 네비 슬라이드다운
  function slide_Down(seleted) {
    $(seleted).stop().slideDown();
  }

  function slide_Up(seleted) {
    $(seleted).stop().slideUp();
  }

  $('.nav_main').mouseover(function () {
    if (window.innerWidth >= 992) {
      slide_Down('.nav_sub');
      slide_Down('.sub_cover');
    }
  });

  $('.nav_main>li').mouseover(function () {
    $(this)
      .children('.nav_sub')
      .css('background-color', 'rgba(255, 255, 255, 0.5)');
  });

  // 메인네비에 마우스 아웃시 서브 네비 슬라이드업
  $('.nav_main').mouseout(() => {
    if (window.innerWidth >= 992) {
      slide_Up('.nav_sub');
      slide_Up('.sub_cover');
    }
  });

  $('.nav_main>li').mouseout(function () {
    $(this).children('.nav_sub').css('background-color', 'inherit');
  });

  // 스크롤내릴때 네비게이션 숨기고 스크롤 올릴때 네비게이션 보이기
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = $('.nav_cover').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let userScrollTop = $(this).scrollTop();

    if (Math.abs(lastScrollTop - userScrollTop) <= delta) return;

    if (userScrollTop > lastScrollTop && userScrollTop > navbarHeight) {
      $('.nav_cover').slideUp('fast');
      $('.customer_menu, .company_menu').animate({ top: '0' }, 200);
    } else {
      if (userScrollTop + $(window).height() < $(document).height()) {
        $('.nav_cover').slideDown('fast');
        $('.customer_menu, .company_menu').animate({ top: '80px' }, 200);
      }
    }

    lastScrollTop = userScrollTop;
  }

  모바일 버전에서만 toggle 버튼 보이기

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth <= 992) {
      $('.nav_main').hide();
      $('.nav_sub').hide();
      $('.only_pc').hide();
    }
  });

  // 모바일 버전 토글 버튼 클릭시 메인네비게이션 보이기

  $('.toggle_btn').click(function () {
    let nav = $('.nav_cover header').offset();
    console.log(nav);
    if ($('.nav_main').css('display') === 'none') {
      $('.nav_main').show();
      $('.logo').hide();
    } else {
      $('.nav_main').hide();
      $('.logo').show();
      $('.customer_banner_title').css('top');
    }
  });

  // 돋보기 버튼 클릭시 검색창 보이기
  $('.search_btn').click(function () {
    if ($('.search_form_cover').css('display') === 'none') {
      $('.search_form_cover').show();
      $('.search_input').focus();
    } else {
      $('.search_form_cover').hide();
    }
  });
});
