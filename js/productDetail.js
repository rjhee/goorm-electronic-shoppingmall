$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    scrollTop <= 650 &&
      $('.product_img_cover').css('top', scrollTop - 100 + 'px');
  });
});
