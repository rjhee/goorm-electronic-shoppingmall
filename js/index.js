$(function () {
  const FLEX = 'flex';
  const NONE = 'none';
  const SIGNIN_TEXT = '회원가입시 50%쿠폰 증정! 회원가입 하러가기👉🏼';
  const modal = document.querySelector('.nav_cover');
  function onModal(display, text) {
    return (
      document.documentElement.style.setProperty('--modal-display', display),
      document.documentElement.style.setProperty('--modal-content', `"${text}"`)
    );
  }
  function joinPageMove(path) {
    window.location.href = path;
  }

  modal.addEventListener('click', (e) => {
    if (e.target.className === 'nav_cover') {
      joinPageMove('join.html');
    }
  });

  onModal(FLEX, SIGNIN_TEXT);

  setTimeout(() => {
    onModal(NONE, SIGNIN_TEXT);
  }, 4000);

  // 스크롤시 이미지 보여주기
  $('.img_tablet, .img_phone, .home_container, .pc_container').hide();

  $(window).scroll(function () {
    let phoneImg = $('.phone_main_cover').offset().top - 500;
    let homeImg = $('.home_main_cover').offset().top - 500;
    let pcImg = $('.pc_main_cover').offset().top - 500;

    let scrollTop = $(this).scrollTop();

    if (scrollTop < phoneImg) {
      $('.img_phone').fadeOut(2000);
    } else if (scrollTop > phoneImg && scrollTop < homeImg) {
      $('.img_phone').fadeIn(2000);
      $('.home_container').fadeOut(2000);
    } else if (scrollTop > homeImg && scrollTop < pcImg) {
      $('.home_container').fadeIn(2000);
    } else if (scrollTop > pcImg) {
      $('.pc_container').fadeIn(2000);
    } else {
      $('.pc_container').fadeOut(2000);
    }
  });
});
