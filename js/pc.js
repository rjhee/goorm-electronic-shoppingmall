$(function () {
  let i = 0;
  let j;
  function pcImgOpen() {
    i = i + 1;
    if (i < 10) {
      j = '00';
    } else if (i >= 10 && i < 100) {
      j = '0';
    } else if (i >= 100) {
      j = 0;
    }
    i <= 121 && $('.pcImg').attr('src', `./images/large_0${j + i}.jpg`);
  }

  function opacityUp() {
    i = i + 1;
    i <= 9 && $('.spec_detail_keyboard .img span').css('opacity', `0.${i}`);
  }

  function fontColorChange() {
    $('.etc_app p').css('color', 'transparent');
    $('.etc_app p').css({
      background: 'linear-gradient(45deg, #fbda61 10%, #ff5acd 100%)',
    });
    $('.etc_app p').css('-webkit-background-clip', 'text');
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
      pcImgOpen();
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
