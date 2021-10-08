$(function () {
  $(
    '.new_product_intro .img, .new_product_moving .img , .new_product_time .img, .new_product_touch .img'
  ).hide();

  $('.new_product_intro .img').fadeIn(2000);

  for (let i = 0; i < 3; i++) {
    $('.new_product_tema .img span').eq(i).hide();
  }

  let i = 0;
  function fadeInOutImg(name) {
    i > 2 ? (i = 0) : (i = i);
    $(`.new_product_${name} .img span`).eq(i).fadeIn(2000);

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        $(`.new_product_${name} .img span`).eq(i).fadeOut(1000);
      }
    }, 1000);
  }

  setInterval(() => {
    fadeInOutImg('tema');
    fadeInOutImg('alone');
    i++;
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
