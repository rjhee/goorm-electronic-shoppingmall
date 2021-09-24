$(function () {
  function nextItem() {
    $('.phone_page .phone_detail').animate({ right: '1000px' }, 500);
    $('.pc_page .pc_detail').animate({ right: '1000px' }, 500);
    $('.tablet_page .tablet_detail').animate({ right: '1000px' }, 500);
    $('.homeapp_page .homeapp_detail').animate({ right: '1000px' }, 500);
  }
  $('.more').click(function () {
    nextItem();
  });
});
