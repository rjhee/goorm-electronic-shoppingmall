$(function () {
  // header
  $('.nav_sub').hide();
  $('.sub_cover').hide();

  function navMouseOver(seleted) {
    $(seleted).stop().slideDown();
  }

  function navMouseOut(seleted) {
    $(seleted).stop().slideUp();
  }

  $('.nav_main').mouseover(function () {
    navMouseOver('.nav_sub');
    navMouseOver('.sub_cover');
  });

  $('.nav_main').mouseout(() => {
    navMouseOut('.nav_sub');
    navMouseOut('.sub_cover');
  });

  $('.nav_main>li').mouseover(function () {
    $(this)
      .children('.nav_sub')
      .css('background-color', 'rgba(255, 255, 255, 0.5)');
  });

  $('.nav_main>li').mouseout(function () {
    $(this).children('.nav_sub').css('background-color', 'inherit');
  });
});
