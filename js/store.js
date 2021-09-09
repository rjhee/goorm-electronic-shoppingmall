$(function () {
  // slide image

  let userWidth = window.innerWidth;
  $('.slide_img img').not(':eq(0)').css('left', `${userWidth}px`);
  let now = 0;
  let slideImg = 3;
  function slide() {
    now = now == slideImg ? 0 : (now += 1);
    $('.slide_img img')
      .eq(now - 1)
      .animate({ left: `${-userWidth}px` }, 1000);
    $('.slide_img img')
      .eq(now)
      .animate({ left: '0' }, 1000, function () {
        $('.slide_img img').not(`:eq(${now})`).css('left', `${userWidth}px`);
      });
    $('.control_line li').removeClass('hover');
    $('.control_line li').eq(now).addClass('hover');
  }

  let slideInterval = setInterval(slide, 3000);

  function slidePrev() {
    let imgs = 0;
    $('.slide_img img')
      .not(':eq(' + now + ')')
      .css('left', -userWidth + 'px');
    now = now == imgs ? 3 : (now -= 1);
    if (now == 3) {
      $('.slide_img img')
        .eq(0)
        .animate({ left: userWidth + 'px' }, 1000);
    } else {
      $('.slide_img img')
        .eq(now + 1)
        .animate({ left: userWidth + 'px' }, 1000);
    }
    $('.slide_img img')
      .eq(now)
      .animate({ left: '0px' }, 1000, function () {
        $('.slide_img img')
          .not(':eq(' + now + ')')
          .css('left', -userWidth + 'px');
      });
    $('.control_line li').removeClass('hover');
    $('.control_line li').eq(now).addClass('hover');
  }

  $('.prev_btn, .next_btn, .control_line').click(function () {
    clearInterval(slideInterval);
  });

  // prev, next button

  // 버튼 클릭시 함수호출
  $('.prev').click(function () {
    slidePrev();
  });

  $('.next').click(function () {
    slide();
  });

  //블릿기호

  $('.control_line li').click(function () {
    let controlNumber = $(this).index();
    if (now == controlNumber) return;
    else {
      $('.slide_img img').not(`:eq(${now})`).css('left', `${userWidth}px`);
      $('.slide_img img')
        .eq(now)
        .animate({ left: `${-userWidth}px` }, 1000);
      $('.slide_img img')
        .eq(controlNumber)
        .animate({ left: '0px' }, 1000, function () {
          $('.slide_img img')
            .not(`:eq(${controlNumber})`)
            .css('left', `${userWidth}px`);
        });
      $('.control_line li').removeClass('hover');
      $('.control_line li').eq(controlNumber).addClass('hover');
      now = controlNumber;
    }
  });

  // prev, next button
  $('.prev_btn').click(function () {
    slidePrev();
  });

  $('.next_btn').click(function () {
    slide();
  });
});
