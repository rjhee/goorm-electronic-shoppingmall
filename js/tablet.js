$(function () {
  let width = 1000;
  function nextItem() {
    $('.tablet_page .tablet_detail').animate({ right: width }, 500);
    width = width + width;
  }
  $('.more').click(function () {
    nextItem();
  });
});
