$(function () {
  $(
    '.new_product_intro .img, .new_product_moving .img , .new_product_time .img, .new_product_touch .img'
  ).hide();

  $('.new_product_intro .img').fadeIn(2000);

  for (let i = 0; i < 3; i++) {
    $('.new_product_tema .img span').eq(i).hide();
  }

  let i = 0;
  function fadeInOutImg() {
    i < 3 ? (i = i) : (i = 0);
    $('.new_product_tema .img span').eq(i).fadeIn(2000);
    setTimeout(() => {
      $('.new_product_tema .img span').eq(i).fadeOut(1000);
      i++;
    }, 1000);
  }

  setInterval(() => {
    fadeInOutImg();
  }, 2000);

  function fadeIn(item) {
    $(`.new_product_${item} .img`).fadeIn(2000);
  }

  $(window).scroll(function () {
    let movingTop = $('.new_product_moving').offset().top;
    let timeTop = $('.new_product_time').offset().top;
    let touchTop = $('.new_product_touch').offset().top;

    let userScroll = $(this).scrollTop();

    if (userScroll > movingTop && userScroll < timeTop) {
      fadeIn('moving');
    } else if (userScroll > timeTop && userScroll < touchTop) {
      fadeIn('time');
    } else if (userScroll > touchTop) {
      fadeIn('touch');
    }
  });
});
