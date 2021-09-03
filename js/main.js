$(function () {
  // header-pc
  $('.nav_sub').hide();
  $('.sub_cover').hide();

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

  $('.nav_main').mouseout(() => {
    if (window.innerWidth >= 992) {
      slide_Up('.nav_sub');
      slide_Up('.sub_cover');
    }
  });

  $('.nav_main>li').mouseover(function () {
    $(this)
      .children('.nav_sub')
      .css('background-color', 'rgba(255, 255, 255, 0.5)');
  });

  $('.nav_main>li').mouseout(function () {
    $(this).children('.nav_sub').css('background-color', 'inherit');
  });

  // toggle button-mobile

  window.addEventListener('resize', (e) => {
    if (e.currentTarget.innerWidth <= 992) {
      $('.nav_main').hide();
      $('.only_pc').hide();
    }
  });

  $('.toggle_btn').click(function () {
    if ($('.nav_main').css('display') === 'none') {
      $('.nav_main').show();
      $('.logo').hide();
    } else {
      $('.nav_main').hide();
      $('.logo').show();
    }
  });

  // search button
  $('.search_btn').click(function () {
    if ($('.search_form_cover').css('display') === 'none') {
      $('.search_form_cover').show();
      $('.search_input').focus();
    } else {
      $('.search_form_cover').hide();
    }
  });
});
