import { firebaseConfig } from './firebaseData.js';
$(function () {
  // footer nav bar 보이기
  let footertemplate = `
  <ul class="footer_menu_mobile">
    <li>
      <button class="goback_btn">
        <i class="fas fa-arrow-left"></i>
      </button>
    </li>
    <li>
      <a href="./store.html">
        <i class="fas fa-store"></i>
      </a>
    </li>
    <li>
      <a href="./index.html" class="home_btn">
        <i class="fas fa-home"></i>
      </a>
    </li>
    <li>
      <button class="chat">
        <i class="fas fa-comment-dots"></i>
      </button>
    </li>
    <li>
      <button class="user_btn">
        <i class="fas fa-user"></i>
      </button>
    </li>
  </ul>`;
  const mobileFooter = document.querySelector('.mobile_footer');
  if (window.innerWidth <= 992) {
    mobileFooter.innerHTML = footertemplate;
  }

  mobileFooter.innerHTML = footertemplate;

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
    if (window.innerWidth >= 992) {
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

  // 모바일 버전에서만 toggle 버튼,

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth <= 992) {
      $('.nav_main').hide();
      $('.nav_sub').hide();
      $('.only_pc').hide();
      $('.sub_cover').hide();
    } else {
      $('.nav_main').show();
    }
  });

  // 모바일 버전 토글 버튼 클릭시 메인네비게이션 보이기
  const windowHeigth = $(document).height();

  $('.toggle_btn').click(function () {
    if ($('.nav_main').css('display') === 'none') {
      $('.nav_main').slideDown('fast');
      $('.nav_cover nav').css('height', windowHeigth + 'px');
      $('.logo').css('display', 'none');
      $('.search_btn').css('display', 'none');
      $('.toggle_btn img').attr('src', '../images/icon/Close.png');
    } else {
      $('.nav_main').hide();
      $('.nav_cover nav').css('height', '48px');
      $('.logo').css('display', 'flex');
      $('.search_btn').css('display', 'flex');
      $('.toggle_btn img').attr('src', '../images/icon/Menu.png');
    }
  });

  $('.goback_btn').click(function () {
    history.back();
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

  function navSideMenuDisplay() {
    console.log($('.side_btn_cover').css('display'));
    if ($('.side_btn_cover').css('display') === undefined) {
      $('.user_btn').append(`
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
      <button class="hidden">
        <i class="fas fa-door-open"></i>
        로그아웃
      </button>
      <a href='./join.html'>
        <i class="fas fa-sign-in-alt"></i>
        회원가입
      </a>
      <button class='app_download only_mobile'>
      <i class="fas fa-download"></i>
        앱 다운로드
      </button>
    </div>`);
    } else if ($('.side_btn_cover').css('display') === 'flex') {
      $('.side_btn_cover').remove();
    }
  }

  // user 버튼 클릭시 메뉴 보이기
  $('.user_btn').click(function () {
    navSideMenuDisplay();
    const login = document.querySelector('.side_btn_cover a:nth-child(3)');
    const logout = document.querySelector(
      '.side_btn_cover button:nth-child(4)'
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        login.setAttribute('class', 'hidden');
        logout.setAttribute('class', '');
        console.log(user);
      } else {
        login && login.setAttribute('class', '');
        logout && logout.setAttribute('class', 'hidden');
      }
    });
    logout &&
      logout.addEventListener('click', () => {
        firebase
          .auth()
          .signOut()
          .then(() => (window.location.href = 'index.html'));
      });
    // $('.app_download').click(function () {
    //   let = template = `
    //   <div>
    //   </div>
    //   `;
    // });
  });

  // 돋보기 버튼 클릭시 검색창 보이기
  $('.search_btn').click(function () {
    if ($('.search_form_cover').css('display') === 'none') {
      $('.search_form_cover').show();
      $('.search_input').focus();
      $('.nav_main').css('display', 'none');
      $('.toggle_btn').css('display', 'none');
      $('.nav_cover nav').css('height', '48px');
    } else {
      $('.search_form_cover').hide();
    }
    $('.search_form_cover').click(function () {
      $('.search_form_cover').hide();
      $('.toggle_btn').show();
    });
  });

  $('.chat').click(function () {
    if ($('.chat_cover').css('display') === 'block') {
      $('.chat_cover').hide();
    } else {
      $('.chat_cover').show();
      $('.chat_cover .chat_consultant').eq(0).css('display', 'flex');
      setTimeout(() => {
        $('.chat_cover .chat_consultant').eq(1).css('display', 'flex');
      }, 1000);
    }
  });

  $('.close').click(function () {
    $('.chat_cover').hide();
  });
});
