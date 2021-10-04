$(function () {
  let i = 70;
  function rotateSizeImg() {
    i = i - 1;
    console.log(i);
    if (i > 0) {
      $('.new_product_size .img span').css('transform', `rotateX(${i}deg)`);
    }
  }

  function cpuAnimate() {
    $('.new_product_cpu .img span').animate({ left: '0' }, 200);
  }

  let j = 0;
  function batteryFill() {
    $('.battery_cover span').eq(j).css('background-color', '#00c6ff');
    j = j + 1;
  }

  $('.pencil_drowing .img').hide();
  $('.pencil_note .img').hide();
  $('.pencil_program .img').hide();
  $('.pencil_video .img').hide();
  function fadeIn(item) {
    $(`.pencil_${item} .img`).fadeIn(5000);
  }

  $(window).scroll(function () {
    let sizeTop = $('.new_product_size').offset().top;
    let cpuTop = $('.new_product_cpu').offset().top;
    let weightTop = $('.new_product_weight').offset().top;
    let batteryTop = $('.new_product_battery').offset().top + 1000;
    let drowingTop = $('.pencil_drowing').offset().top;
    let noteTop = $('.pencil_note').offset().top;
    let programTop = $('.pencil_program').offset().top;
    let videoTop = $('.pencil_video').offset().top;

    let userScroll = $(this).scrollTop();

    if (userScroll > sizeTop && userScroll < cpuTop) {
      rotateSizeImg();
    } else if (userScroll > cpuTop && userScroll < weightTop) {
      cpuAnimate();
    } else if (userScroll > weightTop && userScroll < batteryTop) {
      $('.new_product_weight .img span').eq(0).addClass('cloud_animation');
    } else if (userScroll > batteryTop && userScroll < drowingTop) {
      batteryFill();
    } else if (userScroll > drowingTop && userScroll < noteTop) {
      fadeIn('drowing');
    } else if (userScroll > noteTop && userScroll < programTop) {
      fadeIn('note');
    } else if (userScroll > programTop && userScroll < videoTop) {
      fadeIn('program');
    } else if (userScroll > videoTop) {
      fadeIn('video');
    }
  });
});
