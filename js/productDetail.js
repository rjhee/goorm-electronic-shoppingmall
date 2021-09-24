$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    $('.product_img_cover').css('top', scrollTop - 50 + 'px');
  });
});
