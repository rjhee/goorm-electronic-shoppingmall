$(function () {
  function nextItem() {
    $('.homeapp_page .homeapp_detail').animate({ right: '1000px' }, 500);
  }
  $('.more').click(function () {
    nextItem();
  });
});
