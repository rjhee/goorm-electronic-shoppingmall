$(function () {
  function nextItem() {
    $('.pc_page .pc_detail').animate({ right: '1300px' }, 500);
  }
  $('.more').click(function () {
    nextItem();
  });
});
