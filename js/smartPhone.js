$(function () {
  let color = [
    '#efe5fe',
    '#9c99a2',
    '#aecbdb',
    '#e2f4de',
    '#ff9e9d',
    '#fef7f1',
  ];

  let colorName = [
    '라벤더 바이올렛',
    '그레이 블랙',
    '코발트 블루',
    '민트 그린',
    '레드 스페이스',
    '화이트 크림',
  ];

  let fontColor = [
    '#8464b4',
    '#000',
    '#3c81a7',
    '#499238',
    '#fa3632',
    '#a7917d',
  ];

  let wheelOn;

  function wheelMoving() {
    $('.new_product_color_detail').on('mousewheel', function (e) {
      var wheel = e.originalEvent.wheelDelta;
      if (wheel > 0) {
        wheelOn = false;
      } else {
        wheelOn = true;
      }
    });
    return wheelOn;
  }

  let wheelNumUp = -1;

  function colorDetailImgChangeUp() {
    wheelNumUp === 5 ? (wheelNumUp = 0) : wheelNumUp;
    wheelNumUp++;

    $('.new_product_color_detail .text-cover .img span')
      .eq(0)
      .css({
        'background-image': `url(./images/color${wheelNumUp}.jpg)`,
      }),
      $('.new_product_color_detail').css('background-color', color[wheelNumUp]),
      $('.new_product_color_detail').css('color', color[wheelNumUp]),
      $('.new_product_color_detail h3').text(colorName[wheelNumUp]),
      $('.new_product_color_detail h3').css('color', fontColor[wheelNumUp]);
  }

  let wheelNumDown = 6;
  function colorDetailImgChangeDown() {
    wheelNumDown === 0 ? (wheelNumDown = 6) : wheelNumDown;
    wheelNumDown--;

    $('.new_product_color_detail .text-cover .img span')
      .eq(0)
      .css({
        'background-image': `url(./images/color${wheelNumDown}.jpg)`,
      });
    $('.new_product_color_detail').css('background-color', color[wheelNumDown]),
      $('.new_product_color_detail').css('color', color[wheelNumDown]),
      $('.new_product_color_detail h3').text(colorName[wheelNumDown]),
      $('.new_product_color_detail h3').css('color', fontColor[wheelNumDown]);
  }

  $('.new_product_color h2').hide();
  $('.new_product_color h2').fadeIn(3000);

  $('.new_product_camera .text-cover:eq(3) .img span').hide();
  $('.new_product_trueDepth h3').hide();

  if (window.innerWidth < 992) {
    $('.new_product_camera .text-cover:eq(3) .img span').show();
    $('.new_product_trueDepth h3').show();
  }

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

  function imgHide() {
    $('.new_product_color_detail .text-cover').not(':first').hide();
  }

  $(window).scroll(function () {
    let colorDetail = $('.new_product_color_detail').offset().top;
    let cameraTop =
      $('.new_product_camera .text-cover').eq(0).offset().top - 3000;

    let designTop =
      $('.new_product_camera .text-cover').eq(1).offset().top - 500;
    let waterTop = $('.new_product_camera .text-cover').eq(2).offset().top;
    let veiwTop = $('.new_product_camera .text-cover').eq(3).offset().top;
    let trueDepthTop = $('.new_product_trueDepth').offset().top;

    let userScroll = $(this).scrollTop();

    if (userScroll > colorDetail && userScroll < cameraTop) {
      if (window.innerWidth < 992) {
        imgHide();
        wheelMoving() === true
          ? colorDetailImgChangeUp()
          : colorDetailImgChangeDown();
      }
    } else if (userScroll > cameraTop && userScroll < designTop) {
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
