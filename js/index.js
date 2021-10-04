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
      $('.nav_cover').show();
    } else if (e.currentTarget.innerWidth <= 991) {
      $('.nav_main').hide();
      $('.only_pc').hide();
      $('.nav_cover').show();
      $('.company_menu, .customer_menu').css('top', '48px');
    }
  });

  function mobileNavHide() {
    if (window.innerWidth <= 991) {
      $('.nav_main').hide();
    }
  }

  mobileNavHide();

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

  $(window).scroll(function () {
    if (window.innerWidth >= 992) {
      didScroll = true;
    } else {
      didScroll = false;
    }
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    if (window.innerWidth > 992) {
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
    } else {
      $('.nav_cover').show();
    }
  }

  // 스크롤시 이미지 보여주기
  $('.img_phone, .home_container, .pc_container').hide();

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= 350) {
      $('.img_phone').fadeIn('slow');
    } else {
      $('.img_phone').fadeOut('slow');
    }
    if (scrollTop >= 1000) {
      $('.home_container').fadeIn('slow');
    } else {
      $('.home_container').fadeOut('slow');
    }
    if (scrollTop >= 1800) {
      $('.pc_container').fadeIn('slow');
    } else {
      $('.pc_container').fadeOut('slow');
    }
  });

  // 모바일 버전에서만 toggle 버튼 보이기

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth <= 992) {
      $('.nav_main').hide();
      $('.nav_sub').hide();
      $('.only_pc').hide();
      $('.sub_cover').hide();
    }
  });

  // 모바일 버전 토글 버튼 클릭시 메인네비게이션 보이기

  $('.toggle_btn').click(function () {
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
