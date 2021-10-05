$(function () {
  $('.new_product_color h2').hide();
  $('.new_product_color h2').fadeIn(3000);

  $('.new_product_camera .text-cover:eq(3) .img span').hide();
  $('.new_product_trueDepth h3').hide();

  let i = 50;

  function growBigCameraImg() {
    i++;
    $('.new_product_camera .text-cover:eq(0) .img span').css(
      'background-size',
      i + '%'
    );
  }

  function shadowAnimate() {
    $('.new_product_camera .text-cover:eq(1) .img span:eq(0)').animate(
      {
        top: '30%',
      },
      4000
    );
  }

  function fadeInPhoneImg(item) {
    if (item === 'veiw') {
      $('.new_product_camera .text-cover:eq(3) .img span').fadeIn(3000);
    } else if (item === 'depth') {
      $('.new_product_trueDepth h3').fadeIn(3000);
    }
  }

  $(window).scroll(function () {
    let cameraTop =
      $('.new_product_camera .text-cover').eq(0).offset().top - 3000;

    let designTop =
      $('.new_product_camera .text-cover').eq(1).offset().top - 500;
    let waterTop = $('.new_product_camera .text-cover').eq(2).offset().top;
    let veiwTop = $('.new_product_camera .text-cover').eq(3).offset().top;
    let trueDepthTop = $('.new_product_trueDepth').offset().top;

    let userScroll = $(this).scrollTop();
    if (userScroll > cameraTop && userScroll < designTop) {
      growBigCameraImg();
    } else if (userScroll > designTop && userScroll < waterTop) {
      shadowAnimate();
    } else if (userScroll > waterTop && userScroll < veiwTop) {
      fadeInPhoneImg('veiw');
    } else if (userScroll > veiwTop && userScroll < trueDepthTop) {
    }
    fadeInPhoneImg('depth');
  });
});
