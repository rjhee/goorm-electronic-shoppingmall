$(function () {
  // 버튼 클릭시 스크롤 맨위

  $(window).load(function () {
    $('.img_tablet').fadeIn(3000);
  });

  $('.page_up').click(function () {
    $(window).scrollTop(0);
  });

  // 네비게이션 PC버전에서만 보이기
  $('.nav_sub').hide();
  $('.sub_cover').hide();

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth >= 992) {
      $('.nav_main').css('display', 'flex');
      $('.nav_main').css('flex-direction', 'row');
      $('.only_pc').css('display', 'flex');
      $('.nav_cover').show();
    } else if (e.currentTarget.innerWidth <= 991) {
      $('.nav_main').hide();
      $('.only_pc').hide();
      $('.nav_cover').show();
      $('.nav_sub').hide();
      $('.sub_cover').hide();
      $('.nav_main').css('flex-direction', 'column');
      $('.company_menu, .customer_menu').css('top', '48px');
      $('.nav_cover nav').css('height', '48px');
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
    if (window.innerWidth >= 992) {
      $(this)
        .children('.nav_sub')
        .css('background-color', 'rgba(196, 196, 196, 0.4)');
    }
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
  const windowHeigth = $(document).height();

  $('.toggle_btn').click(function () {
    if ($('.nav_main').css('display') === 'none') {
      // $('.nav_main').css('display', 'flex');
      $('.nav_main').slideDown('fast');
      $('.nav_cover nav').css('height', windowHeigth + 'px');
      $('.logo').css('display', 'none');
      $('.toggle_btn img').attr('src', '../images/icon/Close.png');
      $('.nav_side li').eq(0).hide();
    } else {
      $('.nav_main').hide();
      $('.nav_cover').css('width', '100%');
      $('.nav_cover nav').css('height', 'fit-content');
      $('.logo').css('display', 'flex');
      $('.toggle_btn img').attr('src', '../images/icon/Menu.png');
      $('.nav_side li').eq(0).show();
    }
  });

  // 모바일 버전 nav_main 버튼 클릭시 sub 메뉴 토글
  const DEGREE_180 = 180;
  const DEGREE_0 = 0;
  function btnDirectionChange(degree) {
    return document.documentElement.style.setProperty(
      '--toggle-btn-direction',
      `rotate(${degree}deg)`
    );
  }
  $('.nav_main').click(function (e) {
    if (e.target.tagName === 'LI') {
      if (e.target.children[1].style.display === 'flex') {
        e.target.children[1].style.display = 'none';
        btnDirectionChange(DEGREE_0);
      } else {
        e.target.children[1].style.display = 'flex';
        btnDirectionChange(DEGREE_180);
      }
    }
  });

  // user 버튼 클릭시 메뉴 보이기
  $('.nav_side li:eq(0) button').click(function () {
    if ($('.nav_side li:eq(0)')[0].childElementCount === 1) {
      $('.nav_side li:eq(0)').append(`
      <div class="side_btn_cover">
        <a href='./cart.html' class='only_mobile'>
          <i class="fas fa-shopping-basket"></i>
          장바구니
        </a>
        <a href='./cart.html' class='only_mobile'>
          <i class="far fa-heart"></i>
          찜한상품
        </a>
        <a href='./user.html'>
          <i class="far fa-user"></i>
          로그인
        </a>
        <a href='./join.html'>
          <i class="fas fa-sign-in-alt"></i>
          회원가입
        </a>
        <div class="search_form_cover_mobile only_mobile" >
        <form class="search_form">
          <input type="text" class="search_input" autofocus />
          <button type="submit" id="search_input_btn">
            <img src="./images/icon/Search.png" alt="search" />
          </button>
        </form>
      </div>
      </div>`);
    } else if ($('.nav_side li:eq(0)')[0].childElementCount === 2) {
      $('.side_btn_cover').remove();
    }
  });

  // 돋보기 버튼 클릭시 검색창 보이기
  $('.search_btn').click(function () {
    if ($('.search_form_cover').css('display') === 'none') {
      $('.search_form_cover').show();
      $('.search_input').focus();
      $('.nav_main').css('display', 'none');
      $('.nav_cover nav').css('height', 'fit-content');
    } else {
      $('.search_form_cover').hide();
    }
  });

  $('.chat').click(function () {
    $('.chat_cover').show();
    $('.chat_cover .chat_consultant').eq(0).css('display', 'flex');
    setTimeout(() => {
      $('.chat_cover .chat_consultant').eq(1).css('display', 'flex');
    }, 1000);
  });

  $('.close').click(function () {
    $('.chat_cover').hide();
  });
});
