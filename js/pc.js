$(function () {
  let Num = 0;
  let i;
  function pcImgOpen() {
    Num === 121 ? (Num = -1) : Num;
    Num = Num + 1;
    if (Num >= 0 && Num < 10) {
      i = '00';
    } else if (Num >= 10 && Num < 100) {
      i = '0';
    } else if (Num >= 100 && Num <= 121) {
      i = 0;
    }

    Num < 121
      ? $('.pcImg').attr('src', `./images/large_0${i + Num}.jpg`)
      : $('html').scrollTop($('.new_product_spec').offset().top);

    console.log(Num);
  }

  function pcImgClose() {
    Num === 0 ? (Num = 122) : Num;
    Num = Num - 1;
    if (Num >= 0 && Num < 10) {
      i = '00';
    } else if (Num >= 10 && Num < 100) {
      i = '0';
    } else if (Num >= 100 && Num <= 121) {
      i = 0;
    }
    Num > 0
      ? $('.pcImg').attr('src', `./images/large_0${i + Num}.jpg`)
      : $('html').scrollTop($('html').offset().top);
    console.log(Num);
  }

  let percent = 0;
  function opacityUp() {
    percent = percent + 1;
    percent <= 9 &&
      $('.spec_detail_keyboard .img span').css('opacity', `0.${percent}`);
  }

  function fontColorChange() {
    $('.etc_app p').css('color', 'transparent');
    $('.etc_app p').css({
      background: 'linear-gradient(45deg, #fbda61 10%, #ff5acd 100%)',
    });
    $('.etc_app p').css('-webkit-background-clip', 'text');
  }

  let wheelOn;
  function wheelMoving() {
    $('.new_product_size').on('mousewheel', function (e) {
      var wheel = e.originalEvent.wheelDelta;
      if (wheel > 0) {
        wheelOn = false;
      } else {
        wheelOn = true;
      }
    });
    return wheelOn;
  }

  $(window).scroll(function () {
    let sizeTop = $('.new_product_size').offset().top + 500;
    let specTop = $('.new_product_spec').offset().top;
    let specDetailkeyboardTop = $('.spec_detail_keyboard').offset().top;
    let specDetailsoundTop = $('.spec_detail_sound').offset().top;
    let connectTop = $('.new_product_connect').offset().top;
    let etcTop = $('.new_product_etc').offset().top;

    let userScroll = $(this).scrollTop();
    if (userScroll > sizeTop && userScroll < specTop) {
      wheelMoving() === true ? pcImgOpen() : pcImgClose();
    } else if (
      userScroll > specDetailkeyboardTop &&
      userScroll < specDetailsoundTop
    ) {
      opacityUp();
    } else if (userScroll > specDetailsoundTop && userScroll < connectTop) {
      $('.spec_detail_sound .video_cover video')[0].play();
    } else if (userScroll > etcTop) {
      fontColorChange();
    }
  });
});
