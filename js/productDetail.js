$(function () {
  $(window).scroll(function () {
    if (window.innerWidth > 992) {
      let scrollTop = $(this).scrollTop();
      // console.log(scrollTop);

      scrollTop <= 650 &&
        $('.product_img_cover').css('top', scrollTop - 100 + 'px');
    }
  });

  function imgcolorChange(color) {
    $('.product_img').css({
      'background-image': `url(/images/${color}.png)`,
    });
    console.log(color);
  }

  $('.product_color li').click(function (event) {
    let colorbtn = event.target;
    imgcolorChange(colorbtn.className);
  });
});
